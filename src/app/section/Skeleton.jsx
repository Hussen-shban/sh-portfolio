"use client";

import { useRef } from "react";
import Lamp from "../components/Lamp";
import Lottie from "lottie-react";
import animationData from "../constanst/lotties/death-dance.json";
import Draggable from "react-draggable";
import Music from "../components/Music";
import Image from "next/image";

const Skeleton = () => {
    const containerRef = useRef(null);
    const draggableRef = useRef(null);
    const lottieRef = useRef();

    const handlePlay = () => {
        lottieRef.current.play();
    };

    const handlePause = () => {
        lottieRef.current.pause();
    };

    const handleStop = () => {
        lottieRef.current.stop();
    };
    return (
        <div
            ref={containerRef}
            className=" section-padding flex justify-center items-center relative h-full overflow-hidden"
        >

            <div className=" absolute h-fit z-[200] bottom-[30%] right-[5%] max-sm:top-[20%]">
                <Music
                    handlePause={handlePause}
                    handlePlay={handlePlay}
                    handleStop={handleStop}
                />
            </div>
            <div className="absolute z-50 left-[5%] bottom-[40%] max-sm:bottom-[28%]">



                <Draggable
                    nodeRef={draggableRef}
                    bounds={{ left: -100, right: 1100, top: -390, bottom: 80 }}        >
                    <div
                        ref={draggableRef}
                        className="cursor-grab active:cursor-grabbing"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            transition: "transform 0.2s ease-out", // 💫 السلاسة
                        }}
                    >
                        <Lottie

                            lottieRef={lottieRef}
                            animationData={animationData}
                            loop
                            autoplay={false}
                            // style={{ width: 200, height: 200 }}
                            className=" w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[150px]"
                        />
                    </div>
                </Draggable>
            </div>

            <div className="relative">
                <Lamp />
            </div>

            <div className="absolute z-[200] bottom-[10%] right-[41%] max-sm:bottom-[12%] max-sm:right-[20%] h-fit">
                <Image
                    src="/images/mic.png"
                    width={50}
                    height={50}
                    alt="mic"

                    className=" w-[50px]  max-sm:w-[40px] "
                />

            </div>

        </div>
    );
};

export default Skeleton;
