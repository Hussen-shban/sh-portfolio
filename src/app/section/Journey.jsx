"use client"
import gsap from "gsap"
import TitleSection from "../components/TitleSection"
import { expCards } from "../constanst"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";
const Journey = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            offset: 200,
        });
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".timeline").forEach((timeline) => {
            gsap.to(timeline, {
                scaleY: 0,
                transformOrigin: "bottom bottom",
                ease: "power1.in",
                scrollTrigger: {
                    trigger: timeline,
                    start: "top center",
                    end: "60% center",
                    scrub: true,
                },
            });
        });

    }, []);




    return (

        <section id="Journey" className="flex md:pb-40 pb-20  items-center justify-center section-padding overflow-hidden  xl:px-0">

            <div className="h-full md:px-20 px-3  relative  ">

                <div>
                    <TitleSection title={"🚀 Path of Growth"} about={"My Learning Journey"} />

                </div>

                <div className="flex pt-25  flex-col justify-between gap-30
                max-sm:pt-10
                ">

                    {
                        expCards.map((item, index) => {
                            return (
                                <div className="  flex  justify-between
                                max-lg:flex-col max-lg:gap-10
                                " key={index}>

                                    <div
                                        data-aos="fade-right"
                                        className="w-2/6 flex flex-col gap-4 px-12 z-50 rounded-xl border-[1px] border-[#ffffff23] bg-[#0e0e10]  py-10 text-[#ffffffcc]  text-[18px]
                                    max-lg:w-full
                                    max-sm:px-5 max-sm:py-5
                                    ">
                                        <div className="flex">
                                            {
                                                Array(5).fill(0).map((_, i) => (
                                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#fff" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
                                                ))
                                            }

                                        </div>
                                        <p className="max-sm:text-[16px]">{item.source}</p>
                                        <img className="w-[100px] rounded-full
                                        max-sm:w-[70px]
                                        " src={item.imgPath} alt="" />
                                    </div>
                                    <div className="w-4/6 relative flex justify-between
                                    max-lg:w-full 
                                    ">

                                        <div className="w-1/3 flex relative items-center justify-center">
                                            <div className="timeline w-full absolute h-[150%] bg-black z-40 
                                            max-lg:h-[200%]
                                            " />
                                            <div className={`gradient-line${index} w-1`} />
                                        </div>
                                        <div
                                            data-aos="fade-left"

                                            className="  w-3/4 flex flex-col gap-4"  >
                                            <h1 className="text-3xl font-semibold
                                            max-sm:text-2xl
                                            ">{item.title}</h1>
                                            <p className="text-[18px] text-[#ffffffcc]  font-[200]
                                             max-sm:text-[16px] 
                                            ">{item.date}</p>
                                            <p className="italic text-[#6a92b5] texr-[18px] font-medium
                                             max-sm:text-[16px]
                                            ">What I Learned</p>
                                            <ul className="flex  flex-col gap-5 items-start text-lg">
                                                {item.exp?.map((point, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-[#ffffffcc] flex items-center justify-around gap-3 max-sm:text-[16px]"
                                                    >
                                                        <div className="w-2 h-2 shrink-0 rounded-full bg-white" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>


                                        </div>
                                        <div className="p-4 absolute left-[10%] z-30 top-[-10%] w-fit bg-[#0e0e10] rounded-full border-[1px] border-[#18181d]

                                              max-sm:left-[6%] max-sm:p-3  max-sm:top-[0px]
                                              ">
                                            <img className="max-sm:w-[40px]" src={item.logoPath} alt="" />
                                        </div>
                                    </div>



                                </div>
                            )
                        })
                    }



                </div>


            </div>

        </section>
    )
}

export default Journey