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
            flex flex-col h-full bg-black w-60
        `}>
            <Logo />
            <Menu />
            <HeaderOptions />
        </header>
    )
}