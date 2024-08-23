"use client"

import { Area, AreaChart, CartesianGrid, Line, LineChart, LabelList, XAxis, YAxis } from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import React from "react";

const chartData = [

    {month: "January", revenue: 1000},
    {month: "February", revenue: 2000},
    {month: "March", revenue: 6000},
    {month: "April", revenue: 2000},
    {month: "May", revenue: 8000},
    {month: "June", revenue: 9000},
    {month: "July", revenue: 6000},
    {month: "August", revenue: 1000},
    {month: "September", revenue: 1200},
    {month: "October", revenue: 1500},
    {month: "November", revenue: 4000},
    {month: "December", revenue: 6000}
]

const chartConfig = {
    desktop: {
        label: "Revenue",
        color: "hsl(var(--chart-1))",
    },
}

export function LineChartCard() {

    const [position, setPosition] = React.useState("bottom")

    return (

        <div className='bg-background p-5 rounded-lg'>

            <div class='flex items-center justify-between mb-7'>

                <div className='flex items-center'>
                    <div className='w-3 bg-primary/10 h-10 rounded-full'></div>
                    <div className='ml-3'>
                        <div className='text-lg font-semibold leading-none tracking-tight'>Revenue</div>
                        <div className='mt-1 text-sm text-muted-foreground'>Total $18,900</div>
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

            <div className='flex p-3 w-full'>

                <ChartContainer className='flex-1 h-100' config={chartConfig}>

                    <LineChart accessibilityLayer data={chartData} margin={{left: 0, right: 60, top: 30}}>

                        <CartesianGrid vertical={false}/>

                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />

                        <YAxis tickLine={true} axisLine={false} tickFormatter={(value) => `$${value}`}  />

                        <ChartTooltip cursor={false}  content={<ChartTooltipContent hideLabel/>}/>

                        <Line
                            dataKey="revenue"
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </div>
        </div>
    )
}
