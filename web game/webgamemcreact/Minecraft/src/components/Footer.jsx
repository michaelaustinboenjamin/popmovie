import { Link,Outlet } from "react-router-dom"
export default function Footer (){
	const articleStyle={
		float: left,
        display: flex,
        flexDirection: column,
        backgroundColor: black
	}
	const articleStyle2={
		float: right,
        display: flex,
        flexDirection: column,
        backgroundColor: black
	}
	return(
		<footer>
            <div className="container">
                <div className="left" style={articleStyle}>
                    <h3>Find Us On</h3>
                    <Link to={""}>Steam</Link>
                    <Link to={""}>Playstation</Link>
                    <Link to={""}>Xbox</Link>
                </div>
                <div className="right" style={articleStyle2}>
                    <h1>Mojang Studios</h1>
                    <p>Stockholm,2009</p>
                    <p>Sweden</p>
                </div>
                <Outlet />
            </div>
        </footer>
    )
}