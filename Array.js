
let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let maxLArray = new Array(arr.length);
let maxRArray = new Array(arr.length);

let maxL = arr[0];
let maxR = arr[arr.length - 1];
let ans = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxL) {
        maxL = arr[i];
    }
    maxLArray[i] = maxL;
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxR) {
        maxR = arr[i];
    }
    maxRArray[i] = maxR;
}

for (let k = 0; k < arr.length; k++) {
    ans += Math.min(maxLArray[k], maxRArray[k]) - arr[k];
}

console.log(ans);












