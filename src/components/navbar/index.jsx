import avatar11 from "@/assets/avatars/avatar7.png"
import { Input } from "@/components/ui/input"
import { Bell, Moon, Info } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Badge } from "@/components/ui/badge"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function Navbar(props) {

    const {currentRoute} = props

    console.log('currentRoute :', currentRoute)

    return (

        <nav
            class="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">

            <div class="ml-[6px]">
                <div class="h-6 w-[224px] pt-1">
                    <a class="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                       href="">Pages<span
                        class="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white"> / </span>
                    </a>
                    <a class="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                       href="/admin/default">
                        {currentRoute?.name}
                    </a>
                </div>
                <p class="shrink text-[33px] capitalize text-navy-700 dark:text-white">
                    <a class="font-bold capitalize hover:text-navy-700 dark:hover:text-white" href="/admin/default">
                        {currentRoute?.name}
                    </a>
                </p>
            </div>

            <div
                class="relative mt-[3px] flex justify-between h-[61px] w-[400px] items-center rounded-full bg-gray-200/40 px-3">

                <div
                    class="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
                    <Input placeholder="Search" className='rounded-full'/>
                </div>


                <div className='flex items-center'>

                    <div className="relative flex mx-2">
                        <HoverCard>

                            <HoverCardTrigger>
                                <p className="cursor-pointer">
                                    <Bell size={16} strokeWidth={2}/>
                                </p>
                            </HoverCardTrigger>

                            <HoverCardContent className='w-400'>

                                <div className='flex justify-between border-b-[1px] border-gray-400 py-1 pb-3'>
                                    <div>Notification</div>
                                    <Badge>Mark all read</Badge>
                                </div>

                                <div>

                                    <div className='flex justify-between'>

                                        <button className="flex w-full items-center">
                                            <div
                                                className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div
                                                className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                                    New Update: Horizon UI Dashboard PRO
                                                </p>
                                                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                                    A new update for your downloaded item is available!
                                                </p>
                                            </div>
                                        </button>
                                    </div>

                                    <div className='flex justify-between'>

                                        <button className="flex w-full items-center">
                                            <div
                                                className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div
                                                className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                                    New Update: Horizon UI Dashboard PRO
                                                </p>
                                                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                                    A new update for your downloaded item is available!
                                                </p>
                                            </div>
                                        </button>

                                    </div>

                                    <div className='flex justify-between'>

                                        <button className="flex w-full items-center">
                                            <div
                                                className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div
                                                className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                                    New Update: Horizon UI Dashboard PRO
                                                </p>
                                                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                                    A new update for your downloaded item is available!
                                                </p>
                                            </div>
                                        </button>

                                    </div>

                                    <div className='flex justify-between'>

                                        <button className="flex w-full items-center">
                                            <div
                                                className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div
                                                className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                                    New Update: Horizon UI Dashboard PRO
                                                </p>
                                                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                                    A new update for your downloaded item is available!
                                                </p>
                                            </div>
                                        </button>

                                    </div>

                                    <div className='flex justify-between'>

                                        <button className="flex w-full items-center">
                                            <div
                                                className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div
                                                className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                                    New Update: Horizon UI Dashboard PRO
                                                </p>
                                                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                                    A new update for your downloaded item is available!
                                                </p>
                                            </div>
                                        </button>

                                    </div>

                                    <div className='flex justify-between'>

                                        <button className="flex w-full items-center">
                                            <div
                                                className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div
                                                className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                                                    New Update: Horizon UI Dashboard PRO
                                                </p>
                                                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                                                    A new update for your downloaded item is available!
                                                </p>
                                            </div>
                                        </button>

                                    </div>


                                </div>

                            </HoverCardContent>
                        </HoverCard>
                    </div>

                    <div className="relative flex mx-2">
                        <Info size={16} strokeWidth={2}/>
                    </div>

                    <div className="cursor-pointer text-gray-600 mx-2">
                        <Moon size={16} strokeWidth={2}/>
                    </div>

                    {/* avatar */}
                    <div className="relative flex ml-3">
                        <div className="flex">

                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src={avatar11} alt="@shadcn"/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                    </div>

                </div>
            </div>
        </nav>

    )
}
