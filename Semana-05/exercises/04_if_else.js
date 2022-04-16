/*
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.
*/

var randomNum=Math.random()
randomNum >= 0.5 ? alert("Greater than or equal to 0.5") : alert("Lower than 0.5")
console.log("4. a.: Random number between 0 and 1:" , randomNum)

var age=Math.round(Math.random()*(0 , 100))

if (age < 2){ 
    alert("Bebé")
}
else if (age>=2 && age<=12){
    alert("Niño")
}
else if (age>=13 && age<=19){
    alert("Adolescente")
}
else if (age>=20 && age<=30){
    alert("Joven")
}
else if (age>=31 && age<=60){
    alert("Adulto")
}
else if (age>=61 && age<=75){
    alert("Adulto mayor")
}
else{
    alert("Anciano")
}

console.log("4. b.: Random whole number between 0 and 100:" , age)