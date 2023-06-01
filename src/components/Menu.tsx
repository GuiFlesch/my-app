import { IconHome2, IconSearch, IconBook, IconPlus, IconHeart } from "@tabler/icons-react"
import MenuItem from "./MenuItem"

interface MenuProps {
    children?: any
    className?: string
}

export default function Menu(props: MenuProps) {
    return (
        <nav>
            <ul className={`
            flex flex-col text-zinc-400 
            w-full p-5 font-semibold text-sm
            gap-4
        `}>
                <MenuItem icone={<IconHome2 />}>Início</MenuItem>
                <MenuItem icone={<IconSearch />}>Buscar</MenuItem>
                <MenuItem icone={<IconBook />}>Sua biblioteca</MenuItem>
            </ul>
            <ul className={`
            flex flex-col text-zinc-400 
            w-full p-5 font-semibold text-sm
            gap-4 md:pb-96 pb-72
        `}>
                <MenuItem icone={<IconPlus
                    strokeWidth={2}
                    className={`text-zinc-900 bg-zinc-400 
                    rounded-sm p-1`} />}
                >
                    Criar playlist
                </MenuItem>

                <MenuItem icone={<IconHeart
                    strokeWidth={2}
                    className={`text-zinc-200 
                    bg-gradient-to-br from-indigo-600 to-zinc-300 
                    rounded-sm p-1`} />}
                >
                    Músicas curtidas
                </MenuItem>
            </ul>
        </nav>
    )
}