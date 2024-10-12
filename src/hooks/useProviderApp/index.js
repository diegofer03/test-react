import React from 'react'
import { AppContext } from '../../context/appContext'

export const useApp = () => {
    return React.useContext(AppContext)
}

function useProviderApp() {
  const [countItem, setCountItem] = React.useState(0)
  const [detailOpen, setDetailOpen] = React.useState(false)
  const [productShow, setProductShow] = React.useState({})
  const [cardProducts, setCardProducts] = React.useState([])
  const [checkoutMenu, setCheckoutMenu] = React.useState(false)
  const [quantityChange, setQuantityChange] = React.useState(false)
  const [order, setOrder] = React.useState([])
  const [verifyState, setVerifyState] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [login, setLogin] = React.useState(false)
  const [user, setUser] = React.useState({})

  React.useEffect(() => {
    let quantity = 0
    for(let i = 0; i < cardProducts.length; i++){
      quantity += cardProducts[i].quantity
    }
    setCountItem(quantity)
  }, [quantityChange, cardProducts])

  React.useEffect(()=>{
    if(verifyState) localStorage.setItem('dark', JSON.stringify(darkMode))
  },[darkMode])

  const saveCards = () =>{
    localStorage.setItem('card', JSON.stringify(cardProducts))
  }

  const saveOrders = () => {
    localStorage.setItem('orders', JSON.stringify(order))
  }

  const deleteCards = () => {
    localStorage.removeItem('card')
  }

  const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('login', JSON.stringify(true))
  }

  const signOut = () => {
    setLogin(false)
    localStorage.setItem('login', JSON.stringify(false))
  }

  const logIn = () => {
    localStorage.setItem('login', JSON.stringify(true))
  }

  const differentUSer = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('user')
    localStorage.removeItem('orders')
  }

  const editUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  const getData = () => {
    const auxCard = JSON.parse(localStorage.getItem('card'))
    const auxOrder = JSON.parse(localStorage.getItem('orders'))
    const auxdark = JSON.parse(localStorage.getItem('dark'))
    const auxLogin = JSON.parse(localStorage.getItem('login'))
    const auxUser = JSON.parse(localStorage.getItem('user'))

    if(auxCard === null || auxCard ===undefined) setCardProducts([])
    else setCardProducts(auxCard)

    if(auxOrder === null || auxOrder ===undefined) setOrder([])
    else setOrder(auxOrder)

    if(auxdark === null || auxdark ===undefined) setDarkMode(false)
    else setDarkMode(auxdark)

    if(auxLogin === null || auxLogin ===undefined) setLogin(false)
    else setLogin(auxLogin)

    if(auxUser === null || auxUser ===undefined) setUser({})
    else setUser(auxUser)

    setVerifyState(true)
  }
  return {
    countItem,
    setCountItem,
    detailOpen,
    setDetailOpen,
    productShow,
    setProductShow,
    cardProducts, 
    setCardProducts,
    checkoutMenu, 
    setCheckoutMenu,
    quantityChange, 
    setQuantityChange,
    order, 
    setOrder,
    saveCards,
    saveOrders,
    getData,
    deleteCards,
    verifyState,
    darkMode,
    setDarkMode,
    loading, 
    setLoading,
    login, 
    setLogin,
    user, 
    setUser,
    saveUser,
    signOut,
    differentUSer,
    logIn,
    editUser
  }
}

export {useProviderApp}