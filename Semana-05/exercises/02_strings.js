var randomText="this is a string variable, supercalifragilistic expialidocious"

var allUpperCase=randomText.toUpperCase()
console.log("2. a.:" , allUpperCase)

/*********************************************************************************************/
var firstFive=randomText.substring(0 , 4)
console.log("2. b.:" , firstFive)

/*********************************************************************************************/
var lastThree=randomText.substring(62 , 59)
console.log("2. c.:" , lastThree)

/*********************************************************************************************/
var firstCharacterUpperCase=randomText.substring(0 , 1).toUpperCase() + randomText.substring(25 , 1).toLowerCase()
console.log("2. d.:" , firstCharacterUpperCase)

/*********************************************************************************************/
var spacePosition=randomText.indexOf(" ")
console.log("2. e.: Position of first space: " , spacePosition)

/*********************************************************************************************/
var longWordsUpperCase=randomText.substring(27 , 28).toUpperCase() + randomText.substring(28 , 48).toLowerCase() + randomText.substring(48 , 49).toUpperCase() + randomText.substring(49).toLowerCase()
console.log("2. f.:" , longWordsUpperCase)