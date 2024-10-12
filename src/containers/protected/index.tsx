/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet } from 'react-router-dom';
import { useApp } from '../../hooks/useProviderApp';

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = (props:any) => {
  const { login } = useApp()!;

  if (!login) {
    return <Navigate to='/login' replace />;
  }

  return <>{props.children}</>;
};

export default ProtectedRoute;