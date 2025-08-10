/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

function functTrace(a) {
    if (a == 1) {
        console.trace()
    }
}

// 1. Crea un función que utilice error correctamente
function errorFunct() {
    try {
        for (let i = 0; i < array.length; i++) {
            i + a
        }
    } catch (error) {
        console.error(error.message)
    }
}
errorFunct()

// 2. Crea una función que utilice warn correctamente
let myArray = [1,2,3,4,"a"]
function warnFunct() {
    if (myArray.includes("a")) {
        console.warn("Este array incluye strings")
    } else {
        console.log("a")
    }
}
warnFunct()

// 3. Crea una función que utilice info correctamente
function infoFunct() {
    console.count("infoFunct")
    for (let i = 1; i < 10; i++) {
        console.info(`Ciclo ${i} exitoso`)
    }
}
infoFunct()

// 4. Utiliza table
let myObject = {
    name: "Boris",
    age: 19,
    alias: "Papu"
}
console.table(myObject)

// 5. Utiliza group
console.group("Usuario:")
console.log(myObject)

// 6. Utiliza time
console.time("infoFunct")
infoFunct()
console.timeEnd("infoFunct")
// 7. Valida con assert si un número es positivo
let a = -1
console.assert(a > 0, "El numero debe ser positivo")

// 8. Utiliza count
console.count("infoFunct")

// 9. Utiliza trace
function traceFunct() {
    functTrace(1)
}
traceFunct()
// 10. Utiliza clear
// console.clear