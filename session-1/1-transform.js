function transform(nums){
    return nums.map(num => num * num)
               .sort((a,b) => a-b)
}

const nums = [4,9,5,3,8]
console.log(`🌭 Here is your array sorted and squared: [${transform(nums)}]`)// [9,16,25,64,81]
