// import { children } from "react";
import Shop from "../pages/site/Shop/Shop";
import About from "../pages/site/About/About";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import AddPage from "../pages/admin/AddPage/AddPage";
import Products from "../pages/admin/Products/Products";

const ROUTES=[{
   path:"/",
   element: <SiteRoot/>,
   children:[
    {
        path:"",
        element:<Home/>
    },
    {
        path:"shop",
        element:<Shop/>
    },
    {
        path:"about",
        element:<About/>
    }
   ]

},
{
    path:"/admin",
    element:<AdminRoot/>,
    children:[
        {
            path:"",
            element:<Dashboard/>
        },
        {
            path:"/admin/add",
            element: <AddPage/>
        
        },
        {
            path:"/admin/products",
            element: <Products/>
        
        },

    ]
}]

export default ROUTES