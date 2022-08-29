import "./styles/header.css";
function Header(props) {
  const setShow = props.setShow;
  const setEdit = props.setEdit;
  const setEditID = props.setEditID;
  return (
    <div className="full-window">
      <h2 className="text-header">Lista de empleados</h2>
      <header className="App-header">
        <div className="container-header">
          <div className="container-child-left">
            <input
              className="buscar"
              placeholder="Buscar"
              onChange={(e) => props.setSearchText(e.target.value)}
            ></input>
          </div>
          <div className="container-child-right">
            <button
              className="button-nuevo"
              onClick={() => {
                setShow(true);
                setEdit(false);
                setEditID(0);
              }}
              id="buttonNuevoId"
            >
              <div className="icon">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="button-texto">Registrar</div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
