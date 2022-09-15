 total = null
function arrMath(arr,type)
{
    if (type == "p")
    {
        for (let i = 0; i < arr.length; i++)
        {
            total *= arr[i]
        }
        return console.log(total)
    }
    else if (type == "sum")
    {
        for (let i = 0; i < arr.length; i++)
        {
            total += arr[i]
        }
        return console.log(total)
    } 
    else if (type == "negative")
    {
        for (let i = 0; i < arr.length; i++)
        {
            total -= arr[i]
        }
        return console.log(total)
    }
    
}