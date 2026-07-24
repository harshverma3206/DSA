let arr = [0, 5, 12, 100, 13];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
    }

    if (min != i) {
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

console.log(arr);


