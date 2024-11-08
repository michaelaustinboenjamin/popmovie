const readline=require('node:readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let a;
let b;
let c;
rl.question('enter the value of a = ',valuea=>{
    a=parseFloat(valuea);
    rl.question('enter the value of b = ',valueb=>{
        b=parseFloat(valueb);
        rl.question('enter the value of c = ',valuec=>{
            c=parseFloat(valuec);
            const xp=(-b + Math.sqrt(b*b-4*a*c))/2*a;
            const xm=(-b - Math.sqrt(b*b-4*a*c))/2*a;
            console.log(`the value of x1 = ${xp}`);
            console.log(`the value of x2 = ${xm}`);
            rl.close();
        })
    })
})