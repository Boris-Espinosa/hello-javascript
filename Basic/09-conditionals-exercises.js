/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const user = "Boris"
const password = "2006"
const user1 = "Boris"
const password1= "2006"

if (user == user1 && password === password1) {
    console.log("el usuario y la contraseña son correctos")
} else {
    console.log("el usuario y la contraseña no son correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const number = -1
if (number == 0) {
    console.log("El numero es cero")
} else if (number > 0) {
    console.log("El numero es mayor a 0")
} else {
    console.log("El numero es menor a 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const age = 19
const isCapable = age >= 18 ? true : false
if (isCapable === true) {
    console.log("La persona puede votar")
} else {
    console.log("La persona no puede votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
const ageRange = age >= 18 ? "Adulto" : "Menor"
console.log(`La persona es un ${ageRange}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Enero"
switch (mes) {
    case "Enero":
        console.log("Estamos en Verano")
        break;
    

    default:
        console.log("Mes no valido")
        break;
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7