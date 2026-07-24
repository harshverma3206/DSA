let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let arr = [];
let i = 0;
while (i < nums.length) {
    if (nums[i] != nums[nums[i] - 1]) {
        let temp = nums[nums[i] - 1];
        nums[nums[i] - 1] = nums[i];
        nums[i] = temp;
    } else i++;
}

let j = 0;
while (j < nums.length) {
    if (j + 1 != nums[j]) {
        arr.push(j + 1);
    }
    j++;
}

console.log(arr);








