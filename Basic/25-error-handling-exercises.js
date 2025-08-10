/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
    console.log(pruebaError)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(pruebaError)
} catch (error) {
    console.log(`Se ha producido un error: ${error.message}`)
} finally {
    console.log("Trycatch exitoso")
}

// 3. Lanza una excepción genérica
function errorFunction (num) {
    switch (num) {
        case 1:
            throw new Error("Se ha producido un error")
            break;
        case 2:
            throw new TypeError("Se ha producido un error de tipo")
            break;
        case 3:
            throw new RangeError("Se ha producido un error de rango")
            break;
    
        default:
            throw new SyntaxError("Se ha producido un error de syntax")
            break;
    }
}

try {
    errorFunction(1)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("trycatch exitoso")
}

// 4. Crea una excepción personalizada
class myError extends Error{
    constructor(message) {
        super(message)
    }

    showMessage() {
        console.log("this.message")
    }
}

// 5. Lanza una excepción personalizada
try {
    throw new myError("Error");
} catch (error) {
    console.log("Se ha producido un error:", error.message)
    error.showMessage()
} finally {
    console.log("trycatch exitoso")
}

// 6. Lanza varias excepciones según una lógica definida
let num
try {
    num = 10
    if (num == 0) {
        throw new Error("El numero no puede ser 0")
    } else if (num > 0) {
        throw new Error("El numero no puede ser mayor a 0")
    } else if (num < 0) {
        throw new Error("El numero no puede ser menor a 0")
    }
} catch (error) {
    console.log("Error:", error.message)
} finally {
    console.log("trycatch exitoso")
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    // errorFunction(1)
    // errorFunction(2)
    errorFunction(3)
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    } else if (error instanceof TypeError) {
        console.log(error.message)
    } else if (error instanceof SyntaxError) {
        console.log(error.message)
    } else if(error instanceof RangeError) {
        console.log(error.message)
    }
} finally {
    console.log("TryCatchExitoso")
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let myArray = [1,2,3,"hola"]

try {
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = Number(myArray[i])
    }

        console.log(myArray)

} catch (error) {
    console.log("Error: ", error.message)
} finally {
    console.log("tryCatch")
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function err() {
    i = i+1
}
repeatErrorFunction()

function repeatErrorFunction() {
    let max = 10
    for (let i = 1; i <= 10; i++) {
        try {
            err()
        } catch (error) {
            console.log(`fallo intento ${i}, error ${error.message}`)
            if (i == max) {
                throw new Error("Fallo despues de 10 intentos ");
            }
        }
    }

}