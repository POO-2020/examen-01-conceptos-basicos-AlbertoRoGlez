import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
import Hotel from "./hotel.js"

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

    pruebaHote() {
        
    }
    

}

let app = new Main();
app.pruebaFecha();
app.pruebaDescripcion();