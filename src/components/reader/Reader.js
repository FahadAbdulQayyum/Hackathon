import React, { useContext, useEffect, useState } from 'react'
import globalContext from '../contextApi/GlobalContext'
// import Router from 'next/router';
import {useRouter} from 'next/router';

const Reader = data => {

    const router = useRouter();
    
    const { user, viewFilteredUserFunc, Dashboard, Login,DashboardFalse } = useContext(globalContext)

    const [blogData, setBlogData] = useState([]);
    const [timeOfDay, setTimeOfDay] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/login');
            const dataJson = await res.json();

            console.log('daajon', dataJson.data)
            setBlogData(dataJson.data);
            // Dashboard()
            DashboardFalse()
        }

        const determineTimeOfDay = () => {
            const currentHour = new Date().getHours();
            let timeOfDay = '';

            if (currentHour >= 6 && currentHour < 12) {
                timeOfDay = 'Morning';
            } else if (currentHour >= 12 && currentHour < 18) {
                timeOfDay = 'Afternoon';
            } else {
                timeOfDay = 'Night';
            }

            setTimeOfDay(timeOfDay);
        };

        determineTimeOfDay();
        fetchData();
    }, [])

    const whichUser = async (fn, ln) => {
        const res = await fetch('/api/submitBlog')
        const jsonData = await res.json();
        let dataJson = jsonData.data
        dataJson = dataJson?.filter(v=> v.user.firstName===fn)
        viewFilteredUserFunc(dataJson)
        // Router.push('/readerSpecific')
        router.push('/readerSpecificPage')
    }

    return (
        <div
            style={{
                marginLeft: 110,
                marginRight: 110
            }}
        >
            <h2 className='my-5'><strong>Good {timeOfDay} Readers!</strong></h2>
            <h3 className='my-5'>All Blogs</h3>
            {blogData?.map((v,i) =>
                <div key={i} className="card pe-4 px-3 my-3">
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
    )
}

export default Reader;