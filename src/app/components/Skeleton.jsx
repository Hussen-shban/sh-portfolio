"use client"

import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'
import { motion } from 'framer-motion'
import Lamp from './Lamp'
import { useRef } from 'react'
const Skeleton = () => {

    const containerRef = useRef(null);
    return (
        <div
            ref={containerRef}
            className="flex justify-center items-center relative h-full overflow-hidden">
            <div className=' absolute z-50 left-[5%] bottom-[40%]'>
                <motion.div

                    drag // ⬅️ هذا يسمح بالسحب أفقياً (يمين/يسار)
                    dragConstraints={containerRef}
                    dragElastic={0.2} // مرونة السحب (0 = ثابت، 1 = مطاطي)
                    whileTap={{ scale: 1.05 }} // تأثير بسيط لما تمسك العنصر
                    className="cursor-grab active:cursor-grabbing"

                    style={{
   
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                    }}
                >


                    <DotLottiePlayer
                        src="/lotties/death-dance.json"  // مسار الملف داخل public
                        autoplay
                        loop
                        style={{ width: 200, height: 200 }}

                    />

                </motion.div>
            </div>


            <div className=" relative">
                <Lamp />

            </div>
        </div>
    )
}

export default Skeleton