import React, { useContext } from 'react'
import globalContext from '../contextApi/GlobalContext'

const MyBlog = data => {
    const {user} = useContext(globalContext)
    // data = data.blogs.filter(v=>v.user.firstName === user?.firstName)
    // console.log(data.blogs.filter(v=>v.user.firstName === user?.firstName),'****')
    console.log(data.blogs.map(v=>v.user?.firstName),'****', user?.firstName)
    const filteredD = data.blogs.filter(v=>v.user?.firstName === user?.firstName)
    return (
        <div>
            {console.log('filteredD ****',filteredD)}
            <h3 className='my-5'>My Blogs</h3>
            {/* {data?.blogs?.map(v =>  */}
            {filteredD?.map(v => 
                <div className="card pe-4 px-3 my-3">
                    <div className="form-group m-3 w-100 d-flex">
                        <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' />
                        <div className="form-group m-3 w-100">
                            <h4>{v.title}</h4>
                            <small><strong>{v.user?.firstName+' '+v.user?.lastName} - {v.date}</strong></small>
                        </div>
                    </div>
                    <div className="form-group m-3 w-100 grey">
                        <p>
                            {v.blog}
                        </p>
                    </div>

                    <div className="form-group m-3">
                        <button type="submit" className="btn btn-link mx-1">Delete</button>
                        <button type="submit" className="btn btn-link ">Edit</button>
                    </div>
                </div>
            )
            }
        </div>
    )

    // return (
    //     <div>
    //         <h3 className='my-5'>My Blogs</h3>
    //         <div className="card pe-4 px-3">
    //             <div className="form-group m-3 w-100 d-flex">
    //                 {/* <img src='https://fahadd.netlify.app/images/profile.png'/> */}
    //                 {/* <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'/> */}
    //                 <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' />
    //                 <div className="form-group m-3 w-100">
    //                     <h4>An Action Button Could Be Coming to the iPhone 15</h4>
    //                     <small><strong>Inzamam Malik - August 16th, 2023</strong></small>
    //                 </div>
    //             </div>
    //             <div className="form-group m-3 w-100 grey">
    //                 <p>
    //                     Apple could be putting an Action button on your next iPhone. According to a July report from MacRumors, code in the fourth iOS 17 developer beta hints at functionality for an Action button on the next-gen iPhone 15 Pro and Pro Max models.
    //                     Apple introduced the Action button on the Apple Watch Ultra. It's a physical button on the side of the Apple Watch Ultra that allows you to run a preselected function or program when you press it without unlocking your device or navigating to an app. Some of the preselected functions include starting a stopwatch, beginning a workout and turning on your flashlight.
    //                 </p>
    //             </div>
    //             {/* <!-- Other form inputs here --> */}
    //             <div className="form-group m-3">
    //                 <button type="submit" className="btn btn-link mx-1">Delete</button>
    //                 <button type="submit" className="btn btn-link ">Edit</button>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default MyBlog;