import { createHashRouter} from 'react-router-dom'


const AppRoutes = () => {
    let routes = createHashRouter([
        {path: '/', element: <Home/>},
        {path: '/my-account', element: <MyAccount />},
        {path: '/my-order', element: <MyOrder />},
        {path: '/my-orders', element: <MyOrders />},
        {path: '/sign-in', element: <SignIn />},
        {path: '/*', element: <NotFound />},

    ])
  return routes
}

export  {AppRoutes}