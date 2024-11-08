import { useState,useEffect } from 'react'
import postData from "../posts.json"
// import Footer from '../components/Footer'
function Blogs(){
    const [posts,setPosts]=useState(postData)
    const [externalPosts,setExternalPost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(json=>setExternalPost(json))
    },[posts])
    return(
        <>
            <div className="create-blog">
                <form method="post" action="/blogs">
                    <label htmlFor="title">Blog title:</label>
                    <input type="text" id="title" name="title" required />

                    <label htmlFor="snippet">Blog snippet:</label>
                    <input type="text" id="snippet" name="snippet" required />

                    <label htmlFor="body">Blog body:</label>
                    <textarea id="body" name="body" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="externalpost">
            <h1>External Post</h1>
            {externalPosts.map((item,index)=>(
                <div key={index}>{item.title}</div>
            ))}
            </div>
            {/* <Footer></Footer> */}
        </>
    )
}
export default Blogs