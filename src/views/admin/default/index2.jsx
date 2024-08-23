import { Activity, CreditCard, DollarSign, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AreaChartUI from "@/views/admin/default/components/charts/area-chart.jsx";
import { BarChartUI } from "@/views/admin/default/components/charts/bar-chart.jsx";
import { ProductList } from "@/views/admin/default/components/product-list.jsx";
import { PieChartUI } from "@/views/admin/default/components/charts/pie-chart.jsx";
import { Bar2Chart } from "@/views/admin/default/components/charts/bar2-chart.jsx";

export default function Dashboard(props) {

    return (
        <div className='pt-4s h-full min-h-[84vh]'>

            <div className='p-6 rounded-xl'>

                <div class='flex items-center mb-3'>
                    <div class='w-[12px] h-[26px] bg-[black] mr-3 rounded'></div>
                    <div class='font-semibold text-xl '>Overview</div>
                </div>

                <div className='grid gap-3 grid-cols-4'>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <div className='w-9 h-9 bg-black rounded-full flex items-center justify-center text-white'>
                                <DollarSign className="h-4 w-4 text-muted-foreground text-white"/>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card className=''>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Subscriptions
                            </CardTitle>
                            <div className='w-9 h-9 bg-black rounded-full flex items-center justify-center text-white'>
                                <Users className="h-4 w-4 text-muted-foreground text-white"/>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='bg-[#F0ECFD] border-0'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <div className='w-9 h-9 bg-black rounded-full flex items-center justify-center'>
                                <CreditCard className="h-4 w-4 text-muted-foreground text-white "/>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">
                                +19% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='bg-[#FFEFD4] border-0'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>

                            <div className='w-9 h-9 bg-black rounded-full flex items-center justify-center text-white'>
                                <Activity className="h-4 w-4 text-muted-foreground text-white"/>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">
                                +201 since last hour
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className='mt-4 grid gap-3 grid-cols-4'>
                <AreaChartUI/>
                <BarChartUI/>
                <PieChartUI/>
                <Bar2Chart/>
            </div>

            <ProductList/>

        </div>
    )
}
