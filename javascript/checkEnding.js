function confirmEnding(str, target) {
    const reRegex = new RegExp(".".concat((target.concat("$"))), "ig")
    console.log(reRegex)
    return reRegex.test(str)
}

confirmEnding("Bastian", "n");