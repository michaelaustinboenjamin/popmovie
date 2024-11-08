import { createBrowserRouter } from 'react-router-dom';
import Index from "../pages/Index"
import About from "../pages/about"
import Blog from "../pages/Blog"
import Layout from "../pages/Layout"
export const router = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<Index />
        },{
            path:'/about',
            element:<About />
        },{
            path:'/Blog',
            element:<Blog />
        }
    ]
}])
