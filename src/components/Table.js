import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/table.css";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { deleteUser } from "../services/API";
import useAuth from "../context/authContext";
function CustomTable(props) {
  const titles = [
    "Cédula",
    "Nombre",
    "Apellido",
    "Correo electrónico",
    "Estado Vacunación",
    "Fecha Vacunación",
    "Tipo vacuna",
  ];

  const data = props.data;
  let refreshData = props.refreshData;
  return (
    <div className="container-table">
      <Table
        striped={false}
        bordered={true}
        size="sm"
        responsive={true}
        key="table-key"
        style={{ margin: 0 }}
      >
        <thead key="table">
          <tr key="tr-key">
            {titles.map((item) => {
              return (
                <th className="table-header-custom" key={item}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            console.log(item.fechaVacuna);
            let fechaVacuna, fechaVacunastr;
            if (item.fechaVacuna && item.fechaVacuna !== "") {
              fechaVacuna = new Date(item.fechaVacuna);
              fechaVacunastr = fechaVacuna.toISOString().split("T")[0];
            } else {
              fechaVacunastr = "No info";
            }
            return (
              <tr key={item.id}>
                <td>{item.cedula}</td>
                <td>{item.nombres}</td>
                <td>{item.apellidos}</td>
                <td>{item.email}</td>
                <td>
                  {item.estadoVacunacion === "true" ||
                  item.estadoVacunacion === true
                    ? "Si"
                    : "No"}
                </td>
                <td>{fechaVacunastr}</td>
                <td>{item.tipoVacuna ? item.tipoVacuna : "No Info"}</td>
                <td className="float-container ">
                  <div
                    className="float-child"
                    onClick={() => {
                      props.setEditID(item.id);
                      props.setEdit(true);
                      props.setShow(true);
                    }}
                  >
                    <HiOutlinePencilAlt
                      color="#6758f6"
                      className="icon-table"
                    ></HiOutlinePencilAlt>
                  </div>
                  <div
                    className="float-child"
                    onClick={() => {
                      (async () => {
                        await deleteUser(item.id);
                        refreshData();
                      })();
                    }}
                  >
                    <RiDeleteBin2Fill
                      className="icon-table"
                      color="#6758f6"
                    ></RiDeleteBin2Fill>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
