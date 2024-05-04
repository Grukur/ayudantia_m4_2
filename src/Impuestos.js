export default class Impuesto{
    #montoBrutoAnual
    #deducciones
    constructor(montoBrutoAnual, deducciones){
        this.#montoBrutoAnual = montoBrutoAnual;
        this.#deducciones = deducciones;
    }

    get montoBrutoAnual(){
        return this.#montoBrutoAnual;
    }
    set montoBrutoAnual(nuevoMonto){
        return this.#montoBrutoAnual = nuevoMonto;
    }

    get deducciones(){
        return this.#deducciones;
    }
    set deducciones(nuevasDeducciones){
        return this.#deducciones = nuevasDeducciones;
    }
}