import React from 'react';
import { BsPencilFill } from 'react-icons/bs'

const Profile = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <div className="col">
                    <div className="col-sm">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <h3 className="text-dark"><strong>Profile</strong></h3>
                            </li>
                        </ul>
                    </div>
                    <div className="card mt-5">
                        <div className="col-sm w-100 col-10 col-md-8 col-lg-6">
                            <form className="m-auto flex-column justify-content-center align-items-center py-5">
                                <div className="form-group m-3 w-25">
                                    <div className=' position-relative w-100'>
                                        <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='shadow borderRadius' />
                                        <p className='position-absolute bottom-0 start-100' style={{
                                            marginBottom: 30,
                                            marginLeft: 15
                                        }}>
                                            <BsPencilFill className='iconClr' />
                                        </p>
                                    </div>
                                </div>
                                <div className='ms-3 mt-5'>
                                    <div className='d-flex align-items-center text-item-center'>
                                        <h4 className='me-3'>Inzamam Malik</h4>
                                        <BsPencilFill className='iconClr' size={18} />
                                    </div>
                                    <h4>Password</h4>
                                </div>
                                <div className="form-group m-3 w-50">
                                    <input type="password" className="form-control my-4" id="old_pass" placeholder="Old Password" />
                                    <input type="password" className="form-control my-4" id="new_pass" placeholder="New Password" />
                                    <input type="password" className="form-control my-4" id="repeat_pass" placeholder="Repeat Password" />
                                </div>
                                <div className="form-group m-3">
                                    <button type="submit" className="btn btn-purple">Update Password</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Profile