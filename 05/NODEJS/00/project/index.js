const inquirer=require('inquirer');
const question=[
    {
        type:"input",
        name:"name",
        message:"What is your name ? = "
    },
    {
        type:"list",
        name:"listquestion",
        message:"what programming language do you like ? = ",
        choices:['Java Script','Python','Java',"CPP/C++"]
    },
    {
        type:"checkbox",
        name:"checkboxquestion",
        message:"what programming language do you like ? = ",
        choices:['Java Script','Python','Java',"CPP/C++"],
        default:'Multiple Choices'
    }
];
inquirer.prompt(question).then(answers=>{
    console.log(answers);
})