var fiveWords = ["one" , "two" , "three" , "four" , "five"]

fiveWords.forEach(string => alert("5. a.: " + string))

fiveWords.forEach(string => alert("5. b.: " + string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()))

var sentence = ""
for (var i=0; i <= fiveWords.length -1; i++){
    sentence = sentence + " " +  fiveWords[i]
}
alert("5. c.: " + sentence)

var emptyArray = []
for (var i=0; i < 10; i++){
    emptyArray.push(i)
}
console.log("5. d.: " , emptyArray)