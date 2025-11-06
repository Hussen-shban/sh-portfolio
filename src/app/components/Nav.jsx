"use client"
import { Link } from "react-scroll"
import { nav } from "../constanst"

const Nav = () => {
    return (
        <nav className="fixed w-full bg-black  flex items-center justify-between px-20 py-5 z-[600]
        max-sm:p-[20px]
        ">

            <p className="text-[26px] font-bold
            max-sm:text-[22px]
            ">
                <Link
                    className=" cursor-pointer"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100}
                >
                    Hussen SH
                </Link>
            </p>

            <ul className="flex max-md:hidden items-center justify-center gap-10 text-[18px] ">
                {
                    nav.map((item, index) => (
                        <li key={index}>


                            <Link
                                className=" cursor-pointer"
                                to={item}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={100}
                            >
                                {item}
                            </Link>


                        </li>
                    ))
                }
            </ul>
            <Link
                className=" cursor-pointer"
                to="Contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
            >
                <button className="text-[18px]  rounded-[10px]  !bg-white px-5 py-2 !text-[#000] cursor-pointer
            max-sm:px-3 max-sm:py-2 max-sm:text-[16px] !border-[1px] 
            hover:!bg-black hover:!text-white  hover:!border-white transition
            ">


                    Contact me

                </button>
            </Link>
        </nav>
    )
}

export default Nav