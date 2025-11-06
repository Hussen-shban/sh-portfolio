import Image from "next/image";

export default function Pro(props) {


    return (
        <div
            data-aos="fade-up"
            className=" w-[510px] h-[450px]  flex flex-col justify-center items-center max-sm:w-[100vw] max-sm:h-[300px]"
        >
            <div className=" bg-[#ffffff31] w-[500px] h-[350px] rounded-[50px] shadow-[rgba(0,0,0,0.3)] shadow-2xl flex items-center justify-center max-sm:p-1 max-sm:w-[100%] max-sm:h-[250px]">
                <div className="w-[450px]  max-sm:w-[95%] max-sm:max-h-[200px] rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.2)] shadow-2xl ">
                    <Image

                        alt={"project image"}
                        src={props.img}
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAEwCAIAAADr9bF0AAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
                    />
                </div>
            </div>
            <div className="flex items-center justify-between w-full pt-7 px-2">
                <p className="font-poppins font-semibold text-[20px] max-sm:text-[18px] bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.5)] text-transparent bg-clip-text">
                    {props.name}
                </p>
                <div className="flex items-center gap-1">
                    <a
                        className="font-poppins flex items-center justify-center text-white bg-[#ffffff31] px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                        href={props.code}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Code
                    </a>
                    <a
                        className="font-poppins flex items-center justify-center text-white bg-[#ffffff31] px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                        href={props.web}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Web
                    </a>
                </div>
            </div>
        </div>

    )
}