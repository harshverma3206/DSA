const nums = [0,1]

function CyclicSort(nums) {
    let i = 0;
    while (i <= nums.length - 1) {
        let idx = nums[i];
        if (idx < nums.length && nums[i] != nums[idx]) {
            let temp = nums[i];
            nums[i] = nums[idx];
            nums[idx] = temp;
        } else i++;
    }

    let m = 0;
    while (m <= nums.length) {
        if (nums[m] != m) {
            return m;
        } else m++;
    }
    return nums.length;
}

const Value = CyclicSort(nums);
console.log(Value);
