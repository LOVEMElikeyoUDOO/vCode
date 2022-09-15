function extractMatchWord(str, matchRegex)
{
    let newRegex = new RegExp(matchRegex, "ig")
    let result = str.match(newRegex)
    return result
}

export { extractMatchWord}