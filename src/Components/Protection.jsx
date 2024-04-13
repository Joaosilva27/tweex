import { Navigate, Outlet } from "react-router";

const Protection = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to='/login' />;
};

export default Protection;
