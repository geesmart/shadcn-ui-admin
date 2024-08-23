import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Progress } from "@/components/ui/progress"


export default function NtfHistory() {



    const vData = [
        {
            id: 1,
            img: '/imgs/examples/e1.png',
            name: 'NFT Work 1',
            owner: 'John Doe',
            price: '0.4 ETH',
            time: '30s ago'
        },
        {
            id: 2,
            img: '/imgs/examples/e1.png',
            name: 'NFT Work 2',
            owner: 'Jane Smith',
            price: '0.4 ETH',
            time: '30s ago'
        },
        {
            id: 3,
            img: '/imgs/examples/e1.png',
            name: 'NFT Work 3',
            owner: 'Bob Johnson',
            price: '0.4 ETH',
            time: '30s ago'
        },
        {
            id: 4,
            img: '/imgs/examples/e1.png',
            name: 'NFT Work 4',
            owner: 'Alice Williams',
            price: '0.4 ETH',
            time: '30s ago'
        },
        {
            id: 5,
            img: '/imgs/examples/e1.png',
            name: 'NFT Work 5',
            owner: 'Tom Brown',
            price: '0.4 ETH',
            time: '30s ago'
        }
    ]


    return (
        <div>
            <div className='p-5 rounded-lg bg-white'>

                {/* header */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='w-3 bg-primary/10 h-10 rounded-full'></div>
                        <div className='ml-3'>
                            <div className='text-lg font-semibold leading-none tracking-tight'>History</div>
                        </div>
                    </div>
                    <div>
                        <a className='text-xs text-gray-500 hover:text-primary cursor-pointer'>View All</a>
                    </div>
                </div>

                {/* list view */}
                <div className='mt-5'>


                    {
                        vData.map((item, index) => (
                            <div className='flex justify-between items-center relative p-2' key={index}>
                                <div className='flex justify-between items-center'>
                                    <img className='h-16 w-16 rounded-lg' src={item.img}/>
                                    <div className='ml-3'>
                                        <div className='text-primary font-semibold'>{item.name}</div>
                                        <div className='text-gray-400 text-sm'>{item.owner}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='font-semibold text-sm'>{item.price}</div>
                                </div>

                                <div className='absolute top-1 right-2 text-xs text-gray-400'>{item.time}</div>
                            </div>
                        ))
                    }


                    {/*<div className='flex justify-between items-center relative p-2'>*/}
                    {/*    <div className='flex justify-between items-center'>*/}
                    {/*        <img className='h-16 w-16 rounded-lg' src='/imgs/examples/e1.png'/>*/}
                    {/*        <div className='ml-3'>*/}
                    {/*            <div className='text-primary font-semibold'>Colorful Heaven</div>*/}
                    {/*            <div className='text-gray-400 text-sm'>Mark Benjamin</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <div className='font-semibold text-sm'>0.4 ETH</div>*/}
                    {/*    </div>*/}

                    {/*    <div className='absolute top-1 right-2 text-xs text-gray-400'>30s ago</div>*/}
                    {/*</div>*/}


                </div>


            </div>
        </div>
    )
}
