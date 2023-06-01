import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex w-full p-5">
            <Image src='/logo.png' width={130} height={130} alt='Logo Spotify' className="cursor-pointer" />
        </div>
    )
}