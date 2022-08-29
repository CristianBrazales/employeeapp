import "../components/styles/centralPage.css";

function UnauthorizedPage() {
  return (
    <div className="full-page-central">
      <div className="container-main-page">
        <a className="fs-1 fw-bold m-2" href="/">
          Error: pagina no authorizada, regresar al menu
        </a>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
