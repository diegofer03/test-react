/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from 'react-router-dom';
import { useApp } from '../../hooks/useProviderApp';
import { useEffect } from 'react';


const ProtectedRoute = (props:any) => {
  const { login, getData } = useApp()!;

  useEffect(()=>{
    getData()
  },[])

  if (!login) {
    return <Navigate to='/login' replace />;
  }

  return <>{props.children}</>;
};

export default ProtectedRoute;