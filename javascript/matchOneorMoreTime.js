function matchOneMoreTime(str, regexVal)
{
    let newRegex = (("[".concat(regexVal)).concat("+")).concat("]")
    newRegex = new RegExp(newRegex, "ig")
    const result = srt.match(newRegex)
    return result 
}