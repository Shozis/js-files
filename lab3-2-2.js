let x = 6;
let a = 2;
let b = -5;

let f;

if(0 < x && x <= 1){
    //Предположение
    let minEl = Math.sin(x);
    if(minEl < Math.sqrt(a) * x){
        minEl = Math.sqrt(a) * x;
    }

    //Предположение
    if(minEl < (x - a) / x){
        minEl = (x - a) / x;
    }

    f = minEl;
}else if(x > 1){
    //Предположение
    let maxEl = a * x;
    if(maxEl > Math.sqrt(x)){
        maxEl = Math.sqrt(x);
    }

    f = maxEl;
} else if(x <= 0){
    f = a * x + b;
}

console.log(f);