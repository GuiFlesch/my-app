import HeaderOptions from "./HeaderOptions"
import Logo from "./Logo"
import Menu from "./Menu"

interface CabecalhoProps {
    children?: any
    className?: string
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <header className={`
            flex flex-col bg-black min-w-[232px] h-[937px] min- gap-5
        `}>
            <Logo />
            <Menu />
            <HeaderOptions />
        </header>
    )
}