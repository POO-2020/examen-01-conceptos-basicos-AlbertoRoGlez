import Reservacion from "./reservacion.js"

export default class Hotel {
    /**
     * 
     * @param {string} nombre |Nombre del hotel
     * @param {Reservacion} reservaciones |Reservaciones del hotel
     */
    constructor(nombre, reservaciones) {
        this.nombre = nombre;
        this.reservaciones = reservaciones;

    }

    getNumHuespedes() {
        return `${this.reservaciones.huespedes.length}`
    }

    print() {
        return `Resumen de las reservaciones ${this.reservaciones.print}`
    }
}
