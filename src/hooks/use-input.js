import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)


    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHanlder = event => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValue: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHanlder,
        reset
    }
}
export default useInput