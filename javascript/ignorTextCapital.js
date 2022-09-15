function testRegexIgnoreCapital(str, testRegex)
{
    let newRegex = new RegExp(testRegex, 'i')
    let result = newRegex.test(str)
    return result
}

export { testRegexIgnoreCapital}
