import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Progress } from "@/components/ui/progress"


export default function TopCreators() {

    let vData = [
        {
            id: 1,
            name: 'Grace',
            avatar: '/imgs/avatars/1.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 2,
            name: 'Faith',
            avatar: '/imgs/avatars/3.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 3,
            name: 'Hope',
            avatar: '/imgs/avatars/4.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 4,
            name: 'Joy',
            avatar: '/imgs/avatars/5.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 5,
            name: 'Charity',
            avatar: '/imgs/avatars/2.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 6,
            name: 'Patience',
            avatar: '/imgs/avatars/3.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 7,
            name: 'Prudence',
            avatar: '/imgs/avatars/5.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 8,
            name: 'Temperance',
            avatar: '/imgs/avatars/4.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 9,
            name: 'Justice',
            avatar: '/imgs/avatars/2.svg',
            artworks: 100,
            progress: 60
        },
        {
            id: 10,
            name: 'Peace',
            avatar: '/imgs/avatars/1.svg',
            artworks: 100,
            progress: 60
        }
    ]


    return (
        <div>
            <div className='p-5 rounded-lg bg-white'>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='w-3 bg-primary/10 h-10 rounded-full'></div>
                        <div className='ml-3'>
                            <div className='text-lg font-semibold leading-none tracking-tight'>Top Creators</div>
                            <div className='mt-1 text-sm text-muted-foreground'>top 10</div>
                        </div>
                    </div>

                    <div>
                        <a className='text-xs text-gray-500 hover:text-primary cursor-pointer'>View All</a>
                    </div>
                </div>

                {/* top creators */}
                <div className='mt-3'>

                    {
                        vData.map((item, index) => {
                            return (
                                <div key={index} className='grid grid-cols-4 p-2 gap-y-2'>

                                    <div className='flex items-center gap-3 col-span-3'>
                                        <label className='text-gray-400'>{item.id}.</label>
                                        <Avatar className='w-10 h-10'>
                                            <AvatarImage src={item.avatar} alt="@shadcn"/>
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <label>{item.name}</label>
                                    </div>

                                    <div className='col-span-1 flex items-center flex-col-reverse'>
                                        <Progress value={item.progress} className="w-full h-[10px]"/>
                                        <div className='text-xs'>artworks: {item.artworks}</div>
                                    </div>

                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}
