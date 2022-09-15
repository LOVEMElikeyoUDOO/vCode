function randomNum(type,betweenNo)
{
    if (type == 'general')
    {
        return Math.random()
    }
    else if (type == "whole")
    {
        return Math.floor(Math.random())
    }
    else if (type == "betweenWhole")
    {
        return Math.floor(Math.random()*betweenNo)
    }
    else if (type == "between")
    {
        return Math.random()*betweenNo
        }

}