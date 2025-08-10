/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function sum() {
    return a + b
}

// 2. Exporta una constante
export const num = 10

// 3. Exporta una clase
export class Person1 {
    constructor(name, age, alias) {
        this.name = name,
        this.alias = alias,
        this.age = age
    }
    sayAge() {
        console.log(`Esta persona tiene ${this.age} años`)
    }
    sayName() {
        console.log(`Esta persona se llama ${this.name}`)
    }
}
// 4. Importa una función
import { extern } from "./16-functions.js"
extern()

// 5. Importa una constante
import { PI } from "./28-export-modules.js"
console.log(PI)

// 6. Importa una clase
import { Person } from "./28-export-modules.js"
let newPerson = new Person("Boris", 19, "Papu")
newPerson.sayAge()
newPerson.sayName()

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import resta from "./28-export-modules.js"
console.log(resta(1,2))

// 9. Exporta una función, una constante y una clase desde una carpeta
// import { greet } from "../Intermediate/00-advanced-functions.js"

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
