function beginningMatch(str, regexVal)
{   
    let newRegex = (new RegExp(regexVal, "ig"))
    let result = str.match(newRegex)
    return result
}