interface PaginaProps {
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
            flex bg-gradient-to-r from-zinc-800 to-neutral-950 h-screen w-screen
            `}>
            {props.children}
        </div>
    )
}