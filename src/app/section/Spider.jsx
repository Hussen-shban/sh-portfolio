"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Spider = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [on, setOn] = useState(false); // الشبح ظاهر أو لا
  const [shakeCount, setShakeCount] = useState(0);

  const bubble1 = useRef(null);
  const bubble2 = useRef(null);
  const bubble3 = useRef(null);
  const ghost = useRef(null);
  const musicRef = useRef(null);

  const messages = [
    "Hello handsome 👋 Click on me!",
    "Why did you shake the screen",
    "I’m watching you 👀",
    "Boo! Scared yet? 😂",
    "Hehehehe... 👻"
  ];

  // عند النقر على الشبح لتغيير النصوص
  const handleGhostClick = () => {
    if (messageIndex >= messages.length - 1) {
      // آخر جملة → إخفاء كل شيء
      gsap.to([ghost.current, bubble1.current, bubble2.current, bubble3.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out"
      });
    } else {
      // أنيميشن تكبير وتصغير
      gsap.fromTo(
        ghost.current,
        { scale: 1 },
        { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" }
      );

      // تغيير النص
      setMessageIndex((prev) => prev + 1);

      // حركة Fade + Slide للنص
      gsap.fromTo(
        bubble3.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }


  };
  useEffect(() => {
    if (messages[messageIndex] === "Boo! Scared yet? 😂" && musicRef.current) {
      musicRef.current.currentTime = 0; // إعادة الصوت من البداية
      musicRef.current.play();
    }
  }, [messageIndex]);
  
  // إعدادات الهزة
  const SHAKE_THRESHOLD = 18;
  const SHAKE_TIMEOUT = 600;
  let lastShakeTime = 0;

  // useEffect لتفعيل الهز
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

      if (shakeStrength > SHAKE_THRESHOLD && now - lastShakeTime > SHAKE_TIMEOUT) {
        lastShakeTime = now;
        setShakeCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            setOn(true); // إظهار الشبح + الفقاعات
            setMessageIndex(0); // إعادة الجملة الأولى
            gsap.to([ghost.current, bubble1.current, bubble2.current, bubble3.current], {
              opacity: 1,
              duration: 0.5,
              ease: "power1.out"
            });
            return 0; // إعادة عداد الهز
          }
          return newCount;
        });
      }

      lastX = x;
      lastY = y;
      lastZ = z;
    };

    // طلب إذن أجهزة iPhone
    const initMotion = async () => {
      if (
        typeof DeviceMotionEvent !== "undefined" &&
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        try {
          const permission = await DeviceMotionEvent.requestPermission();
          if (permission === "granted") {
            window.addEventListener("devicemotion", handleMotion, true);
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
              className="absolute top-[0px] left-[15px] opacity-0 w-[120px] text-[12px] h-16 px-2 flex items-center justify-center bg-white rounded-full text-black shadow-md"
            >
              <p className="text-center">{messages[messageIndex]}</p>
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

        <div
          ref={ghost}
          className="opacity-0 cursor-pointer"
          onClick={handleGhostClick}
        >
          <Image src="/images/ghost.png" width={200} height={200} alt="ghost" />
        </div>
      </div>

      <audio
                ref={musicRef}

               
            >
                <source src="/music/Boo - Sound Effect(MP3_160K).mp3" type="audio/mpeg" />

            </audio>

      <div className="absolute bottom-10 text-sm opacity-70">
        shakes: {shakeCount}/3
      </div>
    </div>
  );
};

export default Spider;
