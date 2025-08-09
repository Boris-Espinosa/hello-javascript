/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i < 21; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i < 101; i++) {
    suma += i
    console.log(i)
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i < 51; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = ["pepe", "juan", "ignacio"]
for (const value of names) {
    console.log(value)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "juanito perez"
let vocales = 0

for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u") {
        vocales++
    }
}
console.log(vocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbers = [1, 2, 5, 4, 2, 6, 2, 1, 4]
let mult = 1
for (let i = 0; i < numbers.length; i++) {
    mult *= numbers[i]
}
console.log(mult)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 5; i  < 51; i+=5) {
    console.log(i)
}

// 8. Usa un bucle para invertir una cadena de texto
let newChain = new Array(cadena.length)
for (let i = cadena.length-1; i >= 0; i--) {
    newChain[cadena.length-1-i] = cadena[i]
    console.log(cadena[i])
}
console.log(newChain)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let ant = 0
let numact = 0
let aux
for (let i = 0; i < 10; i++) {
    if(i==0) numact = 1; else {
        console.log(numact + ant)
        aux = numact
        numact = ant + numact
        ant = aux
    }
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,20,30,40,50]
let newArray = []
let i = 0
for (const value of arrayOfNumbers) {
    if (value > 10) {
        newArray[i] = value
        i++
    }
}
console.log(newArray)
