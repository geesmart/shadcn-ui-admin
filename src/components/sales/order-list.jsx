"use client"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";

export default function OrderList() {

    let vdata = [

        {
            name: 'Liam Johnson',
            email: 'liam@example.com',
            type: 'Sale',
            status: 'Fulfilled',
            date: '2023-06-23',
            amount: '$250.00'
        },
        {
            name: 'Olivia Smith',
            email: 'olivia@example.com',
            type: 'Refund',
            status: 'Declined',
            date: '2023-06-24',
            amount: '$150.00'
        },
        {
            name: 'Noah Williams',
            email: 'noah@example.com',
            type: 'Subscription',
            status: 'Fulfilled',
            date: '2023-06-25',
            amount: '$350.00'
        },
        {
            name: 'Emma Brown',
            email: 'emma@example.com',
            type: 'Sale',
            status: 'Fulfilled',
            date: '2023-06-26',
            amount: '$450.00'
        },
        {
            name: 'Ava Jones',
            email: 'ava@example.com',
            type: 'Sale',
            status: 'Fulfilled',
            date: '2023-06-27',
            amount: '$250.00'
        },
        {
            name: 'Lucas Brown',
            email: 'lucas@example.com',
            type: 'Refund',
            status: 'Declined',
            date: '2023-06-28',
            amount: '$150.00'
        },
        {
            name: 'Mia Williams',
            email: 'mia@example.com',
            type: 'Subscription',
            status: 'Fulfilled',
            date: '2023-06-29',
            amount: '$350.00'
        }
    ]

    function getStatusBadgeClass(status) {

        if (status === 'Fulfilled') {
            return 'text-xs bg-green-300 hover:bg-green-400';
        } else if (status === 'Declined') {
            return 'text-xs bg-red-300 hover:bg-red-400';
        }
    }


    return (
        <Card className='border-0'>
            <CardHeader className="px-7">
                <CardTitle className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='w-3 bg-primary/10 h-10 rounded-full'></div>
                        <div className='ml-3'>
                            <div className='text-no font-semibold leading-none tracking-tight text-lg'>Orders</div>
                            <div className='mt-1 text-sm text-muted-foreground font-normal'>
                                Recent orders from your store.
                            </div>
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
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden sm:table-cell">Type</TableHead>
                            <TableHead className="hidden sm:table-cell">Status</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {
                            vdata.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="font-medium">{item.name}</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            {item.email}
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">{item.type}</TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className={getStatusBadgeClass(item.status)}
                                               variant="secondary">{item.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">{item.date}</TableCell>
                                    <TableCell className="text-right">{item.amount}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
