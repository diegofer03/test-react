import { Navigate, useRoutes} from 'react-router-dom'
import SignIn from '../containers/signIn'
import ProtectedRoute from '../containers/protected'
import Dashboard from '../containers/dashboard'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/sigin', element: <SignIn /> },
    { path: '/dashboard', element: <ProtectedRoute> <Dashboard/> </ProtectedRoute> },
    { path:"/*", element:<Navigate to="/sigin" />},
  ])

  return routes
}

export  {AppRoutes}