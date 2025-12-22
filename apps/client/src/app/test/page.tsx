import { auth } from '@clerk/nextjs/server';
import React from 'react'

const TestPage = async () => {
    const {getToken} = await auth();
    const token = await getToken()

    const res = await fetch("http://localhost:4100/test", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const data = await res.json()

  return (
    <div>page</div>
  )
}

export default TestPage