import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import * as React from "react"
import DatePicker from "@/views/admin/default/components/date-picker.jsx";

const chartData = [
    {month: "January", desktop: 186, mobile: 80},
    {month: "February", desktop: 305, mobile: 200},
    {month: "March", desktop: 237, mobile: 120},
    {month: "April", desktop: 73, mobile: 190},
    {month: "May", desktop: 209, mobile: 130},
    {month: "June", desktop: 214, mobile: 140},
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
}

export default function AreaChartUI() {

    const [date, setDate] = React.useState()

    return (

        <div className='bg-background p-5 rounded-lg'>

            <div class='flex items-center'>
                <div class='w-3 bg-primary h-10 rounded-full'></div>
                <div class='ml-3'>
                    <div class='text-xl font-semibold leading-none tracking-tight'>Area Chart</div>
                    <div class='mt-0.5 text-sm text-muted-foreground'>Showing total visitors for the last 6 months</div>
                </div>
            </div>

            <div class='flex p-3'>
                <div class='flex w-full h-full'>
                    <div class='flex-1'>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" />}
                                />
                                <Area
                                    dataKey="mobile"
                                    type="natural"
                                    fill="var(--color-mobile)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-mobile)"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="desktop"
                                    type="natural"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                    stackId="a"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </div>

                </div>

            </div>
        </div>

        // <Card className='border-0'>
        //     <CardContent>
        //         <ChartContainer config={chartConfig}>
        //             <AreaChart
        //                 accessibilityLayer
        //                 data={chartData}
        //                 margin={{
        //                     left: 12,
        //                     right: 12,
        //                 }}
        //             >
        //                 <CartesianGrid vertical={false} />
        //                 <XAxis
        //                     dataKey="month"
        //                     tickLine={false}
        //                     axisLine={false}
        //                     tickMargin={8}
        //                     tickFormatter={(value) => value.slice(0, 3)}
        //                 />
        //                 <ChartTooltip
        //                     cursor={false}
        //                     content={<ChartTooltipContent indicator="dot" />}
        //                 />
        //                 <Area
        //                     dataKey="mobile"
        //                     type="natural"
        //                     fill="var(--color-mobile)"
        //                     fillOpacity={0.4}
        //                     stroke="var(--color-mobile)"
        //                     stackId="a"
        //                 />
        //                 <Area
        //                     dataKey="desktop"
        //                     type="natural"
        //                     fill="var(--color-desktop)"
        //                     fillOpacity={0.4}
        //                     stroke="var(--color-desktop)"
        //                     stackId="a"
        //                 />
        //             </AreaChart>
        //         </ChartContainer>
        //     </CardContent>
        // </Card>
    )
}
