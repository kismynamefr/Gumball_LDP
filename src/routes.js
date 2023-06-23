import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import Home from "./pages/home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout props={< Home />} />,
    },
])
// 
const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes;