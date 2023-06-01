import Card from "./Card";

export default function Conteudo() {
    return (
        <main className={`
            flex flex-col ml-7 mt-8 gap-7
        `}>
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-white">Foco</h2>
                    <span className="text-zinc-400 text-sm font-semibold mr-14 cursor-pointer">Mostrar tudo</span>
                </div>
                <div className={`gap-6 grid grid-cols-1
                min-[675px]:grid-cols-2 min-[675px]:max-w-[400px] 
                min-[875px]:grid-cols-3 min-[875px]:max-w-[600px]
                lg:flex lg:max-w-[1280px]

                `}>
                    <Card title='Peaceful Piano' text='Peaceful piano to help you slow down...' url='/card1.jpg' />
                    <Card title='Deep Focus' text='Keep calm and focus with ambient and pos...' url='/card2.jpg' />
                    <Card title='Instrumental Study' text='Focus with soft study music in the...' url='/card3.jpg' />
                    <Card title='Focus Flow' text='Uptempo instrumental hip hop beats.' url='/card4.jpg' />
                    <Card title='Workday Lounge' text='Lounge and chill out music for your workday' url='/card5.jpg' />
                    <Card title='Beats to think to' text='Focus with deep techno and tech house.' url='/card6.jpg' />
                    {/* <Card title='Reading Adventure' text='Scores and soundtracks for darin...' url='/card7.jpg' /> */}
                    {/* <Card title='Relaxing Reading' text='Gentle instrumental music to help you rela...' url='/card8.jpg' /> */}
                </div>
            </div>


            <div className="flex flex-col border-b border-b-zinc-800 pb-16">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-white">Playlists do Spotify</h2>
                </div>
                <div className={`gap-6 grid grid-cols-1
                min-[675px]:grid-cols-2 min-[675px]:max-w-[400px] 
                min-[875px]:grid-cols-3 min-[875px]:max-w-[600px]
                lg:flex lg:max-w-[1280px]

`}>
                    <Card title='Todays top hits' text='Dua Lipa is on top of hotest' url='/card9.jpg' />
                    <Card title='RapCaviar' text='New music from Lil Durk, Moneybagg Yo...' url='/card10.jpg' />
                    <Card title='All out 2010s' text='The biggest songs of 2010s' url='/card11.jpg' />
                    <Card title='Rock Classics' text='Rock legends & epic songs that continue t...' url='/card12.jpg' />
                    <Card title='Chill Hits' text='Kick back to the best new and recent chill...' url='/card13.jpg' />
                    <Card title='Viva Latino' text="Today's top Latin hits, elevando nuestra..." url='/card14.jpg' />
                    {/* <Card title='Mega Hit Mix' text='A mega mix of 75 favorites from the last...' url='/card15.jpg' /> */}
                    {/* <Card title='All Outs 80s' text='The biggest songs of the 1980s.' url='/card16.jpg' /> */}
                </div>
            </div>
        </main>
    )
}