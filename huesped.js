export default class Huesped {
    /**
     * 
     * @param {string} nombre |Nombre completo del huesped
     * @param {string} genero |Genero masculino o femenino del huesped
     */
    constructor(nombre, genero) {  
      this.nombre = nombre.toUpperCase();
      this.genero = genero.toUpperCase();
    }

    getDescripcion() {
        return `${this.nombre} (${this.genero})`
    }
    
}