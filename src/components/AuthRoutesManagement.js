import { Navigate, Outlet, useLocation } from "react-router-dom";
//  controls the routes and protected them from unauthorized access
const AuthRoutesManagement = ({ allowedRoles }) => {
  const location = useLocation();
  var appState = JSON.parse(localStorage.getItem("app_state"));
  // make sure user has appropiate role
  const retComponent = appState?.user?.roles?.find((role) =>
    allowedRoles.includes(role)
  ) ? (
    <Outlet></Outlet>
  ) : appState ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace></Navigate>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
  return retComponent;
};
export default AuthRoutesManagement;
