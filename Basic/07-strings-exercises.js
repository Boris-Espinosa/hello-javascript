/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
const nombre = "Boris"
const apellido = "Espinosa"
const nombreCompleto = `${nombre} ${apellido}`
console.log(`tu nombre completo es ${nombreCompleto}` )

// 2. Muestra la longitud de una cadena de texto
const len = nombreCompleto.length
console.log(len)

// 3. Muestra el primer y último carácter de un string
console.log(nombreCompleto[0])
console.log(nombreCompleto[13])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombreCompleto.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
console.log(`Cadena
            de texto
            en
            varias lineas`)

// 6. Interpola el valor de una variable en un string
const segundoNombre = "Alonso"
console.log(`${nombre} ${segundoNombre} ${apellido}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let espacios = "espacios en blanco por guiones"
for (let index = 0; index < 4; index++) {
    espacios = espacios.replace(" ", "-")
}
console.log(espacios)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(espacios.includes("espacios"))

// 9. Comprueba si dos strings son iguales
let isEqual = nombre == segundoNombre ? true : false
console.log(isEqual)

// 10. Comprueba si dos strings tienen la misma longitud
let equalLen = nombre.length == 5 ? true : false
console.log(equalLen)