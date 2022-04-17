var fiveWords = ["one" , "two" , "three" , "four" , "five"]

// fiveWords.forEach(string => alert("5. a.: " + string))
for (var i=0 ; i <= fiveWords.length -1 ; i++){
    alert("5. a.: " + fiveWords[i])
}

// fiveWords.forEach(string => alert("5. b.: " + string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()))
for (var i=0 ; i <= fiveWords.length -1 ; i++){
    alert("5. b.: " + fiveWords[i].substring(0 , 1).toUpperCase() + fiveWords[i].substring(1));
}

var sentence = ""
for (var i=0 ; i <= fiveWords.length -1 ; i++){
    sentence = sentence + " " +  fiveWords[i]
}
alert("5. c.: " + sentence)

var emptyArray = []
for (var i=0; i < 10; i++){
    emptyArray.push(i)
}
console.log("5. d.: " , emptyArray)