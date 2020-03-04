import Huesped from "./huesped.js"

export default class Reservacion {
    /**
     * 
     * @param {number} numeroHabitacion |El número que identifica a la habiltación
     * @param {Date} fechaLlegada |La fecha de llegada de los huéspedes
     * @param {number} noches |Número de noches reservadas
     * @param {Huesped} huespedes |Las personas que estarán hospedadas en esta habitación
     */
    constructor(numeroHabitacion, fechaLlegada = new Date(), noches, huespedes = new Array) {
        this.numeroHabitacion = numeroHabitacion;
        this.fechaLlegada = fechaLlegada;
        this.noches = noches;
        this.huespedes = huespedes;
    }

    getFechaFormatoCorto() {
        return `${this.fechaLlegada.getDate()}/${this.fechaLlegada.getMonth()}/${this.fechaLlegada.getFullYear()}`
    }

    addHuesped(huesped) {
        this.huespedes.push(huesped)

    }

    getNumHuespedes() {
        this.huespedes.forEach(huesped, i => {
            console.log(`${i} ${huesped.getDescripcion()}`)
        });

    }

    print() {
        let prueba = new Huesped("Alberto Rosales", "Masculino")
        console.log(`Habitacion ${this.numeroHabitacion}`)
        console.log(`Fecha de Llegada ${this.getFechaFormatoCorto()}`)
        console.log(`${this.noches} reservadas`)
        console.log(prueba.getDescripcion());
    }
}