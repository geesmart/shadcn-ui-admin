
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "@/routes.jsx";

export default function Auth() {

    const getRoutes = () => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route path={`/${prop.path}`} element={prop.component} key={key}/>
                )
            } else {
                return null;
            }
        })
    }

    return (
        <div class="flex h-full w-full bg-[#F4F4F4] dark:bg-white">
            <Routes>
                {getRoutes()}
            </Routes>
        </div>
    );
}
