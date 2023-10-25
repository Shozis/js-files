//По условию AB = 3, AD = 5, DB = 4, DC = √35, ВС = √19, AC = 5
let a1 = +prompt("Введите AB");
let AB = Pol(a1);

let a2 = +prompt("Введите AD");
let AD = Pol(a2);

let a3 = +prompt("Введите BD");
let BD = Pol(a1);

let a4 = +prompt("Введите BC");
a4 = Math.sqrt(a4);
let BC = Pol(a4);

let a5 = +prompt("Введите AC");
let AC = Pol(a5);

let a6 = +prompt("Введите DC");
a6 = Math.sqrt(a6);
let DC = Pol(a6);


let Per1 = Perimetr(AB, BD, AD);
let Per2 = Perimetr(BC, BD, DC);
let Per3 = Perimetr(AD, DC, AC);
let Per4 = Perimetr(AB, BC, AC);


let S1 = Ploshadi(Per1, AB, BD, AD);
console.log("Площадь 1 треугольника =" + S1);

let S2 = Ploshadi(Per2, BC, BD, DC);
console.log("Площадь 2 треугольника =" + S2);

let S3 = Ploshadi(Per3, AD, DC, AC);
console.log("Площадь 3 треугольника =" + S3);

let S4 = Ploshadi(Per4, AB, BC, AC);
console.log("Площадь 4 треугольника =" + S4);


function Pol(q)
        {
            return Math.abs(q);
        }

function Perimetr(a, b, c)
{
    return a + b + c;
}

function Ploshadi(d, a, b, c)
{
    return Math.sqrt(d * (d - a) *(d - b) * (d - c));
}