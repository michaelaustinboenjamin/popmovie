import { Link,Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
            <nav>
                <div className="Home"><Link to={'/'}><div class="mcgamelogo"></div></Link></div>
                <div className="site-title">
                    <Link to={'/Download'}>Download</Link>   <Link to={'/Community'}>Community</Link>   <Link to={'/News'}>News</Link>   <Link to={'/Blogs'}>Blogs</Link>
                </div>
                <div className="socials">
                    <Link to={''}>🔍 Search</Link>
                    <Link to={''}>🔒 Account</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout