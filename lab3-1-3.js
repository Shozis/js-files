let y;

//for
for (let x = -4; x <= 4; x += 0.5) {

if (x <=0){
    y = Math.pow(x, 2) - 1;

}else if (0 < x && x <= 1.5) {
    Math.cos(x);
    
}else if (x > 1.5) {
    Math.sin(x - 1);
}
console.log(y);
}