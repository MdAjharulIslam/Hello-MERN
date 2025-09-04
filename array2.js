const arr = [2,1,4,3,6,5]

const splice = arr.splice(2,3)
console.log(splice)

const splice2 = arr.splice(1,2,43,56);
console.log(splice2)
console.log(arr)

const arr2 = [2,1,4,3,6,5]
const slice = arr2.slice(1,5)
console.log(slice)

const arr3 = "34464"
const split = arr3.split (", ")
console.log(split)

const arr4 = [7,5,5,4,7,3,8,9,0];
const map = arr4.map((i,v) => {
    return i*2})
console.log(map)