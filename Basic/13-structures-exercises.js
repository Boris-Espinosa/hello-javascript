/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
// const animals = ["gato", "perro", "camello", "caballo", "llama"]
const animals = []
animals[0] = "gato"
animals[1] = "Perro"
animals[2] = "camello"
animals[3] = "caballo"
animals[4] = "llama"
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("asno")
animals.push("gaviota")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
const myBookSet = new Set(["Pinocho1", "Pinocho2", "Pinocho3", "Pinocho4", "Pinocho5"])
console.log(myBookSet)

// 5. Añade dos más. Uno de ellos repetido
myBookSet.add("Pinocho6")
myBookSet.add("Pinocho5")
console.log(myBookSet)

// 6. Elimina uno concreto a tu elección
myBookSet.delete("Pinocho1")
console.log(myBookSet)

// 7. Crea un mapa que asocie el número del mes a su nombre
const myMonthMap = new Map([["1", "Enero"],
                            ["2", "febrero"],
                            ["3", "Marzo"],
                            ["4", "Abril"],
                            ["5", "Mayo"],
                            ["6", "Junio"],
                            ["7", "Julio"],
                            ["8", "Agosto"],
                            ["9", "Septiembre"],
                            ["10", "Octubre"],
                            ["11", "Noviembre"],
                            ["12", "Diciembre"]
                        ])
console.log(myMonthMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMonthMap.has("5"))
console.log(myMonthMap.get("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMonthMap.set("Meses Verano", ["Diciembre", "enero", "Febrero"])
console.log(myMonthMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = [1,2,3,4,5]
let mySetArray = new Set(myArray)
console.log(mySetArray)
let myMapSet = new Map([["a", "b"],
                        ["c", "d"]
                    ])
myMapSet.set("Numeros", mySetArray)
console.log(myMapSet)

myArray = Array.from(myMapSet.keys())
console.log(myArray)

myArray = Array.from(myMapSet.values())
console.log(myArray)