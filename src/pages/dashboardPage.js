import Dashboard from '@/components/dashboard/Dashboard'
import Navbar from '@/components/navbar/Navbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const dashboardPage = () => {

    // const router = useRouter();

    // useEffect(() => {
    //     rou
    // })

  return (
    <>
    <Navbar/>
    <Dashboard/>
    </>
  )
}

export default dashboardPage