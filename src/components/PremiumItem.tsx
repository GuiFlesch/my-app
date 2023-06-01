interface PremiumItemProps{
    children: any
    className?: string
}

export default function PremiumItem(props: PremiumItemProps){
    return (
        <li className={`
            text-base 
            tracking-wider font-semibold
            hover:scale-105
            cursor-pointer
            ${props.className ?? ''}`}>{props.children}
        </li>
    )
}