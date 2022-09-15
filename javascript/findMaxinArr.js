function largestOfFour(arr) {
    let newArr = []
    for (let count = 0; count < arr.length; count++) {
        let countArr = arr[count]
        console.log(countArr)
        let findMax = Math.max(...countArr)
        console.log(findMax)
        newArr.push(findMax)
    }
    return newArr

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);