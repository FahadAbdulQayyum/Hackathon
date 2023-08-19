import Navbar from '@/components/navbar/Navbar'
import Profile from '@/components/profile/Profile'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const profilePage = () => {
    const router = useRouter()
    useEffect(() => {
        console.log('useEffecttttt', router)
      },[])
    
    return (
        <>
            <Navbar/>
            <Profile />
        </>
    )
}

export default profilePage