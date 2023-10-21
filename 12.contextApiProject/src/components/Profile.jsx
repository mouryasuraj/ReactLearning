import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <h1>Please Login</h1>


  return (
    <div className='flex flex-col items-center justify-center gap-y-6'>
      <h2>Welcome <span className='px-3 py-2 bg-sky-700 rounded-md'>{user.username}</span></h2>
      <h2>Your Password is <span className='px-3 py-2 bg-sky-700 rounded-md'>{user.password}</span></h2>
    </div>
  )
}

export default Profile
