let x1 = +prompt("Введите x1:");
let y1 = +prompt("Введите y1:");

let x2 = +prompt("Введите x2:");
let y2 = +prompt("Введите y2:");

let x3 = +prompt("Введите x3:");
let y3 = +prompt("Введите y3:");


let a1 = Formyl1(x1, y1, x2, y2);
console.log(a1);
let a2 = Formyl1(x2, y2, x3, y3);
console.log(a2);
let a3 = Formyl1(x1, y1, x3, y3);
console.log(a3);

function Formyl1(p1, q1, p2, q2)
        {
            return (p1 * p2 + q1 * q2) / (Math.sqrt(Math.pow(p1 + p2, 2)) * Math.pow(q1 + q2, 2));
        }