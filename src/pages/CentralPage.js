import "../components/styles/centralPage.css";
import { GiSpaceship } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/authContext";
function CentralPage() {
  const navigate = useNavigate();
  const { authentication } = useAuth();
  let userRoles = authentication?.user?.roles;
  return (
    <div className="full-page-central">
      <div className="container-main-page">
        <div className="fs-1 fw-bold m-2">
          Bienvenido a nuestra nave Kruger Corp!
          <GiSpaceship size={120}></GiSpaceship>
          <div className="fs-2 fw-semibold m-2">Que deseas hacer hoy?</div>
        </div>

        <div className="container-right-home">
          {userRoles && userRoles.find((role) => role === "ADMIN") && (
            <div className="m-5 fs-2">
              <a
                className="m-2"
                onClick={(e) => {
                  e.preventDefault();

                  navigate("/admin");
                }}
              >
                Panel de administrador
              </a>
            </div>
          )}
          {userRoles && userRoles.find((role) => role === "USER") && (
            <div className="m-5 fs-2">
              <a
                className="m-2 "
                onClick={(e) => {
                  e.preventDefault();
                  console.log("here");
                  navigate("/user");
                }}
              >
                Panel de usuario
              </a>
            </div>
          )}

          <div className="m-5 fs-2">
            <a
              className="m-2"
              onClick={() => {
                localStorage.removeItem("app_state");
              }}
              href="/"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CentralPage;
