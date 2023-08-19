import React, { useContext } from 'react'
import globalContext from '../contextApi/GlobalContext'
import { message } from 'antd'

const MyBlog = data => {
    const { user } = useContext(globalContext)
    const filteredD = data.blogs.filter(v => v.user?.firstName === user?.firstName)

    const deleteBlog = async data => {
        const confirmDelete = confirm("Are you sure to delete")
        if (confirmDelete) {
            const res = await fetch("api/deleteBlog", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let resJson = await res.json();
            message.success(resJson.msg)
        }
    }

    const updateBlog = data => {
        console.log('update Blog', data);
    }

    return (
        <div>
            <h3 className='my-5'>My Blogs</h3>
            {filteredD?.map(v =>
                <div className="card pe-4 px-3 my-3">
                    <div className="form-group m-3 w-100 d-flex">
                        <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' />
                        <div className="form-group m-3 w-100">
                            <h4>{v.title}</h4>
                            <small><strong>{v.user?.firstName + ' ' + v.user?.lastName} - {v.date}</strong></small>
                        </div>
                    </div>
                    <div className="form-group m-3 w-100 grey">
                        <p>
                            {v.blog}
                        </p>
                    </div>

                    <div className="form-group m-3">
                        <button type="submit" className="btn btn-link mx-1" onClick={() => deleteBlog(v.blog)}>Delete</button>
                        <button type="submit" className="btn btn-link " onClick={() => updateBlog(v.blog)}>Edit</button>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default MyBlog;