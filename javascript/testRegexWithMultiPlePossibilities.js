function multipleRegexText(str, multiRegex)
{
    let newRegex = new RegExp(multiRegex)
    let result = newRegex.test(str)
    return result 
}

export { multipleRegexText }