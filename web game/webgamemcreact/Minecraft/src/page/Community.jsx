import { Link,Outlet } from "react-router-dom";
// import Footer from "../components/Footer"
function Community(){
    return(
        <>
            <div className="about">
                <div className="container">
                <div className="left">
                    <span className="title">About Mojang Studios</span>
                    <p>Mojang Studios is a Swedish video game developer based in Stockholm. The studio is best known for developing the sandbox and survival game Minecraft, the best-selling video game of all time.</p>
                    <p></p>
                </div>
                <div className="right" >
                    <span className="title">About</span>
                    <div className="contact">
                    <div className="left">
                        <span>Youtube: </span>
                        <span>Instagram: </span>
                        <span>Facebook: </span>
                    </div>
                    <div className="right">
                        <Link to={"https://www.youtube.com/channel/UC1sELGmy5jp5fQUugmuYlXQ"}>Minecraft Youtube Channel</Link>
                        <Link to={"https://www.instagram.com/minecraft/"}>Minecraft Instagram</Link>
                        <Link to={"https://www.facebook.com/minecraft/"}>Minecraft Facebook</Link>
                    </div>
                    </div>
                </div>
                </div>
                <Outlet/>
            </div>
            {/* <Footer></Footer> */}
        </>
    )
}
export default Community