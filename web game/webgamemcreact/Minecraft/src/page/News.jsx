import React from 'react';
import { Link,Outlet } from 'react-router-dom';
const News = ({ blogs=[]}) => {
  return (
    <>
        <div className="news content">
        <h2>News</h2>
        {blogs.length > 0 ? (
            blogs.map((blog) => (
            <Link className="single" href={`/blogs/${blog._id}`} key={blog._id}>
                <h3 className="title">{blog.title}</h3>
                <p className="snippet">{blog.snippet}</p>
            </Link>
            ))
        ) : (
            <p>There are no blogs to display...</p>
        )}
        </div>
    </>
  );
};
export default News;
// function News(){
//     return(
//         <>
//             <div className="news content">
//                 <h2>News</h2>
//                 <p>Sorry This Feature is currently unavailable🥲</p>
//                 <p>There are no blogs to display...</p>
//             </div>
//         </>
//     )
// }
// export default News