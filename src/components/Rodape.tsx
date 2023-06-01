import PremiumItem from "./PremiumItem";

export default function Rodape() {
    return (
        <div className={`
        flex absolute bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500
        w-full h-[72px] bottom-0 items-center justify-between
    `}>
            <div>
                <span className="uppercase text-white text-sm font-normal p-3">Testar o premium de graça</span>
                <p className="text-white font-normal pl-3 text-sm">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito</p>
            </div>
            <PremiumItem className="text-black bg-white px-8 py-2 rounded-full hover:text-black list-none mr-5">Inscreva-se grátis</PremiumItem>
        </div>
    )
}