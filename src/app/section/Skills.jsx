"use client"
import Card from "../components/Card"
import TitleSection from "../components/TitleSection"
import { cardimg } from "../constanst"
import confetti from 'canvas-confetti';

const Skills = () => {

    const handleClick = () => {
        confetti({
            particleCount: 200,
            spread: 80,
            origin: { y: 0.6 },
        });
    };

    return (
        <section id="Skills" className="section-padding   md:px-20 px-5 ">

            <TitleSection
                title={"⚡ Technical Skills"}
                about={"Languages & Tools"}
            />
            <div className="flex items-center                 max-sm:pt-5 pt-10
 justify-center gap-10 flex-wrap">
                {cardimg.map((item, index) => (
                    <Card key={index} img={item.img} />

                ))}

                <button
                    onClick={handleClick}
                    className="px-6 py-3 bg-pink-500 text-white rounded-xl text-lg"
                >
                    🎉 Celebrate!
                </button>
            </div>
        </section>
    )
}

export default Skills