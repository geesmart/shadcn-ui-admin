import React from "react";

// Admin Imports
import MainDashboard from "@/views/admin/default";
import NFTMarketplace from "@/views/admin/marketplace";
import DataTables from "@/views/admin/datatable";
import { House, Gem, Table, UserRoundCog } from 'lucide-react'
import Profile from "@/views/admin/profile";
import Signin from "@/views/auth/signin.jsx";
import Signup from "@/views/auth/signup.jsx";

const routes = [
    {
        name: "Dashboard",
        layout: "/admin",
        path: "default",
        icon: <House size={18}/>,
        component: <MainDashboard/>,
    },
    {
        name: "NFT Marketplace",
        layout: "/admin",
        path: "nft-marketplace",
        icon: <Gem size={18}/>,
        component: <NFTMarketplace/>,
        secondary: true,
    },
    {
        name: "Data Table",
        layout: "/admin",
        path: "data-tables",
        icon: <Table size={18}/>,
        component: <DataTables/>,
        secondary: true,
    },
    {
        name: "Profile",
        layout: "/admin",
        path: "profile",
        icon: <UserRoundCog size={18}/>,
        component: <Profile/>,
        secondary: true,
    },
    {
        name: "Sign Up",
        layout: "/auth",
        path: "signup",
        icon: <House size={18}/>,
        component: <Signup/>
    },

    {
        name: "Sign In",
        layout: "/auth",
        path: "signin",
        icon: <House size={18}/>,
        component: <Signin/>
    },
];

export default routes;
