const readline=require("node:readline");
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('whats your name? \nInput name = ',name=>{
    console.log(`Hi ${name}`);
    rl.close();
})