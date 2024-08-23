"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import React from "react";

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

export function AreaChartCard() {

    const [position, setPosition] = React.useState("bottom")

    return (

        <div className='bg-background p-5 rounded-lg'>

            <div class='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='w-3 bg-primary/10 h-10 rounded-full'></div>
                    <div className='ml-3'>
                        <div className='text-lg font-semibold leading-none tracking-tight'>Bar Chart - Multiple</div>
                        <div className='mt-0.5 text-sm text-muted-foreground'>January - June 2024</div>
                    </div>
                </div>

                <div>
                    <Tabs defaultValue="m">
                        <TabsList>
                            <TabsTrigger value="m">Monthly</TabsTrigger>
                            <TabsTrigger value="w">Weekly</TabsTrigger>
                            <TabsTrigger value="t">Today</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            <div className='flex p-3'>
                <div className='flex w-full'>
                    <div className='flex-1'>

                        <ChartContainer config={chartConfig}>

                            <AreaChart accessibilityLayer data={chartData}>

                                <CartesianGrid vertical={true}/>
                                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)}/>
                                <YAxis type="number" domain={[0, "dataMax"]} tickLine={false} axisLine={false} tickMargin={0} />
                                <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="dot"/>}/>
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
    )
}
