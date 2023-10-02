// ** React Imports
import { useEffect } from 'react';

// ** Next Import
import { useRouter } from 'next/router';
import { useAuth } from '@/components/hooks/useAuth';

// ** Hooks Import

const AuthGuard = ({ children, fallback }) => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (auth.user === null && !window.localStorage.getItem('user')) {
      if (router.asPath !== '/') {
        router.replace({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        });
      } else {
        router.replace('/login');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  if (auth.loading || auth.user === null) {
    return fallback;
  }

  return <>{children}</>;
};

export default AuthGuard;