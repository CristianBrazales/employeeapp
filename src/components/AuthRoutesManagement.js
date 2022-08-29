import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoutesManagement = (props) => {
  const location = useLocation();
  var loggedInUser = JSON.parse(localStorage.getItem("app_state"));
  const retComponent = loggedInUser ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
  return retComponent;
};
export default AuthRoutesManagement;
