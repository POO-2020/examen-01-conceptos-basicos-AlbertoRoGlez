import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"

class Main {
    constructor() {

    }

    pruebaDescripcion(){
        let prueba = new Huesped("Alberto Rosales", "Masculino")
        console.log(prueba.getDescripcion());
    }

    pruebaFecha() {
        let prueba = new Reservacion(1234, new Date(2000,5,8), 2, new Huesped("Alberto Rosales", "Masculino"))
        console.log(prueba.getFechaFormatoCorto());
    }

    
    

}

let app = new Main();
app.pruebaFecha();