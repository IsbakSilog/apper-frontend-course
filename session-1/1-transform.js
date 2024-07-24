function transform(nums){
    return nums.map(num => num * num)
}

const nums = [2,4,6]
const sorted =transform(nums)
console.log(`${sorted}`)
console.log('hi')