const fs=require('fs');
fs.writeFile('blog.text','hello world',()=>{
    console.log("file was written");
})
fs.writeFile('blog2.text','hello people',()=>{
    console.log("file was written");
})
fs.readFile('blog.text',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString())
})
fs.readFile('blog2.text',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString())
})
if(!fs.existsSync('./assets')){
    fs.mkdir("./assets",err=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
} else{
    fs.rmdir("./assets",err=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}
if(fs.existsSync('deleteme.txt')){
    fs.unlink('deleteme.txt',err=>{
        if(err){
            console.log(err);
        }
        console.log("file deleted")
    })
}