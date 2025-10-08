"use client"

import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'
import { motion } from 'framer-motion'
const Skeleton = () => {
    return (
        <div className="flex justify-center items-center h-screen">

            <motion.div
            
            drag // ⬅️ هذا يسمح بالسحب أفقياً (يمين/يسار)
            dragConstraints={{ left: -200, right: 200 }} // حدود الحركة
            dragElastic={0.2} // مرونة السحب (0 = ثابت، 1 = مطاطي)
            whileTap={{ scale: 1.05 }} // تأثير بسيط لما تمسك العنصر
            className="cursor-grab active:cursor-grabbing"
            >


                <DotLottiePlayer
                    src="/lotties/death-dance.json"  // مسار الملف داخل public
                    autoplay
                    loop
                    style={{ width: 100, height: 100 }}

                />

            </motion.div>
        </div>
    )
}

export default Skeleton