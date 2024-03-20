import inquirer from "inquirer";

const answers: {
    numberOne: number,
    numberTwo: number,
    oparator: string

} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindely enter your first no: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindely enter your second no: "
    },
    {
        type: "list",
        name: "oparator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator: "
    },
]); 

const {numberOne, numberTwo, oparator} = answers;
if(numberOne && numberTwo && oparator) {
    let result: number = 0;
    if(oparator === "+"){
        result = numberOne + numberTwo
    } else    if(oparator === "-"){
        result = numberOne - numberTwo
    } else     if(oparator === "/"){
        result = numberOne / numberTwo
    } else     if(oparator === "*"){
        result = numberOne * numberTwo
    }

    console.log("Your result is :", result)
} else{
    console.log("Kindely enter valid input")
}