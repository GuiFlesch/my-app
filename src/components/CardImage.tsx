import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";

interface CardImageProps{
    url: string
}

export default function CardImage(props: CardImageProps){
    return (
        <div className="mx-auto mt-4 shadow-lg shadow-zinc-950 relative">
            <Image src={props.url} width={150} height={150} alt="Card image" className="rounded-md"/>         
        </div>
    )
}