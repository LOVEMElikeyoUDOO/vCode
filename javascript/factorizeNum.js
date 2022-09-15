function factorialize(num) {
    let facNum = 1
    for (let i = num; i > 0; i--) {
        facNum *= i
    }
    return facNum
}

factorialize(5);