import { useState,useEffect } from 'react'
import Article from '../components/Article'
import Search from '../components/Search'
import postData from "../posts.json"
function Index(){
    const [posts,setPosts]=useState(postData)
    const [postLen,setPostLen]=useState(0)
    useEffect(()=>{
        console.log("Always rendered!")
    })
    useEffect(()=>{
        console.log("Rendered!")
    })
    const onSearchChange=value=>{
        const filteredPosts=postData.filter(item=>item.title.includes(value))
        setPosts(filteredPosts)
        setPostLen(filteredPosts.length)
    }
    return(
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} postLen={postLen}/>
            {posts.map((props,index)=>(
                <Article {...props} key={index} />
            ))}
        </>
    )
}
export default Index;