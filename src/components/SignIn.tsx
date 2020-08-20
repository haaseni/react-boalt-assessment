import * as React from 'react'
import { useHistory, Link } from 'react-router-dom'
import Authentication from '../utils/Authentication'
import AccountButton from './AccountButton'
import TextBox from './TextBox'

interface User {
    fullname: string
    email: string
    password: string
}

const Signin = () => {
    const [values, setValues] = React.useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = React.useState({
        email: '',
        password: ''
    })
    const history = useHistory()

    const handleEmailChange = (inputValue) => {
        setValues({...values, email: inputValue})
    }

    const handlePasswordChange = (inputValue) => {
        setValues({...values, password: inputValue})
    }

    const validateForm = (user:User) => {
        let passwordError = ''
        let emailError = '';

        // validate email
        if (values.email.length === 0) {
            emailError = 'Email is required'
        } else if (!user && values.password.length === 0) {
            emailError = 'Invalid Username'    
        } else if (!user || (user && user.password !== values.password)) {
            emailError = 'Invalid Username or Password'
            passwordError = 'Invalid Username or Password'
        } 

        // validate password
        if (values.password.length === 0) {
            passwordError = 'Password is required'
        }

        setErrors({
            email: emailError,
            password: passwordError
        })

        return emailError.length > 0 || passwordError.length > 0
    }

    const handleButtonClick = () => {
        const user = Authentication.authenticate(values.email, () => {})
        const error = validateForm(user)
        
        if (!error) {
            localStorage.setItem('user', JSON.stringify({fullname: user.fullname, email: user.email}))
            history.push("/products") // Redirect to products page
        } 
    };

    return(
    <div className="signinWrapper">
        <section className="signinSection">
            <div className="signinForm">
                <h1>Sign-In</h1>
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
                <AccountButton id="signin" onClick={handleButtonClick}>Sign-In</AccountButton>
            </div>
            <div className="registerLink">
                Not Registered? <Link to="signup">Sign-up</Link>
            </div>
        </section>
    </div>
    
    )
}

export default Signin