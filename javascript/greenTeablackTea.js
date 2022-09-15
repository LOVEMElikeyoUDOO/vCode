const prepareGreenTea = () => 'GreenTea'
const prepareBlackTea = () => 'BlackTea'

// team can choose whether black or greetea 

const getTea = (prepareTea, numberOfCups) => 
{
    const teaCups = []
    for (let cups = 1; cups <= numberOfCups; cups += 1)
    {
        let teaCup = prepareTea()
        teaCups.push(teaCup)
    }
    console.log(teaCups)

    
}

const greeTea4Team = getTea(prepareGreenTea, 4)
const BlackTea = getTea(prepareBlackTea,5)