"use client";

import { useRef } from "react";
import Lamp from "./Lamp";
import Lottie from "lottie-react";
import animationData from "../constanst/lotties/death-dance.json";
import Draggable from "react-draggable";

const Skeleton = () => {
    const containerRef = useRef(null);
    const draggableRef = useRef(null);

    return (
        <div
            ref={containerRef}
            className="flex justify-center items-center relative h-full overflow-hidden"
        >
            <div className="absolute z-50 left-[5%] bottom-[40%]">



                <Draggable
                    nodeRef={draggableRef}
                    bounds={{ left: -100, right: 1100, top: -390, bottom: 50 }}        >
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
                            animationData={animationData}
                            loop
                            style={{ width: 200, height: 200 }}
                        />
                    </div>
                </Draggable>
            </div>

            <div className="relative">
                <Lamp />
            </div>
        </div>
    );
};

export default Skeleton;
