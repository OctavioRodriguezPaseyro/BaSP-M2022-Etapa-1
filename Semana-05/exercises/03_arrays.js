var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log("3. a.: 5th and 11th month:" , months[4] , months[10])

console.log("3. b.: Sorted by alphabetical order:" , months.sort())

months.unshift("Start")
months.push("End")
console.log("3. c.: Added 'Start' and 'End':" , months)

months.shift()
months.pop()
console.log("3. d.: Removed 'Start' and 'End':" , months)

console.log("3. e.: Reversed:" , months.reverse())

console.log("3. f.: Joint with '-':" , months.join("-"))

var monthsCopy = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log("3. g.: Sliced from month 5 to 11:" , monthsCopy.slice(4 , 11))