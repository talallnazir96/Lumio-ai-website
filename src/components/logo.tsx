import Image from "next/image";
import Link from "next/link";


const Logo = () => {
    return <>
        <Link href={"/"}>
            <div className={"flex items-center"}>
                <Image src={'/logo.svg'} alt={"Logo Light"} width={600} height={600} className={"w-16 "}/>
                <p className={"text-xl font-bold"}>LumioAi</p>
            </div>
        </Link>
    </>
}

export default Logo