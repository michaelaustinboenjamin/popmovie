import { useState,useEffect } from 'react'
import postData from "../posts.json"
function about(){
    const [posts,setPosts]=useState(postData)
    const [externalPosts,setExternalPost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(json=>setExternalPost(json))
    },[posts])
    return(
        <>
            <h1>External Post</h1>
            {externalPosts.map((item,index)=>(
                <div key={index}>{item.title}</div>
            ))}
        </>
    )
}
export default about