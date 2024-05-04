"use strict";

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
var _Cliente = require("./Cliente.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto = new _Impuestos["default"](10000, 3000);
var cliente = new _Cliente.Cliente('Juan', impuesto);
console.log(cliente.calcularImpuesto());