export default function Grade(props: any) {
    return (
        <div className="flex flex-col flex-1 bg-gradient-to-r from-zinc-800 to-neutral-950">
            {props.children}
        </div>
    )
}