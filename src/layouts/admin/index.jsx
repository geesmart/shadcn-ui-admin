import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Sidebar from "@/components/sidebar/index.jsx";
import Navbar from "@/components/navbar/index.jsx";
import routes from "@/routes.jsx";
import Footer from "@/components/footer/Footer.jsx";
import { useState, useEffect } from 'react'
import { findRouteByPath, getDefaultRoute } from "@/lib/route-utils.js";

export default function Admin(props) {

    // Location
    const location = useLocation()

    // Current Route
    const [currentRoute, setCurrentRoute] = useState(null)

    const getRoutes = () => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route path={`/${prop.path}`} element={prop.component} key={key}/>
                )
            } else {
                return null;
            }
        })
    }

    // Location Effect
    useEffect(() => {
        let route = findRouteByPath(location.pathname)
        setCurrentRoute(route)
    }, [location.pathname])

    return (
        <div class="h-full w-full bg-muted flex overflow-scroll">

            {/* Sidebar */}
            <Sidebar/>


            {/* Main */}
            <div className='h-full w-full'>

                <main className='ml-[300px] pr-4'>

                    <Navbar currentRoute={currentRoute}/>

                    {/* Content */}
                    <div className='w-full h-full overflow-scroll'>
                        <Routes>
                            {getRoutes()}
                            <Route path="/" element={<Navigate to="/admin/default" replace/>}/>
                        </Routes>
                    </div>


                    {/* Footer */}
                    <div className="">
                        <Footer/>
                    </div>

                </main>

            </div>

        </div>
    )
}
