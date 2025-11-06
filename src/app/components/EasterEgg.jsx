"use client"
import Image from 'next/image'
import React from 'react'
import { useEasterEgg } from '../context/EasterEggContext'

const EasterEgg = () => {
  const { count } = useEasterEgg()

  return (
    <div className='w-[130px] p-5 h-[50px] z-[700] gap-3 mt-28 max-sm:mt-20 ml-5 rounded-[5px] fixed flex items-center justify-center bg-[#ffffff28] '>
      <p>{count}/4</p>
      <Image
        src="/images/easteregg.png"
        width={50}
        height={50}
        alt='easter egg'
      />

    </div>
  )
}

export default EasterEgg