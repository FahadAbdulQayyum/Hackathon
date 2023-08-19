import React, { useContext, useRef, useState } from 'react'
import Dashboard from '../dashboard/Dashboard'
import globalContext from '../contextApi/GlobalContext'
import { message } from 'antd';
import { useRouter } from 'next/router';

const Login = () => {

    const router = useRouter();

    const { Dashboard, userDetail } = useContext(globalContext);

    const [isValidEmail, setIsValidEmail] = useState(false)
    const [emailV, setEmailV] = useState('')

    const emailRef = useRef();
    const passwordRef = useRef();

    const emailValidFunc = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // const isValidEmail = emailRegex.test(emailV);
        setIsValidEmail(emailRegex.test(emailV))
        return isValidEmail;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log('formData', formData)
        const res = await fetch('/api/login', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const jsonData = await res.json();
        console.log('jsonData', jsonData);
        if (!jsonData.success) {
            return message.error(jsonData.msg)
        }
        message.loading()
        message.success(jsonData.msg)
        // router.history(formData)
        router.push('/dashboardPage')
        userDetail(formData)
        // router.push({pathname:'/navPage', query:formData})
        // router.push({pathname:'/dashboardPage', query:formData})
        // Dashboard();
    }


    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <div className="col">
                    <div className="col-sm">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <h3 className="text-dark"><strong>Login</strong></h3>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm w-50 p-5 mx-auto col-10 col-md-8 col-lg-6">
                        <form onSubmit={handleSubmit} className="m-auto d-flex flex-column justify-content-center align-items-center shadow py-5">


                            <div className="form-group m-3 w-75">
                            <input type="email" className={`form-control ${emailV.length > 0 && isValidEmail ? 'is-valid' : 'is-invalid'}`}
                                id="email" placeholder="Email" onChange={() => (setEmailV(emailRef.current.value), emailValidFunc())} required minLength={8} 
                                ref={emailRef}
                                />

                                {/* <input type="email" className="form-control" id="email" placeholder="Email" ref={emailRef} required /> */}
                            </div>
                            <div className="form-group m-3 w-75">
                                <input type="password" className="form-control" id="email" placeholder="Password" ref={passwordRef} required />
                            </div>
                            {/* <!-- Other form inputs here --> */}
                            <div className="form-group m-3">
                                <button type="submit" className="btn btn-purple" >Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Login