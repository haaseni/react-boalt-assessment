import * as React from 'react'
import { useHistory, Link } from 'react-router-dom'
import AccountButton from './AccountButton'
import TextBox from './TextBox'

interface User {
    fullname: string
    email: string
    password: string
}

const Signup = () => {
    const history = useHistory()
    const [values, setValues] = React.useState({
        fullname: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = React.useState({
        fullname: '',
        email: '',
        password: ''
    })
    
    const handleFullnameChange = (inputValue) => {
        setValues({...values, fullname: inputValue})
    }

    const handleEmailChange = (inputValue) => {
        setValues({...values, email: inputValue})
    }

    const handlePasswordChange = (inputValue) => {
        setValues({...values, password: inputValue})
    }

    const emailIsValid = (email:string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const validateForm = (users:User[]) => {
        // validate full name
        let fullnameError = '';
        if (values.fullname.length === 0) {
            fullnameError = 'Full Name is required'
        }

        // validate email
        let emailError = '';
        const exists = users.some(user => user.email === values.email)
        if (values.email.length === 0) {
            emailError = 'Email is required'
        } else if (!emailIsValid(values.email)) {
            emailError = 'Invalid Email'
        } else if (exists) {
            emailError = 'An account with this username already exists'
        }

        // validate password
        let passwordError = ''
        if (values.password.length === 0) {
            passwordError = 'Password is required'
        }

        setErrors({
            fullname: fullnameError,
            email: emailError,
            password: passwordError
        })

        return fullnameError.length > 0 || emailError.length > 0 || passwordError.length > 0
    }

    const handleButtonClick = () => {
        const data = localStorage.getItem('users') || '[]'
        const users: User[] = data ? JSON.parse(data) : []
        const error = validateForm(users)

        if (!error) {
            const newUsers = [...users, { fullname: values.fullname, email: values.email, password: values.password }]
            localStorage.setItem('users', JSON.stringify(newUsers))
            history.push("/login")
        } 
    }

    return(
    <div className="signupWrapper">
        <section className="signupSection">
            <div className="signupForm">
                <h1>Sign-Up</h1>
                <div className="input-group">
                    <TextBox type="text" id="fullname" name="fullname"
                        label="Full Name"
                        placeholder="John Doe" 
                        onChange={handleFullnameChange} 
                        maxLength={100} />
                    {errors.fullname &&
                        <p className="error">{errors.fullname}</p>
                    }
                </div>
                <div className="input-group">
                    <TextBox type="email" id="email" name="email"
                        label="Email"
                        placeholder="user@email.com" 
                        onChange={handleEmailChange} 
                        maxLength={100} />
                    {errors.email &&
                        <p className="error">{errors.email}</p>
                    }
                </div>
                <div className="input-group">
                    <TextBox type="password" id="password" name="password"
                        label="Password"
                        placeholder="*****************" 
                        onChange={handlePasswordChange}
                        maxLength={50} />
                    {errors.password &&
                        <p className="error">{errors.password}</p>
                    }
                </div>
                <AccountButton id="signup" onClick={handleButtonClick}>Sign-up</AccountButton>
            </div>
            <div className="loginLink">
                Already Registered? <Link to="/login">Sign-in</Link>
            </div>
        </section>
    </div>
    )
}

export default Signup