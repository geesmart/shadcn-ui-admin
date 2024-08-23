import Products from "@/components/datatables/products.jsx";
import Orders from "@/components/datatables/orders.jsx";
import Stock from "@/components/datatables/stock.jsx";


export default function DataTables() {
    return (

        <div className='space-y-5'>

            <div className='grid grid-cols-1 gap-4'>
                <div>
                    <Products/>
                </div>
            </div>

            <div className='grid grid-cols-7 gap-4'>
                <div className='col-span-4'>
                    <Orders/>
                </div>
                <div className='col-span-3'>
                    <Stock/>
                </div>
            </div>
        </div>
    )
}
