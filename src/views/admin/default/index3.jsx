import { ChartNoAxesCombined, User, Package2, BadgeDollarSign } from "lucide-react"

import { Button } from "@/components/ui/button.jsx";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function Dashboard(props) {

    return (
        <div className='pt-4 h-full min-h-[84vh]'>

            <div className='grid gap-4 grid-cols-3'>

                <div className='col-span-1 bg-white shadow rounded-md p-5 relative'>
                    <div>
                        <div className=''>Congratulations 🎉 John!</div>
                        <div className='text-sm text-gray-500 font-light mt-2'>You have won gold medal</div>
                    </div>

                    <div className='mt-7'>
                        <h3 className="mb-3">
                            <a href="#" target="_self" className="text-2xl font-medium">$48.9k</a>
                        </h3>
                        <Button className='font-normal'>
                            View Sales Report
                        </Button>
                    </div>

                    <div className='absolute top-0 right-10'>
                        <img src='/imgs/svg/gold.svg'/>
                    </div>

                </div>

                <div className='col-span-2 bg-white shadow rounded-md p-6 relative'>
                    <div class='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div class='h-5 w-2 bg-primary mr-2 rounded'></div>
                            <div class='text-xl'>Statistics</div>
                        </div>
                        <div class='flex justify-between'>
                            <Tabs defaultValue="account" className="w-[200px]">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="account">Today</TabsTrigger>
                                    <TabsTrigger value="password">Yestoday</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 p-10'>
                        <div className='flex items-center'>
                            <div className='text-white bg-black p-3 rounded-full'>
                                <ChartNoAxesCombined/>
                            </div>
                            <div className='ml-3'>
                                <div className='font-medium text-xl'>230K</div>
                                <div className='text-sm text-gray-500 font-light mt-1'>Sales</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='text-white bg-black p-3 rounded-full'>
                                <User/>
                            </div>
                            <div className='ml-3'>
                                <div className='font-medium text-xl'>1.423K</div>
                                <div className='text-sm text-gray-500 font-light mt-1'>Customers</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='text-white bg-black p-3 rounded-full'>
                                <Package2/>
                            </div>
                            <div className='ml-3'>
                                <div className='font-medium text-xl'>$9745</div>
                                <div className='text-sm text-gray-500 font-light mt-1'>Products</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='text-white bg-black p-3 rounded-full'>
                                <BadgeDollarSign/>
                            </div>
                            <div className='ml-3'>
                                <div className='font-medium text-xl'>$9745</div>
                                <div className='text-sm text-gray-500 font-light mt-1'>Revenue</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
