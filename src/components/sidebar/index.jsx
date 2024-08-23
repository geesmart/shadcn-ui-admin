import { House, BadgeDollarSign, Mail, Gem, Package } from 'lucide-react'
import { Link, useLocation } from "react-router-dom";
import routes from "@/routes.jsx";

export default function Sidebar(props) {

    // Get current location
    let location = useLocation();
    const activeRoute = (routeName) => {
        return location.pathname.includes(routeName);
    }

    // Create links
    const createLinks = () => {
        return routes.map((route, index) => {
            return (
                <Link key={index} to={`${route.layout}/${route.path}`} className={`flex items-center gap-3 rounded-md px-3 py-2  ${activeRoute(route.path) ? "bg-secondary text-primary font-medium" : "text-primary/60 font-normal"}`}>
                    {route.icon}
                    <div className='text-base ml-3'>{route.name}</div>
                </Link>
            )
        })
    }

    return (

        <div className="sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-4 w-[280px]">

            <div className="flex items-center">
                <div className="p-6 mt-1 ml-1 h-2.5 text-[23px] font-bold text-navy-600 dark:text-white">
                    <img src='/imgs/logo.png' width='300' />
                </div>
            </div>

            <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30"></div>

            {/* Sider Links */}
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {createLinks()}
            </nav>

            <div className="flex justify-center absolute bottom-4 left-0 right-0">
                <div className="relative mt-14 flex w-[256px] justify-center rounded-[30px] bg-[#2463EB] pb-2">
                    <div
                        className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#2463EB] to-gray-300 dark:!border-navy-800">
                        <Gem size={40} color="#ffffff"/>
                    </div>
                    <div className="mt-16 flex h-fit flex-col items-center">
                        <p className="text-lg font-bold text-white">Upgrade to PRO</p>
                        <p className="mt-1 px-2 text-center text-sm text-white">Improve your development process and
                            start doing more with <br/>Shadcn/UI Pro</p>
                        <a target="blank"
                           className="text-medium mt-7 mb-2 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[12px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5">
                            Upgrade to PRO
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}
