let n = +(prompt("ВВести n ="));
let k = +(prompt("ВВести k ="));
let c;

let n1 = factoril(n);
let k1 = factoril(k);
let nk= factoril(n - k);

c = n1 / (nk * k1);

console.log(c);

function factoril(fa) {
    let p = 1;
    for (let i = 1; i <= fa; i++) {
        p*=i;
    }

    return p;
}