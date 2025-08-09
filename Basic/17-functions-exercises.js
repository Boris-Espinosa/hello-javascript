/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
const sum = (a, b) => {
    console.log(a + b)
}
sum(1, 2)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let myArray = [1,5,3,4,8]

const biggest = (array) => {
    let big = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] > array[j] && array[i] > big) {
                big = array[i]
            }
        }
    }
    return big
}
console.log(biggest(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const vowels = (string) => {
    let vocales = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            vocales++
        }
    }
    return(vocales)
}
console.log(vowels("Papusitos"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const toUpper = (array) => {
    let word = ""
    for (let i = 0; i < array.length; i++) {
        word = array[i]
        word = word.toUpperCase()
        array[i] = word
    }
    return array
}
let myArray1 = ["Juanito", "perez"]
console.log(toUpper(myArray1))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
const prim = (num) => {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(prim(2))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const newArray = (array1, array2) => {
    let newArray = []
    let len
    if (array1 > array2) {
        len = array1.length
        newArray = array1
        for (let i = len; i < len + array2.length; i++) {
            newArray[i] = array2[i-len]
        }
    } else {
        len = array2.length
        newArray = array2
        for (let i = len; i < len + array1.length; i++) {
            newArray[i] = array1[i-len]
        }
    }
    return newArray
}
let array1 = [1,2,3,7,5,4]
let array2 = [1,5,9,5]
console.log(newArray(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const functSum = (array) => {
    let sum = 0
    for (const value of array) {
            sum += value
    }
    return sum
}

let array3 = [1,2,3]
console.log(functSum(array3))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const functPower = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] ** 2
    }
    return array
}
let array4 = [1,2,3]
console.log(functPower(array4))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const reverseString = (string) => {
    return string.split("").reverse().join("")
}
let string1 = "papu"

console.log(reverseString(string1))

// 10. Crea una función que calcule el factorial de un número dado
const factorial = (num) => {
    if (num == 1) {
        return(1)
    } else {
        return(num * factorial(num-1))
    }
}
let number = 4
console.log(factorial(number))