/**********************************************************/
function sumOfNum(a , b) {
    if (typeof a === "number" && typeof b === "number"){
        return a + b
    } else {
        alert("6. b.: Both variables must be numeric")
        return NaN
    }
}

var sumOfNumResult = sumOfNum(2, 3)
console.log("6. a.:" , sumOfNumResult)

/**********************************************************/
var sumOfNumResult = sumOfNum("a" , 3)
console.log("6. b.:" , sumOfNumResult)

/**********************************************************/
function anInteger(c) {
    if (Number.isInteger(c)) {
        return true
    } else {
        return false
    }
}
    
var enteredValue = anInteger(1.5)
console.log("6. c.:" , enteredValue)

/**********************************************************/
function integerSum(d , e){
    if (typeof d !== "number" && typeof e !== "number"){
        alert("6. d.: Both variables must be numeric")
        return NaN
    } else {
        alert("6. d. & e.: Result will be rounded")
        return Math.round(d + e)
    }
}

var roundedValue = integerSum(1.5 , 2)
console.log("6. d.:" , roundedValue)

/**********************************************************/
function Validation (f , g){
    if (Number.isInteger(f && g)){
        return f + g
    } else {
        return integerSum(f , g)
    }
}
console.log('6. e.:', Validation(1.5 , 7.5))