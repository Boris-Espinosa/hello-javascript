/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let f = 6

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma = a + b
let resta = c - b
let Multiplicacion = b * c
let division = e / c
let modulo = d % b
let potencia = b ** d

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(suma > a)
console.log(suma === a + b)
console.log(Multiplicacion - 1 < f)
console.log(modulo>=0)
console.log(potencia == b ** d)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a >= b)
console.log(f - 6 <= -1)
console.log(Multiplicacion - 1 == f)
console.log(potencia < d)
console.log(potencia === "16")

// 5. Utiliza el operador lógico and
console.log(a - b < 0 && b - a > 0)

// 6. Utiliza el operador lógico or
console.log(potencia + Multiplicacion > 10 || a - b === 0)

// 7. Combina ambos operadores lógicos
console.log(a - b > 0 && b - a > 0 || potencia + Multiplicacion < 10 || a - b === 0)

// 8. Añade alguna negación
console.log(!(a - b > 0 && b - a > 0 || potencia + Multiplicacion < 10 || a - b === 0))


// 9. Utiliza el operador ternario
const isActive = true
console.log(isActive ? "online" : "offline")

// 10. Combina operadores aritméticos, de comparáción y lógicas

const biggestNumber = 10
let isBigger = false
if (!(Multiplicacion + potencia >= biggestNumber)) {
    isBigger = false
} else {
    isBigger = true
}

console.log(isBigger ? "El numero es mas grande" : "El numero es menor")