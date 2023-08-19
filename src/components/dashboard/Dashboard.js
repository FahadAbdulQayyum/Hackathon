import React, { useContext, useEffect, useRef, useState } from 'react'
import MyBlog from '../myBlog/MyBlog'
import { message } from 'antd';
import { useRouter } from 'next/router';
import globalContext from '../contextApi/GlobalContext';

const Dashboard = () => {

    const { user } = useContext(globalContext);

    const [blogArea, setBlogArea] = useState('')
    const [blogTitle, setBlogTitle] = useState('')

    const [blogData, setBlogData] = useState([]);

    const titleRef = useRef();
    const blogRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/login');
            const dataJson = await res.json();

            console.log('daajon',dataJson.data)
            setBlogData(dataJson.data);
        }
        fetchData();
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = {
            title: titleRef.current.value,
            blog: blogRef.current.value,
            user
        };
        console.log('formData', formData)
        const res = await fetch('/api/submitBlog', {
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
        Dashboard();
    }


    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <div className="col">
                    <div className="col-sm">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <h3 className="text-dark"><strong>Dashboard</strong></h3>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="col-sm w-50 p-5 mx-auto col-10 col-md-8 col-lg-6"> */}
                    <div className="col-sm w-100 col-10 col-md-8 col-lg-6 mt-5">
                        <form onSubmit={handleSubmit} className="m-auto px-5 flex-column justify-content-center align-items-center shadow py-5">
                            <div className="form-group m-3 w-100">
                                {/* <input type="email" className="form-control" ref={titleRef} id="email" placeholder="Placeholder" minLength={5} maxLength={50} required/> */}
                                <input type="text"
                                    className={`form-control ${(blogTitle.length > 5 && blogTitle.length < 50) ? 'is-valid' : 'is-invalid'}`}
                                    onChange={() => setBlogTitle(titleRef.current.value)}
                                    ref={titleRef} id="email" placeholder="Placeholder" required />
                            </div>
                            <div className="form-group m-3 w-100">
                                {/* <input type="password" className="form-control" id="email" placeholder="What is in your mind" /> */}
                                {/* <textarea rows={5} type="password" className="form-control" id="email" placeholder="What is in your mind" minLength={100} maxLength={3000} required/> */}
                                <textarea rows={5} type="password" ref={blogRef} className={`form-control ${(blogArea.length > 100 && blogArea.length < 3000) ? 'is-valid' : 'is-invalid'}`} id="email" placeholder="What is in your mind" onChange={() => setBlogArea(blogRef.current.value)} required />
                            </div>
                            {/* <!-- Other form inputs here --> */}
                            <div className="form-group m-3">
                                <button type="submit" className="btn btn-purple">Publish Blog</button>
                            </div>
                        </form>
                        <MyBlog blogs={blogData}/>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Dashboard