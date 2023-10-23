let y;

//while 
x = -Math.PI

while (x <= Math.PI) {
y = 3 * Math.pow(Math.cos(2 * x + 1), 2);
x += Math.PI / 8;
console.log(y);
}