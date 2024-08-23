import routes from "@/routes.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

export function findRouteByPath(path) {

    for (const route of routes) {
        let fullPath = route.layout + '/' + route.path;
        if (fullPath === path) {
            return route;
        }
    }

    return null;
}

export function getDefaultRoute() {
    return routes[0];
}


// export function getRoutes() {
//     return routes.map((prop, key) => {
//         if (prop.layout === "/admin") {
//             return (
//                 <Route path={`/${prop.path}`} element={prop.component} key={key}/>
//             )
//         } else {
//             return null;
//         }
//     })
// }
