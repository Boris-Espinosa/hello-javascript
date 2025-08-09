/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let myArray = [1,2,3,4]
let [valor1, valor2] = myArray
console.log(valor1, valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [, , , valor3 = 0] = myArray
console.log(valor3)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let object = {
    name: "Boris",
    age: 19,
    alias: "Papu"
}
let {name, age} = object
console.log(name, age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: name1, alias: alias1} = object
console.log(name1, alias1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let object1 = {
    name1: "Boris",
    age1: 19,
    alias1: "Papu",
    study: {
        university: "Bio-Bio",
        semester: 2,
        carreer: "I.T"
    }
}
let { study: {university: place, carreer: studing}} = object1
console.log(place, studing)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray1 = [5,6,7,8]
let myArray3 = [...myArray, ...myArray1]
console.log(myArray3)

// 7. Usa propagación para crear una copia de un array
let myArray4 = [...myArray3]
console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let object2 = {...object, ...object1}
console.log(object2)

// 9. Usa propagación para crear una copia de un objeto
let object3 = {...object2}
console.log(object2)

// 10. Combina desestructuración y propagación
const usuario = {
  nombre: "Ana",
  edad: 28,
  pais: "Chile",
  habilidades: ["JavaScript", "HTML", "CSS"]
};
let {nombre, habilidades} = usuario
console.log(nombre)
let nuevasHabilidades = [...habilidades, "React"]
console.log(nuevasHabilidades)
const nuevoUsuario = {...usuario, profesion: "Desarrolladora"}
console.log(nuevoUsuario)
