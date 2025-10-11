"use client"
import Image from "next/image"
import Button from "../components/Button"
import { words } from "../constanst"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

words
const Hero = () => {

  const [lighton, setlighton] = useState(false)

  useEffect(() => {
    if (!lighton) return

    const bgHidden = document.querySelector('.bg-hidden')


    const handleMouseMove = (e) => {
      bgHidden.style.setProperty('--x', `${e.clientX}px`)
      bgHidden.style.setProperty('--y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [lighton])
  const secretWord = "sh";
  let typed = "";

  useEffect(() => {
      const handleKeyDown = (event) => {
          typed += event.key.toLowerCase();

          if (typed.length > secretWord.length) {
              typed = typed.slice(-secretWord.length);
          }

          if (typed === secretWord) {
              typed = "";
              Swal.fire({
                  title: "You are the King of Easter Eggs! 🥚👑 Dance like Ricardo and celebrate! 💃",
                  width: 600,
                  padding: "3em",
                  color: "#716add",
                  background: "#fff ",
                  backdrop: `
                    rgba(0,0,0,0.85)
                    url("/images/ricardo.gif")
                    left top
                    no-repeat
                  `
              })
          }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
          document.removeEventListener("keydown", handleKeyDown);
      };
  }, []);

  return (
    <section id="Home" className=" flex relative min-h-screen  md:pt-14 items-center justify-between flex-wrap
   
    ">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className={`bg-hidden ${lighton ? "active" : ""}`}>

      </div>
      {/* left */}
      <div className="relative z-10 xl:mt-20 mt-32  flex xl:items-center items-start justify-center">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p onClick={(e) => {
              setlighton(prev => !prev);
              const bgHidden = document.querySelector('.bg-hidden');
              if (bgHidden) {
                bgHidden.style.setProperty('--x', `${e.clientX}px`);
                bgHidden.style.setProperty('--y', `${e.clientY}px`);
              }
            }} className="text-white-50 md:text-xl relative   z-[600] cursor-pointer">
              Hi, I’m Hussen, a developer based in Syria with a passion for
              code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
      </div>
      {/* right */}
      <div className="flex items-center justify-center  max-lg:w-full">
        <iframe className=" md:w-[500px] md:h-[500px] max-md:hidden bg-black" src="https://my.spline.design/genkubgreetingrobot-wb5p13F14Ml2t9r9s2zGpzou/">
        </iframe>


        <Image

          className="md:hidden w-[300px] h-[300px] rounded-full object-cover object-right mt-16 "
          src="/images/hussen.jpg"
          width={500}
          height={500}
          alt="hussen"
        />


      </div>

    </section>
  )
}

export default Hero