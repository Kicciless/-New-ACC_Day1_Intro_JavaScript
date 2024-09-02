const a=26, b=12, c=10;
//let is oppiste - it is a varibale which that can be changed
let largestNumber=c;
if (a>b && a>c) {
    largestNumber=a;
}
else if (b>a && b>c){
    largestNumber=b;
}

console.log(`The largest number is ::${largestNumber}`)

//2nd way of computing largestNumber using function -DRY
//
let largestValue=computeLargestNumber(400,600,800);
console.log(`The largest number is ::${largestValue}`)
function computeLargestNumber(firstNumber, secondNumber, thirdNumber){

    let largestNumber=firstNumber;
    if (secondNumber>firstNumber && secondNumber>thirdNumber) {
        largestNumber=secondNumber;
    }
    else if (thirdNumber>secondNumber && thirdNumber>firstNumber){
        largestNumber=thirdNumber;
    }
    return largestNumber;
}

// write functions using arrows  - functional programming - es6 modules - update of javaScript

const largestArrowWay=computeLargestNumberArrowWay(20,10,560)
const computeLargestNumberArrowWay=(firstNumber, secondNumber, thirdNumber)=>{
    let largestNumber=firstNumber;
    if (secondNumber>firstNumber && secondNumber>thirdNumber) {
        largestNumber=secondNumber;
    }
    else if (thirdNumber>secondNumber && thirdNumber>firstNumber){
        largestNumber=thirdNumber;
    }
    return largestNumber;
}

// ternary way of writing??? 


