import Image from "next/image";

const ComplexSection = () => {
    return <>
        <div className="p-8 bg-gray-50 w-[75%] m-auto mb-5">
            <div
                className="bg-gradient-to-r text-center m-auto from-purple-500 via-blue-500 to-cyan-500 rounded-md p-6 flex items-center justify-center text-white">
                <h1 className="text-5xl font-bold text-center">
                    Our AI handles the <br/> complex work for you
                </h1>
                <div>
                    <Image src={'/assets/images/home/grad-img.svg'} alt={"Grad Image"} width={300} height={300} className={"w-36"}/>
                </div>
            </div>
        </div>
    </>
}

export default ComplexSection