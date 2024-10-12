// import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { AppContextProvider } from './context/appContext'

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AppContextProvider> 
  )
}

export default App
