/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let object = {
    name: "Boris",
    age: 19,
    gender: "Men"
}

// 2. Accede y muestra su valor
console.log(object.name)
console.log(object.age)
console.log(object.gender)

// 3. Agrega una nueva propiedad
object.carreer = "Engeneering"
console.log(object)

// 4. Elimina una de las 3 primeras propiedades
delete object.gender
console.log(object)

// 5. Agrega una función e invócala
object.sayAge = function () { console.log(`Tienes ${this.age} años`) }
object.sayAge()

// 6. Itera las propiedades del objeto
for (const key in object) {
    console.log(object[key])
}

// 7. Crea un objeto anidado
object.university = {
    location: "Concepcion",
    semester: 2,
    year: 1,
    grades: 6.8,
    carreer: "engeneering"
}
console.log(object)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(object.university)

// 9. Comprueba si los dos objetos creados son iguales
console.log(object == object.university)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(object.university.carreer == object.carreer)