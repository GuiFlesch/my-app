import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import PremiumItem from "./PremiumItem";

export default function PremiumBar() {
    return (
        <div className={`
            flex bg-neutral-900 w-full h-16 justify-between
        `}>
            <div className="flex items-center text-zinc-400 gap-2 ml-7">
                <IconChevronLeft className="rounded-full bg-neutral-950 p-1 cursor-pointer" size={35} strokeWidth={1} />
                <IconChevronRight className="rounded-full bg-neutral-950 p-1 cursor-pointer" size={35} strokeWidth={1} />
            </div>
            <div className="flex items-center mr-8 gap-4">
                <ul className="flex gap-2">
                    <PremiumItem className="text-zinc-400">Premium</PremiumItem>
                    <PremiumItem className="text-zinc-400">Suporte</PremiumItem>
                    <PremiumItem className="text-zinc-400">Baixar</PremiumItem>
                </ul>
                <span className="text-white m-2">|</span>
                <ul className="flex gap-5 items-center ">
                    <PremiumItem className="text-zinc-400">Inscrever-se</PremiumItem>
                    <PremiumItem className="text-black bg-white px-8 py-2 rounded-full">Entrar</PremiumItem>
                </ul>
            </div>
        </div>
    )
}