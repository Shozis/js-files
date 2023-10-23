let x = 5;
let y = 1;
let d = -4;
let c = -2;

let e;

if(x * y > 3) {
//Предположение
let maxEl = Math.pow(x, 3);
if(Math.pow(x, 3) > Math.log(Math.pow(x * y, c * d))){
    maxEl = Math.log(Math.pow(x, 3));
}

e = maxEl;
}else if(0 <= x * y && x * y <= 3){
    //Предположение
    let maxEl = d * y;
    if(maxEl > c * x){
        maxEl = c * x;
    }
    
    //Предположение
    let minEl = y * 3;
    if(minEl < x * 3){
        minEl = x * 3;
    }
    
    //Предположение
    if(minEl < maxEl * 3){
        minEl = maxEl * 3;
    }

    e = maxEl;
}else if(x * y < 0){
    e = Math.pow(2, c * d) - x;
}
console.log(e);