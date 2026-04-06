import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Protected = () => {

  const { loggedInUser } = useContext(Auth);

  if (!loggedInUser) {
    toast.error("Unauthorized user");
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default Protected;