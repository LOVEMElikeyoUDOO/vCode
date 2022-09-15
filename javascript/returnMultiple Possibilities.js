function matchMultipleWordFromStr(str, multipleRegex)
{
    let newgrex = new RegExp(matchMultipleWordFromStr, 'ig')
    let result = str.match(newgrex)

}

export {matchMultipleWordFromStr}