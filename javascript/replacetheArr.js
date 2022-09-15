function frankenSplice(arr1, arr2, n) {
    //slice the arr2 up to n number 
    let sliceArr = arr2.slice(0, n)
    console.log(sliceArr)
    //splice the arr1 to arr2 
    for (let i in arr1) {
        sliceArr.push(arr1[i])
    }
    console.log(sliceArr)
    //insert the value using splice
    let sliceArr2 = arr2.slice(n)
    console.log(sliceArr2)
    for (let j in sliceArr2) {
        sliceArr.push(sliceArr2[j])
    }
    console.log(sliceArr)
    return sliceArr

}

frankenSplice([1, 2, 3], [4, 5], 1)

//alternative version using slice & slice
function frankenSplice(arr1, arr2, n) {
    let newArr1 = [...arr1]
    console.log(newArr1)
    let newArr2 = [...arr2]
    console.log(newArr2)
    for (let i = newArr1.length - 1; i >= 0; i--) {
        newArr2.splice(n, 0, newArr1[i])
    }
    console.log(newArr2)
    return newArr2

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);