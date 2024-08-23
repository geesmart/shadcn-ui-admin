
import InputForm from "@/components/profile/form.jsx";

export default function Profile() {
    return (
        <div className="w-full h-full  bg-white p-10 rounded-lg">

            {/* header */}
            <div className="space-y-0.5 border-b-[1px] pb-5">
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
            </div>


            <div className='flex w-full h-full pt-4 space-x-6'>

                {/* left */}
                <aside className='w-1/5  bg-white'>

                    <nav className='flex space-y-1 flex-col py-2'>

                        <a className='bg-muted inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2  hover:bg-muted justify-start'>
                            Profile
                        </a>

                        <a className='inline-flex bg-white items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start'>
                            Account
                        </a>

                        <a className='inline-flex bg-white items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start'>
                            Appearance
                        </a>

                        <a className='inline-flex bg-white items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start'>
                            Notifications
                        </a>

                        <a className='inline-flex bg-white items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start'>
                            Display
                        </a>


                    </nav>

                </aside>

                {/* right */}
                <div className='flex-1'>

                    {/* header */}
                    <div className="space-y-0.5 border-b-[1px] py-2">
                        <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
                        <p className="text-muted-foreground text-sm">This is how others will see you on the site.</p>
                    </div>

                    {/* form */}
                    <div className='pt-4'>
                        <InputForm/>
                    </div>

                </div>

            </div>

        </div>
    )
}
