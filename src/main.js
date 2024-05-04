import Impuesto from "./Impuestos.js";
import { Cliente } from "./Cliente.js";

let impuesto = new Impuesto(10000, 3000);
let cliente = new Cliente('Juan', impuesto);

console.log(cliente.calcularImpuesto());