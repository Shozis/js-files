'use strict';

let x = +(prompt("Введите x="));
let y = +(prompt("Введите y="));
let d;

d = (x * Math.pow(y, 2) - Math.sqrt(Math.abs(Math.pow(x, 2) - 2.5 * Mathpow(10, -3) * y))) / 2 * Math.sin(x * y);

let k = d;
console.log("Результат вычислений =" + k);

let l = Math.sqrt(d);
console.log("Целое число =" + l);