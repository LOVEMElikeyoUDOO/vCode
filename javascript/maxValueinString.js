function findLongestWordLength(str) {
    //make string to string array 
    let reRegex = /(\w+)/ig
    let result = str.match(reRegex)
    //use for loop to iterate each element in the array
    let newArr = []
    for (let i = 0; i < result.length; i++) {
        newArr.push(result[i].length)
    }
    //findMax 
    return Math.max(...newArr)


}

findLongestWordLength("The quick brown fox jumped over the lazy dog");