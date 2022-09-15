function matchSymbol(str, regexVal)
{
    let newRegexVal = ("[".concat("^".concat(regexVal))).concat("]")
 
    let newRegex = new RegExp(newRegexVal, 'ig')
    

}
 export{matchSymbol}

