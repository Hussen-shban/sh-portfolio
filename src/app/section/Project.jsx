
"use client"
import { useEffect, useRef } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import Pro from "../components/pro";
import { projects } from "../constanst";
import TitleSection from "../components/TitleSection";



export default function Project() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    return (
        <section className=" md:px-20 px-3 section-padding  " id="Project">


            <TitleSection title={"💼 My Projects"} about={"A showcase of what I've built"} />

            <div className="w-[100%]          
                   max-sm:pt-5 pt-10
 m-auto flex items-center justify-around max-sm:justify-center 
  flex-wrap gap-10 max-sm:w-[95%] ">







                {
                    projects.map((pro, index) => (
                        <Pro key={index}
                            img={pro.img}
                            name={pro.name}
                            code={pro.code}
                            web={pro.web}
                        />
                    ))
                }

            </div>
        </section>
    );
}

