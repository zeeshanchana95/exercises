var age = 10;
if(age >= 65){
    console.log("You get your income from your pension");
}
else if(age >= 18 && age < 65){
    console.log("Each month you get a salary");
}
else if(age < 18){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age variable is not numerical")
}


var day = "Sunday"
switch(day){
    case "Monday":
        console.log("It's Monday today");
        break;
    case "Tuesday":
        console.log("It's Tuesday today");
        break;
    case "Wednesday":
        console.log("It's Wednesday today");
        break;
    case "Thursday":
        console.log("It's Thursday today");
        break;
    case "Friday":
        console.log("It's Friday today");
        break;
    case "Saturday":
        console.log("It's Saturday today");
        break;
    case "Sunday":
        console.log("It's Sunday today");
        break;
    default:
        console.log("There is no such day");
        break;
    
}