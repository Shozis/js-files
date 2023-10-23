'use strict';

let x = +(prompt("Введите x="));
let y = +(prompt("Введите y="));
let h;

h = (x * y + Math.sin(x)) / Math.abs(1 - y) * Math.log(x);

let k = h;
console.log("Результат вычислений =" + k);

let n = Math.trunc(h);
console.log("Целое число =" + n);