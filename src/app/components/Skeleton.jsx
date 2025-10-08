"use client"

import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'
const Skeleton = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <DotLottiePlayer
                src="/lotties/death-dance.json"  // مسار الملف داخل public
                autoplay
                loop
                style={{ width: 100, height: 100 }}
            />
        </div>
    )
}

export default Skeleton