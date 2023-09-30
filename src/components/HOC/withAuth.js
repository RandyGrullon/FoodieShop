import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const userIsAuthenticated = false; // Aquí debería ir tu lógica de autenticación

    useEffect(() => {
      if (!userIsAuthenticated) {
        Router.replace('/login');
      }
    }, [userIsAuthenticated]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
