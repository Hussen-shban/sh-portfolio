"use client"
import { Link } from "react-scroll";
import { useEasterEgg } from "../context/EasterEggContext";
import Swal from "sweetalert2";


export default function Contact() {
    const secretWord = "sh";
    let typed = "";
    const { foundEgg } = useEasterEgg()

    const phoneNumber = "963934865509";
    const message = encodeURIComponent("مرحبًا، أود التواصل معك.");
    return (
        <section className=" relative pt-20  flex items-center  w-full justify-center pb-5 min-h-[100vh]" id="Contact">
            <div className="flex items-center justify-center w-full ">




                <div className="flex items-center w-full justify-center flex-col
            text-white pt-1 
            ">
                    <p className="text-[50px] roboto 
                max-xs:text-[40px] font-semibold
                
                ">
                        <span className="bg-gradient-to-bl from-white to-transparent text-transparent bg-clip-text">Let's </span>
                        <span>Connect</span>
                    </p>
                    <p className="text-center font
                  text-[#7a7a7a] text-[16px]
                max-xs:text-[14px] max-xs:w-[200px]

                ">
                        Feel free contact me if having any questions. i'm available for <br className="max-xs:hidden" />
                        new projects or just for chatting
                    </p>
                    <button
                        className="!bg-gradient-to-t !from-black !to-white/10 text-white  py-2 px-4
                 flex justify-center items-center gap-3 
                 !border-[6px] !border-[#373737] rounded-[27px] text-[14px] mt-[40px] max-xs:text-[12px] max-xs:px-[10px] max-xs:py-[10px]
                "
                    >
                        <a
                            href={`https://wa.me/${phoneNumber}?text=${message}`}
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            Connect With Me
                        </a>
                        <img src="/svg/arrow.svg" alt="arrow"
                            className="w-6 rotate-[35deg]
            max-xs:w-4
            "/>

                    </button>

                    <div className=" mt-28 max-xs:mt-20 flex gap-20   justify-between  w-[70%] max-sm:w-[90%]  flex-wrap max-xs:flex-col max-xs:pl-6 max-xs:gap-7 ">
                        <div className="text-[#7a7a7a] max-xs:text-[14px]  flex items-start flex-col">
                            <p className="
                        mb-1 text-white
                        font-semibold text-[18px] max-xs:text-[16px]">Contact Me</p>

                            <a href="mailto:hussenshban200041@gmail.com?subject=Hello&body=I would like to contact you.">hussenshban200041@gmail.com</a>




                            <input
                                className="border-none outline-0 text-black"
                                type="text"
                                onChange={(e) => {
                                    typed += e.target.value.slice(-1).toLowerCase();

                                    if (typed.length > secretWord.length) {
                                        typed = typed.slice(-secretWord.length);
                                    }

                                    if (typed === secretWord) {
                                        foundEgg(4)
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
                                }}
                            />
                        </div>

                        <div className="text-[#7a7a7a] max-xs:text-[14px]  flex items-start flex-col">
                            <p className="
                        mb-1 text-white
                        font-semibold text-[18px] max-xs:text-[16px]">Quicl Link</p>

                            <Link
                                className=" cursor-pointer"
                                to="Home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={100}
                            >
                                Home
                            </Link>

                            <Link
                                className=" cursor-pointer"

                                to="Journey"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={100}
                            >
                                Journey
                            </Link>


                            <Link
                                className=" cursor-pointer"

                                to="Skills"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={100}
                            >
                                Skills
                            </Link>

                            <Link
                                className=" cursor-pointer"

                                to="Project"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={100}
                            >
                                Project
                            </Link>

                        </div>


                        <div className="text-[#7a7a7a] max-xs:text-[14px] flex items-start flex-col gap-2">
                            <p className="
                        mb-1 text-white
                        font-semibold text-[18px] max-xs:text-[16px]">Social</p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/hussenshshabn/">Instagram
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/hussensh.shabn?mibextid=ZbWKwL">Facebook
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/hussen-shban-685693337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin
                            </a>
                        </div>
                    </div>



                </div>
            </div>


        </section>
    )
}