interface MenuItemProps {
    icone?: any
    children: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className="flex items-center gap-4 hover:brightness-150 cursor-pointer">
            {props.icone} {props.children}
        </li>
    )
}