function titleCase(str) {
    //empty Array to reconstruct the array 
    let newArr2 = []
    let newArr1 = []
    //make all to small letter 
    let makeLowercase = str.toLowerCase()
    // split the str to make an Array
    let splitArr = makeLowercase.split(" ")
    console.log(splitArr)
    // create regex for first letter checking 
    const reRegex = /^(\w+)/g
    // extract each element from the array 
    for (let i = 0; i < splitArr.length; i++) {
        // store each element in variable 
        let storeEle = splitArr[i]
        //slice the String 
        let sliceStr = storeEle.slice(1)
        //  console.log(sliceStr)
        //  console.log(storeEle)
        let matchStr = storeEle.match(reRegex)
        //console.log(matchStr)
        // make capital of the firstletter 
        let toUpperCase = matchStr[0][0].toUpperCase()
        //console.log(toUpperCase)
        //concat two Str 
        let concatStr = toUpperCase.concat(sliceStr)
        //console.log(concatStr)
        // reconstruct array

        newArr1.push(concatStr)
        //console.log(newArr)
        // join Array to make a string 
        newArr2 = newArr1.join(" ")

    }
    console.log(newArr2)
    return newArr2
}

titleCase("I'm a little tea pot");