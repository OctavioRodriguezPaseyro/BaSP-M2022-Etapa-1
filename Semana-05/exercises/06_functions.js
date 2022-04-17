function sumOfNum(a , b) {
a = 5
b = 10
    if (typeof a === "number" && typeof b === "number"){
        return a + b
    } else {
        return NaN
        throw TypeError("Both variables must be numbers")
    }
}

var sumOfNumResult = sumOfNum()
console.log("6. a.:" , sumOfNumResult)