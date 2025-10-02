
const TitleSection = ({title,about}) => {
    return (
        <div className="flex items-center justify-center flex-col mb-16">
            <div className="px-5 py-2  font-medium text-[17px] rounded-full bg-[#282732]">
                <p>
                    {title}

                </p>
            </div>

            <div className="">
                <h1 className="text-5xl w-full mt-5 text-center font-semibold
                max-sm:text-4xl
                ">{about}</h1>
            </div>
        </div>
    )
}

export default TitleSection