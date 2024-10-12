// import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

function App() {
  //const [count, setCount] = useState(0)

  return (
    // <AppContextProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    //{/* </AppContextProvider> */}
  )
}

export default App
