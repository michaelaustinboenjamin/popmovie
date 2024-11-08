const inquirer=require('inquirer');
function calculateBMI(weight,height){
    const heightinmeters=height/100;
    const bmi=weight/(heightinmeters*heightinmeters);
    return bmi.toFixed(2);
}
function getBMIcategory(bmi){
    if(bmi<18.5){
        return("underweight");
    } else if(bmi>=18.5&&bmi<24.9){
        return("normal weight");
    } else if(bmi>=25&&bmi<29.9){
        return("overweight");
    } else{
        return("obesity");
    }
}
const question=[
    {
        type:"input",
        name:"weight",
        message:"enter your weight in kg = "
    },
    {
        type:"input",
        name:"height",
        message:"enter your height in cm = "
    }
]
inquirer.prompt(question).then(answers=>{
    const weight=answers.weight;
    const height=answers.height;
    const bmi=calculateBMI(weight,height);
    const category=getBMIcategory(bmi);
    console.log(`your bmi is ${bmi}`);
    console.log(`You are classified as ${category}`);
});