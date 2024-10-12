/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { AppContext } from '../../context/appContext'

export const useApp = () => {
    return React.useContext(AppContext)
}

function useProviderApp() {
  const [detailOpen, setDetailOpen] = React.useState(false)
  const [verifyState, setVerifyState] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [login, setLogin] = React.useState(false)
  const [user, setUser] = React.useState({})
  

  const saveUser = (user: any) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('login', JSON.stringify(true))
  }

  const signOut = () => {
    setLogin(false)
    localStorage.setItem('login', JSON.stringify(false))
    localStorage.removeItem('user')
  }

  const logIn = () => {
    localStorage.setItem('login', JSON.stringify(true))
  }

  const getData = () => {
    const auxLogin = JSON.parse(localStorage.getItem('login')!)
    const auxUser = JSON.parse(localStorage.getItem('user')!)
    localStorage.setItem('mui-mode', 'dark')
    
    if(auxLogin === null || auxLogin ===undefined) setLogin(false)
    else setLogin(auxLogin)

    if(auxUser === null || auxUser ===undefined) setUser({})
    else setUser(auxUser)

    setVerifyState(true)
  }
  return {
    detailOpen,
    setDetailOpen,
    getData,
    verifyState,
    loading, 
    setLoading,
    login, 
    setLogin,
    user, 
    setUser,
    saveUser,
    signOut,
    logIn,
  }
}

export {useProviderApp}