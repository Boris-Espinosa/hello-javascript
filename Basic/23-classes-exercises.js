/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Person {

    constructor(name = "NoName", age = "NoAge", state = "NoState") {
        this.name = name,
        this.age = age,
        this.state = state
    }
}
let myPerson = new Person("boris", 19 ,"Concepcion")
console.log(myPerson)

// 2. Añade un método a la clase que utilice las propiedades
// myPerson.hello = function() {
//     console.log(`hola ${this.name}, tienes ${this.age} años`)
// }
//ESTO AÑADE LA FUNCION SOLO A LA VARIABLE MYPERSON

Person.prototype.sayBye = function() {
    console.log(`Adiós, ${this.name}!`);
}; //ESTO AÑADE LA FUNCION A LA CLASE
// myPerson1.sayBye();

// 3. Muestra los valores de las propiedades e invoca a la función
console.log(myPerson)
myPerson.sayBye()

// 4. Añade un método estático a la primera clase
Person.newHello = function(name, age) {
    console.log(`hola ${name}, tienes ${age} años`)
}

// 5. Haz uso del método estático
Person.newHello("boris", 19)

// 6. Crea una clase que haga uso de herencia
class Mujer extends Person {
    gender() {
        console.log("Es mujer")
    }
}

// 7. Crea una clase que haga uso de getters y setters
class PrivatePerson {
    #name
    #age
    #region
    constructor(name, age, region) {
        this.#name = name,
        this.#age = age,
        this.#region = region
    }
    set name(name) {
        this.#name = name
    }

    get age() {
        return this.#age
    }

    get region() {
        return this.#region
    }
}

let myPerson1 = new PrivatePerson("Boris", 19, "Ñuble")

// 8. Modifica la clase con getters y setters para que use propiedades privadas


// 9. Utiliza los get y set y muestra sus valores
console.log(myPerson1.age)
myPerson1.name = "Papu"

// 10. Sobrescribe un método de una clase que utilice herencia
class Hombre extends Person {
    sayBye() {
        console.log(`Hola ${this.name} eres Hombre`)
        super.sayBye()
    }
    gender() {
        console.log("Es Hombre")
    }
}

let myPerson2 = new Hombre("Boris", 19, "Trehuaco")
myPerson2.sayBye()