const digitize = (n) => [...`${Math.abs(n)}`].map((i) => parseInt(i));
let b = document.getElementById("but");
b.addEventListener("click", () => {
    let s = parseInt(document.getElementById("hi").value);
    let arr = digitize(s);
    let l = arr.length;
    let j = 0;
    for (let i = l - 1; i >= 0; i--) {
        if (j % 2 != 0) {
            j++;
        } else {
            let brr = digitize(arr[i] * 2);
            let sum = 0;
            for (let k = 0; k <= brr.length - 1; k++) {
                sum = sum + brr[k];
            }
            arr[i] = sum;
            j++;
        }
    }
    let su = 0;
    for (let i = 0; i <= l - 1; i++) {
        su = su + arr[i];
    }
    alert(`You entered: ${su}`);
});