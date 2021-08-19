import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const errorDefaut = {
    title: '',
    message: '',
}
const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState(errorDefaut)

    const resetDefault = () => {
        setEnteredUsername('')
        setEnteredAge('')
        setError(errorDefaut)
        setIsError(false)
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setIsError(true)
            setError({
                title: 'Invalid username',
                message: 'Username is required',
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Age is must larger than 0',
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        resetDefault()
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const onConfirmHandler = () => {
        setIsError(false)
        setError(errorDefaut)
    }

    return (
        <div>
            {isError && <ErrorModal title={error.title} message={error.message} onConfirm={onConfirmHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>

    )
}

export default AddUser