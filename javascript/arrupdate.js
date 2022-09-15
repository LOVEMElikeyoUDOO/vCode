function getIndexToIns(arr, num) {
    if (arr.length === 0) {
        return 0

    }

    //sort the array in decening order 
    arr.sort((a, b) => (a - b))
    console.log(arr)
    //num is geater than last ele of the arr, push to last 
    if (num > arr[arr.length - 1]) {
        arr.push(num)
        console.log(arr.indexOf(num))
        return arr.indexOf(num)
    }
    //extract each element of the arr and compare

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return arr.indexOf(arr[i])
        }

        if (arr[i] < num && arr[i + 1] > num) {

            return arr.indexOf(arr[i + 1])
            break

        }

    }

}


getIndexToIns([], 1)
