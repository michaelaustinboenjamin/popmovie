const inquirer=require("inquirer");
let min=0;
let max=100;
const num=Math.floor(Math.random()*100-0+1) + min;
const maxAttemp=10;
console.log("Welcome to guessing number");
const Name = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'Please enter your username: ',
        }
    ]);
};
const playgame=(num,attemptsleft,userName)=>{
    if (attemptsleft===0){
        console.log(`Sorry ${userName},You have run out of attempt to continue playing.\nthe number was ${num}`);
        return;
    }
    inquirer.prompt([
        {
        type:"input",
        name:"guess",
        message:`Guess a number between 1 to 100 (Attempt Left=${attemptsleft})`
        }
    ]).then(answer=>{
        const guess=parseInt(answer.guess);
        if(guess===num){
            console.log(`Congrats ${userName}!!,You have guessed the correct number (YOU WON !!!) `);
        } else{
            if(guess<num){
                console.log(`the number is between ${guess} and ${max} `)
                min=guess;
            }
            else{
                console.log(`the number is between ${min} and ${guess} `)
                max=guess;
            }
            playgame(num,attemptsleft-1,userName);
        }
    });
};
Name().then(answers => {
    const userName = answers.userName;
    playgame(num, maxAttemp, userName);
});