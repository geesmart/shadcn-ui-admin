import { ChartNoAxesCombined, User, Package2, BadgeDollarSign } from "lucide-react"

import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import RecentSales from "@/components/sales/recent-sales.jsx";
import { LineChartCard } from "@/components/charts/line-chart-card.jsx";
import OrderList from "@/components/sales/order-list.jsx";
import CardList from "@/components/sales/card-list.jsx";

export default function Dashboard(props) {

    return (

        <div className='py-4 h-full w-full'>

            {/* Card List */}
            <div className="grid grid-cols-5 gap-4">
                <CardList/>
            </div>

            <div className='grid gap-3 grid-cols-5 mt-5'>

                {/* Sale Chart */}
                <div className='col-span-3'>
                    <LineChartCard/>
                </div>

                {/* Recent Sales */}
                <div className='col-span-2 h-30'>
                    <RecentSales/>
                </div>

            </div>

            {/* Order List*/}
            <div className='mt-5'>
                <OrderList/>
            </div>

        </div>
    )
}
