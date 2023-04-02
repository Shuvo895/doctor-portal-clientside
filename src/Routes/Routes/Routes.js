import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layouts/Main";
import Login from "../../Pages/Login/Login";
import Appointments from "../../Pages/Appointments/Appointments/Appointments";

export const router= createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/appointment',
                element:<Appointments></Appointments>
            }
        ]
    }
])

export default router;