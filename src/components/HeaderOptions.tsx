import { IconWorld } from "@tabler/icons-react";

export default function HeaderOptions() {
    return (
        <div className={`
            flex flex-col text-white w-full gap-3 pb-16
        `}>
            <span className="p-5 mt-10 text-xs text-zinc-400 hover:underline cursor-pointer">
                Cookies
            </span>
            <div className={`flex px-3 py-[3px] border
                border-zinc-400 rounded-full
                items-center gap-[3px] text-sm m-auto font-semibold
                hover:scale-105 cursor-pointer hover:border-white`}>
                <IconWorld strokeWidth={1.5} />Português do Brasil
            </div>
        </div>
    )
}