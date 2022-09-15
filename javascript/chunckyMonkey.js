function chunkArrayInGroups(arr, size) {
    //slice the array
    let newArr = []
    for (let i = 0; i < arr.length; i += size) {
        let sliceArr = arr.slice(i, i + size)
        newArr.push(sliceArr)
    }
    console.log(newArr)
    return newArr
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)