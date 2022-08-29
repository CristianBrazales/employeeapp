import "../components/styles/centralPage.css";
import { GiSpaceship } from "react-icons/gi";
function CentralPage() {
  return (
    <div className="full-page-central">
      <div className="container-main-page">
        <div className="fs-1 fw-bold m-2">
          Bienvenido a nuestra nave Kruger Corp!
          <GiSpaceship size={120}></GiSpaceship>
          <div className="fs-2 fw-semibold m-2">Que deseas hacer hoy?</div>
        </div>
        <div className="container-right-home">
          <div className="m-5 fs-2">
            <a className="m-2" href="/admin">
              Llevame al panel de administrador
            </a>
          </div>
          <div className="m-5 fs-2">
            <a className="m-2" href={"/user"}>
              Manejar mi informacion
            </a>
          </div>
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
