import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button.jsx";

export default function NtfTrending() {

    const vData = [
        {
            title: 'Abstract Colors',
            author: 'Esthera Jackson',
            eth:'0.91'
        },
        {
            title: 'ETH AI Brain',
            author: 'Nick Wilson',
            eth:'0.12'
        },
        {
            title: 'Mesh Gradients',
            author: 'Will Smith',
            eth:'0.87'
        }
    ]

    return (

        <div>
            <div className='rounded-lg bg-secondary'>
                <div class='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='w-3 bg-primary/10 h-10 rounded-full'></div>
                        <div className='ml-3'>
                            <div className='text-lg font-semibold leading-none tracking-tight'>Trending NFTs</div>
                            <div className='mt-1 text-sm text-muted-foreground'>Total 1000</div>
                        </div>
                    </div>

                    <div>
                        <Tabs defaultValue="a">
                            <TabsList>
                                <TabsTrigger value="a">Art</TabsTrigger>
                                <TabsTrigger value="m">Music</TabsTrigger>
                                <TabsTrigger value="c">Collection</TabsTrigger>
                                <TabsTrigger value="s">Sports</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>

                <div className='grid-cols-3 grid gap-5 mt-5'>

                    {
                        vData.map((item, index) => {
                            return (
                                <div key={index} className='col-span-1 bg-background rounded-xl p-4'>

                                    <div>
                                        <img className='rounded-xl' src={`/imgs/examples/e${index+1}.png`}/>
                                    </div>

                                    <div className='flex justify-between mt-3 items-center'>
                                        <div>
                                            <div><h1 className='font-semibold'>{item.title}</h1></div>
                                            <div className='text-gray-400 text-sm'>By {item.author}</div>
                                        </div>
                                        <div>
                                            {/*<Heart fill=" red" className='mr-1 text-red-500'/>*/}

                                            <div className='flex items-center justify-center mt-4 flex-row-reverse'>

                                                {/* avatar list */}
                                                <div className='flex flex-row-reverse'>

                                        <span
                                            className=" z-0 inline-flex h-8 w-8 items-center justify-center rounded-full
                                                        border-2 border-white bg-[#E0E5F2] text-xs text-navy-700
                                                    dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
                                                    +5
                                                </span>

                                                    <Avatar className='-ml-3 w-8 h-8'>
                                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                        <AvatarFallback>CN</AvatarFallback>
                                                    </Avatar>

                                                    <Avatar className='-ml-3 w-8 h-8'>
                                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                        <AvatarFallback>CN</AvatarFallback>
                                                    </Avatar>

                                                    <Avatar className='-ml-3 w-8 h-8'>
                                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                        <AvatarFallback>CN</AvatarFallback>
                                                    </Avatar>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    {/* Current Bid: 0.91 ETH */}
                                    <div className='mt-5 flex justify-between items-center'>

                                        <div>
                                            <div className='text-sm text-gray-400'>Current Bid</div>
                                            <div className='text-lg font-semibold'>{item.eth} ETH</div>
                                        </div>

                                        <div>
                                            <Button className='rounded-full'>Place Bid</Button>
                                        </div>

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
