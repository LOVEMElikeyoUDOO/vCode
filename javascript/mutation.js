function mutation(arr) {
    //extract arr element

    let arrEle1 = arr[0]

    let arrEle2 = arr[1]
    let result = null


    for (let i = 0; i < arrEle1.length; i++) {

        //create newRegex
        if ((arrEle2[i]) !== undefined) {
            let reRegex = new RegExp(arrEle2[i], "gi")
            console.log(reRegex)
            result = reRegex.test(arrEle1)
            console.log(result)
            if (result == false) {
                break
            }

        }
    }
    return result




}

mutation(["voodoo", "no"])