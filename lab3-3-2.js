let x = -7;
let c = 1;
let b = 4;

let h;

if (0 < x && x < 1) {
    //Предположение
    h = b * x + 1;

} else if (x <= 0) {
    //Предположение
    let minEl = Math.pow(x, -3);
    if (minEl > Math.abs(b * x)) {
        minEl = Math.abs(b * x);
    }
    if (minEl < x + b) {
        minEl = x + b;
    }

    h = minEl
} else {
    let MaxEl = Math.cos(b * x);
    if (MaxEl > x + c) {
        MaxEl = x + c;
    }

    h = MaxEl;
}

console.log(h)