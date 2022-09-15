function truncateString(str, num) {
    let newStr = ""
    if (str.length > num) {
        for (let i = 0; i < num; i++) {
            newStr += str[i]
        }
        return newStr.concat("...")
    }
    return str
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)