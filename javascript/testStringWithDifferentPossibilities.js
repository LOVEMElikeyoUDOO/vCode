function testStr(str, regexValStr) {

    let regexStr = new RegExp(regexValStr)
    const regextest = regexStr.test(str)
    console.log(regexStr)
    return regextest

}

export { testStr }
