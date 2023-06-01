import { IconPlayerPlayFilled } from "@tabler/icons-react";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

interface CardProps {
    title: string
    text: string
    url: string
}


export default function Card(props: CardProps) {
    return (

        <div className={`
            flex flex-col w-44 h-72 relative
            bg-gradient-to-b from-zinc-900 to-neutral-900
            rounded-md my-5 cursor-pointer hover:from-neutral-800 hover:to-neutral-800
        `}>
            <CardImage url={props.url} />
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.text}</CardText>
            <div className="absolute hover:visible opacity-0 hover:opacity-100 w-full h-full">
                <IconPlayerPlayFilled className="absolute bottom-32 right-5 bg-green-600 rounded-full p-[14px]" size={50} />
            </div>
        </div>
    )
}