class GetterSetter
{
    constructor(value)
    {
        this._value = value
    }

    get getterFunc()
    {
        return this._value
    }

    set setterFunc(newValue)
    {
        this._value = newValue
        return this._value    
    }

}