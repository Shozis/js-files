let y;
let x = -0.5;
//do while

do {
    y = Math.pow(x, 5) + 5 * Math.pow(x, 4) - 2 * Math.pow(x, 3) - 4 * Math.pow(x, 2) + 7 * x - 3;
    x += 0.1
    console.log(y);
} while (x <= 1.5)