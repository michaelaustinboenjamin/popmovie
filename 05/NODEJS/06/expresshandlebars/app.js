const express =require('express')
const handlebars=require('express-handlebars')
const app=express()
const hbs=handlebars.create({})
hbs.handlebars.registerHelper('add',(a,b)=>a+b)
app.engine('handlebars',handlebars.engine())
app.set('view engine','handlebars')
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.render("index",{
        title:'Home',
        message:"Howdy Handlebars!"
    })
})
app.get('/blog',(req,res)=>{
    const blogs=[
        {title:"Yoshi finds eggs",snippet:"Lorem ipsum dolor sit amet."},
        {title:"Mario finds gold",snippet:"Lorem ipsum dolor sit amet."},
        {title:"Luigi finds power",snippet:"Lorem ipsum dolor sit amet."}
    ]
    res.render('blog',{
        blogs:blogs
    })
})
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'contact',
        message: 'Howdy Handlebars',
        num1: 5,
        num2: 10,
    });
});
app.get('/about', (req, res) => {
    const title=document.querySelector("h1").innerHTML("About")
    res.render('about', {
        title:title,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore in, repudiandae sequi possimus soluta! Vel quas voluptatibus ut eum!',
    });
});
app.get('/christmas',(req,res)=>{
    const obj=new Date();
    const christmas=obj.getUTCDate()&&obj.getUTCMonth()+1===12;
    res.render('christmas',{
        title:'christmas',
        christmas:christmas
    })
})
app.get('/birthday',(req,res)=>{
    const obj=new Date();
    const birthday=obj.getUTCDate()===28&&obj.getUTCMonth()===12;
    res.render('birthday',{
        title:'birthday',
        birthday:birthday
    })
})
app.use((req,res)=>{
    res.status(404).send('<h1>ERROR,error code 404</h1>')
})
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running in 127.0.0.1:${port}`)
})

