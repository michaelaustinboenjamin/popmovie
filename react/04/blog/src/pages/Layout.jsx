import { Link,Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
            <nav>
                <Link to={'/'}>Home</Link> | <Link to={'/about'}>About</Link> | <Link to={'/Blog'}>Blog</Link>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout