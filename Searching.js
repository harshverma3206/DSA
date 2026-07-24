let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];

let target = 800;

function Search(arr, f, l, target) {
    while (f <= l) {
        let m = Math.floor((f + l) / 2);

        if (arr[m] == target) return m;
        else if (arr[m] > target) {
            l = m - 1;
        } else if (arr[m] < target) {
            f = m + 1;
        }
    }

    return -1;
}
let el = Search(arr, 0, arr.length - 1, target);

if (el == -1) {
    console.log("Dont have element");
} else console.log(el);



