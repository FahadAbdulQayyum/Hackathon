import React, { useContext, useEffect, useRef, useState } from 'react'
import globalContext from '../contextApi/GlobalContext'
import { message } from 'antd';

const SignUp = () => {

    const [password, setPassword] = useState('');
    const [passwordPass, setPasswordPass] = useState(false);
    const [matchedPasswordV, setMatchedPasswordV] = useState('');
    const [matchedPassword, setMatchedPassword] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

    const { Login, Signup } = useContext(globalContext);

    const checkPasswordComplexity = () => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

        setPasswordPass(hasUppercase && hasLowercase && hasSpecialChar)
        return hasUppercase && hasLowercase && hasSpecialChar;
    };

    const passwordMatch = () => {
        setMatchedPassword(password === matchedPasswordV)
        return password === matchedPassword;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            repeatPassword: repeatPasswordRef.current.value,
        };
        console.log('formData', formData)
        const res = await fetch('/api/user', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const jsonData = await res.json();
        if (!jsonData.success) {
            return message.error(jsonData.msg)
        }
        message.loading()
        message.success(jsonData.msg)
        Login();
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <div className="col">
                    <div className="col-sm">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <h3 className="text-dark"><strong>Sign Up</strong></h3>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm w-50 p-5 mx-auto col-10 col-md-8 col-lg-6">
                        <form onSubmit={handleSubmit} className="m-auto d-flex flex-column justify-content-center align-items-center shadow py-5">
                            <div className="form-group m-3 w-75">
                                <input type="text" className="form-control" id="firstname" placeholder="First Name" ref={firstNameRef} minlength="3" maxlength="20" required />
                            </div>
                            <div className="form-group m-3 w-75">
                                <input type="text" className="form-control" id="lastname" placeholder="Last Name" ref={lastNameRef} minlength="1" maxlength="20" required />
                            </div>
                            <div className="form-group m-3 w-75">
                                <input type="email" className="form-control" id="email" placeholder="Email" ref={emailRef} required />
                            </div>
                            <div className="form-group m-3 w-75">
                                <input type="password" className={`form-control ${password.length > 0 && passwordPass ? 'is-valid' : 'is-invalid'}`}
                                    id="password" placeholder="Password" ref={passwordRef} onChange={() => (setPassword(passwordRef.current.value), checkPasswordComplexity())} required minLength={8} />
                            </div>
                            <div className="form-group m-3 w-75">
                                <input type="password" className={`form-control ${password.length > 0 && (password === matchedPasswordV) ? 'is-valid' : 'is-invalid'}`}
                                    id="repeatpassword" placeholder="Repeat Password" ref={repeatPasswordRef} onChange={() => (setMatchedPasswordV(repeatPasswordRef.current.value), passwordMatch())} required minLength={8} />
                            </div>
                            <div className="form-group m-3">
                                <button type="submit" className="btn btn-purple" >Signup</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default SignUp