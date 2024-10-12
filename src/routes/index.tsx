import { useRoutes} from 'react-router-dom'
import SignIn from '../components/signInForm'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <SignIn /> },
    
  ])

  return routes
}

export  {AppRoutes}