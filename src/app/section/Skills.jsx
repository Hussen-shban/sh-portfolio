"use client"
import Card from "../components/Card"
import TitleSection from "../components/TitleSection"
import { cardimg } from "../constanst"
import confetti from 'canvas-confetti';

const Skills = () => {



  

    return (
        <section id="Skills" className="section-padding   md:px-20 px-5 ">

            <TitleSection
                title={"⚡ Technical Skills"}
                about={"Languages & Tools"}
            />
            <div className="flex items-center           
                            max-sm:pt-5 pt-10
                            justify-center gap-10 flex-wrap">
                {cardimg.map((item, index) => (
                    <Card key={index} img={item.img} />

                ))}


            </div>
        </section>
    )
}

export default Skills