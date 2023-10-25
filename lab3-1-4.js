
let n1 = Math.abs(+prompt("Введите n1:"));
let a1 = storona(n1);
console.log("1 сторона" + a1);
p1 = Ploshadi(n1, a1);
console.log("1 Площадь" + p1);

let n2 = Math.abs(+prompt("Введите n2:"));
let a2 = storona(n2);
console.log("2 сторона" + a2);
p2 = Ploshadi(n2, a2);
console.log("2 Площадь" + p2);


let n3 = Math.abs(+prompt("Введите n3:"));
let a3 = storona(n3);
console.log("3 сторона" + a3);
p3 = Ploshadi(n3, a3);
console.log("3 Площадь" + p3);


function storona(p)
{
    let R = 15;

    return 2 * R * Math.sin(180 / p);
}

function Ploshadi(q, g)
        {
            return q * g;
        }