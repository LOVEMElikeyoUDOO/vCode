function reverseString(str) {
    // define empty String 
    let newStr = ""
    for (let i = str.length; i >= 0; i--) {
        if (newStr === "undefined") {
            newStr = ""
        }
        newStr += str[i]
    }

    return newStr

}

reverseString("hello");