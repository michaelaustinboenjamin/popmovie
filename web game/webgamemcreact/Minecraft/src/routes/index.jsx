import { createBrowserRouter } from 'react-router-dom';
import Home from "../page/Home"
import Blogs from "../page/Blogs"
import Download from "../page/Download"
import Community from "../page/Community"
import Layout from "../page/Layout"
import News from "../page/News"
export const router = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<Home />,
            title:"Home"
        },{
            path:'/Download',
            element:<Download />,
            title:"Download"
        },{
            path:"/Community",
            element:<Community />,
            title:"Community"
        },{
            path:'/News',
            element:<News />,
            title:"News"
        },{
            path:'/Blogs',
            element:<Blogs/>,
            title:"Blogs"
        },
    ]
}])
