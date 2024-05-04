export class Cliente {
    #nombre
    constructor(nombre, impuesto){
        this.#nombre = nombre;
        this.impuesto = impuesto;
    }
    get nombre(){
        return this.#nombre;
    }

    set nombre(nombreNuevo){
        return this.#nombre = nombreNuevo;
    }

    calcularImpuesto(){
        return (`El impuesto a pagar final es: ${(this.impuesto.montoBrutoAnual - this.impuesto.deducciones)*0.21}`)
    }
}
