import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();

    const checkAuthentication = () => {
      if (!user) {
        router.push("/login");
      }
    };

    useEffect(() => {
      checkAuthentication();
    }, [user]);

    return <WrappedComponent user={user} {...props} />;
  };
};

export default withAuth;
