"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const Music = ({handleStop,handlePlay,handlePause}) => {


    const [musicon, setMusicon] = useState(false)
    const [progress, setProgress] = useState(0)
    const musicRef = useRef(null)

    const handleplay = () => {
        const newState = !musicon
        setMusicon(newState)

        if (newState) {
            musicRef.current.play()
            handlePlay()
        } else {
            musicRef.current.pause()
            handlePause()
        }
    }

    const handleTimeUpdate = () => {
        const audio = musicRef.current

        if (audio && audio.duration) {
            const percent = ((audio.currentTime / audio.duration) * 100)
            setProgress(percent)
        }

    }

    const handleEnded = () => {
        setProgress(0)
        setMusicon(false)
        handleStop()

    }


    return (
        <div className=''>
            <div className="audio-player w-screen  ">
                <div
                className={`${musicon ? "rotat" :"paused"} album-cover overflow-hidden`}
                >
                    <Image
                        src='/images/roadjack.jpg'
                        width={100}
                        height={100}
                        alt='music'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="player-controls">
                    <div className="song-info">
                        <div className="song-title">Hit The Road Jack</div>
                        <p className="artist">Ray Charles</p>
                    </div>
                    <div className="progress-bar">
                        <div
                            style={{ width: `${progress}%` }}
                            className="progress"></div>
                    </div>
                    <div className="buttons mt-1">
                        <button onClick={handleplay} className={`play-btn ${musicon && "hidden"}`}>
                            <svg
                                viewBox="0 0 16 16"
                                className="bi bi-play-fill"
                                fill="currentColor"
                                height="16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: 'white' }}
                            >
                                <path
                                    fill="white"
                                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                                />
                            </svg>
                        </button>

                        <button onClick={handleplay} className={`play-btn ${!musicon && "hidden"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><rect width="4" height="14" x="6" y="5" fill="#fff" rx="1" /><rect width="4" height="14" x="14" y="5" fill="#fff" rx="1" /></svg>                        </button>

                    </div>
                </div>
            </div>
            <audio
                ref={musicRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
            >
                <source src="/music/Ray_Charles_Hit_The_Road_Jack_Official_Lyrics_VideoMP3_160K.mp3" type="audio/mpeg" />

            </audio>
        </div>


    )
}

export default Music