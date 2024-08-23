"use client"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { TrendingUp } from 'lucide-react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function RecentSales() {

    let vData = [
        {
            user: 'Olivia Martin',
            email: 'olivia.martin@email.com',
            amount: '+$1,999.00',
            avatar: '/imgs/avatars/1.svg',
            fallback: 'OM'
        },
        {
            user: 'Jackson Lee',
            email: 'jackson.lee@email.com',
            amount: '+$39.00',
            avatar: '/imgs/avatars/6.svg',
            fallback: 'JL'
        },
        {
            user: 'Isabella Nguyen',
            email: 'isabella.nguyen@email.com',
            amount: '+$299.00',
            avatar: '/imgs/avatars/6.svg',
            fallback: 'IN'
        },
        {
            user: 'William Kim',
            email: 'will@email.com',
            amount: '+$99.00',
            avatar: '/imgs/avatars/1.svg',
            fallback: 'WK'
        },
        {
            user: 'Sofia Davis',
            email: 'sofia.davis@email.com',
            amount: '+$39.00',
            avatar: '/imgs/avatars/6.svg',
            fallback: 'SD'
        },
        {
            user: 'Liam Wilson',
            email: 'liam.wilson@email.com',
            amount: '+$99.00',
            avatar: '/imgs/avatars/6.svg',
            fallback: 'LW'
        },
        {
            user: 'Liam Wilson',
            email: 'liam.wilson@email.com',
            amount: '+$99.00',
            avatar: '/imgs/avatars/6.svg',
            fallback: 'LW'
        }
    ]


    return (

        <Card className='border-0'>
            <CardHeader>
                <CardTitle className='flex items-center'>
                    <div className='w-3 bg-primary/10 h-10 rounded-full'></div>
                    <div className='ml-3'>
                        <div className='text-no font-semibold leading-none tracking-tight text-lg'>Recent Sales</div>
                        <div className='mt-1 text-sm text-muted-foreground font-normal'>
                            Total Spent
                            <span className='text-xs ml-1 font-semibold text-emerald-500'>
                                +2.45%
                                <TrendingUp className='inline-block ml-1' size={12} strokeWidth={3}/>
                            </span>
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                {
                    vData.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage src={item.avatar} alt="Avatar"/>
                                    <AvatarFallback>{item.fallback}</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">{item.user}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {item.email}
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    {item.amount}
                                </div>
                            </div>
                        )
                    })
                }

            </CardContent>
        </Card>
    )
}
