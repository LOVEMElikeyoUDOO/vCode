function switchFunc(input,compareval,result,defaultVal)
{
    let caseResult = 0; 
        switch (input)
        {
            case compareval:
                caseResult = result
                break; 
            default: 
                caseResult = defaultVal
        }
    return caseResult;
        
    
    
}