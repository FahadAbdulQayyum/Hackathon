import React, { useContext, useEffect, useState } from 'react'
import globalContext from '../contextApi/GlobalContext'
import Router from 'next/router';

const ReaderSpecific = () => {

    const { viewFilteredUser } = useContext(globalContext);

    useEffect(() => {
        console.log('readspec', viewFilteredUser)
    }, [])

    return (
        <div
            style={{
                marginLeft: 110,
                marginRight: 110
            }}
        >
            <button className='btn btn-link fs-2 text' onClick={() =>Router.push('/')}><strong>{'<'}Back to all blogs</strong></button>
            <h3>All from {viewFilteredUser[0]?.user?.firstName}</h3>
            <div className='d-flex flex-row'>
                <div className="form-group m-3 w-100 order-1">
                <h3 className='iconClr'>{viewFilteredUser[0]?.user?.firstName}{' '}{viewFilteredUser[0]?.user?.lastName}</h3>
                    <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='shadow' style={{
                        borderRadius: 30,
                        height: 200
                    }} />
                    <div className="form-group m-3 w-100">
                    </div>
                </div>
            <div>
            {viewFilteredUser?.map(v =>
                <div key={v.title} className="card pe-4 px-3 my-3">
                    <div className="form-group m-3 w-100 d-flex">
                        <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='shadow' style={{
                            borderRadius: 30
                        }} />
                        <div className="form-group m-3 w-100">
                            <h4>{v.title}</h4>
                            <small><strong>{v.user?.firstName + ' ' + v?.user?.lastName} - {v.date}</strong></small>
                        </div>
                    </div>
                    <div className="form-group m-3 w-100 grey">
                        <p>
                            {v.blog}
                        </p>
                    </div>

                    <div className="form-group m-3">
                        <button type="submit" className="btn btn-link mx-1" onClick={() => whichUser(v.user.firstName, v.user.lastName)}>See all from this user</button>
                    </div>
                </div>
            )
            }
            </div>
            </div>
        </div>
    )
}

export default ReaderSpecific;