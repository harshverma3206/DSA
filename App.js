


let arr = [-10,1,-22,-42, 8, -6, 90];

let i = 0;
let j = 0;

while (i < arr.length) {
    if (arr[i] < 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
        j++;
    } 
    i++;
}

console.log(arr);
console.log("Harsh");










