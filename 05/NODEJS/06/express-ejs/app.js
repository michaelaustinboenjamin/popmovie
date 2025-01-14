const express=require('express')
const app=express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const blogs=[
        {title:"Yoshi finds eggs",snippet:"Lorem ipsum dolor sit amet."},
        {title:"Mario finds gold",snippet:"Lorem ipsum dolor sit amet."},
        {title:"Luigi finds power",snippet:"Lorem ipsum dolor sit amet."}
    ]
    res.render('blog',{
        blogs:blogs
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'})
})
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"})
})
app.listen(3000)