function chooseManipulation(arr, method, value) {
    let modifyArr = [...arr];

        if (method === 'push') {
            return modifyArr.push(value)
        }
        else if (method === 'pop') {
            const popValue = modifyArr.pop()
            return (console.log('New Array is ' + modifyArr + ' and removed value is ' + popValue))
        }
        else if (method === 'shift') {
            const shiftValue = modifyArr.shift()
            return (console.log('New Array is ' + modifyArr + ' and removed value is ' + shiftValue))
        
        }
        else {
            return modifyArr.unshift(value)
        }
    
}