"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Spider = () => {
  const [on, setOn] = useState(false);
  const [shakeCount, setShakeCount] = useState(0);
  const bubble1 = useRef(null);
  const bubble2 = useRef(null);
  const bubble3 = useRef(null);
  const ghost = useRef(null);

  // إعدادات الحركة
  const SHAKE_THRESHOLD = 18; // الحساسية
  const SHAKE_TIMEOUT = 600; // الزمن بين كل هزة مسموحة (ms)
  const SHAKE_COOLDOWN = 4000; // الوقت اللي يمنع تكرار التفعيل (ms)

  let lastShakeTime = 0;

  useEffect(() => {
    if (on) {
      // أنيميشن GSAP
      gsap.to(bubble1.current, { opacity: 1, duration: 1, delay: 1 });
      gsap.to(bubble2.current, { opacity: 1, duration: 0.5, delay: 1.3 });
      gsap.to(bubble3.current, { opacity: 1, duration: 0.5, delay: 1.5 });
      gsap.to(ghost.current, { opacity: 1, duration: 2 });
    }
  }, [on]);

  useEffect(() => {
    let lastX = null,
      lastY = null,
      lastZ = null;

    const handleMotion = (e) => {
      const acc = e.accelerationIncludingGravity || {};
      const x = acc.x || 0;
      const y = acc.y || 0;
      const z = acc.z || 0;

      if (lastX === null) {
        lastX = x;
        lastY = y;
        lastZ = z;
        return;
      }

      const deltaX = Math.abs(x - lastX);
      const deltaY = Math.abs(y - lastY);
      const deltaZ = Math.abs(z - lastZ);
      const shakeStrength = deltaX + deltaY + deltaZ;

      const now = Date.now();

      // التحقق من الهزة
      if (shakeStrength > SHAKE_THRESHOLD && now - lastShakeTime > SHAKE_TIMEOUT) {
        lastShakeTime = now;
        setShakeCount((prev) => {
          const newCount = prev + 1;
          console.log(`Shake #${newCount}`);
          if (newCount >= 3) {
            // بعد 3 هزات، شغّل التأثير
            setOn(true);
            setTimeout(() => setShakeCount(0), SHAKE_COOLDOWN);
          }
          return newCount;
        });
      }

      lastX = x;
      lastY = y;
      lastZ = z;
    };

    // طلب الإذن لأجهزة iPhone
    const initMotion = async () => {
      if (
        typeof DeviceMotionEvent !== "undefined" &&
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        try {
          const permission = await DeviceMotionEvent.requestPermission();
          if (permission === "granted") {
            window.addEventListener("devicemotion", handleMotion, true);
          } else {
            alert("⚠️ الرجاء السماح باستخدام مستشعر الحركة لتفعيل التأثير.");
          }
        } catch (err) {
          console.error("Permission error:", err);
        }
      } else {
        window.addEventListener("devicemotion", handleMotion, true);
      }
    };

    initMotion();

    return () => {
      window.removeEventListener("devicemotion", handleMotion, true);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
      <div className="relative">
        <div className="absolute top-[-30%] left-[70%]">
          <div className="relative">
            <div
              ref={bubble3}
              className="absolute top-[0px] left-[15px] opacity-0 w-[100px] text-[12px] h-16 px-2 flex items-center justify-center bg-white rounded-full text-black"
            >
              <p className="text-center">my name hussen sh</p>
            </div>
            <div
              ref={bubble2}
              className="absolute top-[60px] opacity-0 left-[15px] w-4 h-4 rounded-full bg-white"
            />
            <div
              ref={bubble1}
              className="top-[80px] opacity-0 bg-white left-[5px] absolute w-2 h-2 rounded-full"
            />
          </div>
        </div>

        <div className="opacity-0" ref={ghost}>
          <Image src="/images/ghost.png" width={200} height={200} alt="ghost" />
        </div>
      </div>

      {/* عداد الهزّات */}
      <div className="absolute bottom-10 text-sm opacity-70">
        shakes: {shakeCount}/3
      </div>
    </div>
  );
};

export default Spider;
