import useInput from '../hooks/use-input'

const isNotEmpty = value => value.trim() !== ''
const isEmail = value => value.includes('@')

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: fristNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty)
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty)
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail)

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
  const lasNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

  let formIsValid
  if (lastNameIsValid && fristNameIsValid && emailIsValid) formIsValid = true

  const onSubmitHandler = event => {
    event.preventDefault()

    if (!formIsValid) return

    console.log('Submitted')

    resetEmail()
    resetFirstName()
    resetLastName()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className='error-text'>First must not be empty.</p>
          )}
        </div>
        <div className={lasNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} />
          {lastNameHasError && (
            <p className='error-text'>First must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler} />
        {emailHasError && (
          <p className='error-text'>First must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
