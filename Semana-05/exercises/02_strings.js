var randomText="this is a string variable, supercalifragilistic expialidocious"

console.log("2. a.: " , randomText.toUpperCase())
console.log("2. b.: " , randomText.substring(0 , 4))
console.log("2. c.: " , randomText.substring(62 , 59))
console.log("2. d.: " , randomText.substring(0 , 1).toUpperCase() + randomText.substring(25 , 1).toLowerCase())
console.log("2. e.: " , randomText.indexOf(" "))
console.log("2. f.: " , randomText.indexOf("supercalifragilistic"))
console.log("2. f.: " , randomText.indexOf("expialidocious"))
console.log("2. f.: " , randomText.substring(27 , 28).toUpperCase() + randomText.substring(28 , 48).toLowerCase() + randomText.substring(48 , 49).toUpperCase() + randomText.substring(49).toLowerCase())