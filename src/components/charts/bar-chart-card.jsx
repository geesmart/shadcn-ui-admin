"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import React from "react";

const chartData = [
    {month: "January", desktop: 186},
    {month: "February", desktop: 305},
    {month: "March", desktop: 237},
    {month: "April", desktop: 73},
    {month: "May", desktop: 209},
    {month: "June", desktop: 214},
    {month: "July", desktop: 186},
    {month: "August", desktop: 305},
    {month: "September", desktop: 237},
    {month: "October", desktop: 73},
    {month: "November", desktop: 209},
    {month: "December", desktop: 214},
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
}

export function BarChartCard() {

    const [position, setPosition] = React.useState("bottom")

    return (

        <div className='bg-background p-5 rounded-lg'>

            <div class='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='w-3 bg-primary/10 h-10 rounded-full'></div>
                    <div className='ml-3'>
                        <div className='text-no font-semibold leading-none tracking-tight'>Revenue</div>
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
                            <BarChart accessibilityLayer data={chartData} margin={{top: 20}}>
                                <CartesianGrid vertical={false}/>
                                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false}
                                       tickFormatter={(value) => value.slice(0, 3)}/>
                                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel/>}/>
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                                    <LabelList position="top" offset={12} className="fill-foreground" fontSize={12}/>
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
