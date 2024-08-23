import { ChartNoAxesCombined, User, Package2, BadgeDollarSign } from "lucide-react"

export default function CardList() {

    let group1 = [
        {
            icon: <ChartNoAxesCombined/>,
            title: 'Earnings',
            value: '$2,300',
        },

        {
            icon: <User/>,
            title: 'Sales',
            value: '$574.34',
        },
        {
            icon: <Package2/>,
            title: 'Products',
            value: '1,200',
        },
        {
            icon: <BadgeDollarSign/>,
            title: 'Revenue',
            value: '$1,200',
        },
        {
            icon: <User/>,
            title: 'Customers',
            value: '1,200',
        }
    ]

    return (
        group1.map((item, index) => (
            <div key={index} className='bg-background flex justify-between p-6 items-center rounded-lg'>
                <div>
                    <div className='text-sm font-light text-muted-foreground'>{item.title}</div>
                    <div className='font-medium text-lg mt-1'>{item.value}</div>
                </div>
                <div className='p-3 bg-primary text-primary-foreground rounded-full'>
                    {item.icon}
                </div>
            </div>
        ))
    )

}
