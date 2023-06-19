import React from 'react'
import { LogoutButton } from './components/LogoutButton'
import { LoginButton } from './components/LoginButton'
import { Profile } from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

export const HomePage = () => {
const {isAuthenticated, isLoading}=useAuth0();
  if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
         <h1>Aplication</h1>
     {
      isAuthenticated ?<LogoutButton/> : <LoginButton/>
     }
     <Profile/>
    </div>
  )
}
