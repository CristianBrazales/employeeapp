import { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBarCustom from "../components/NavBar";
import CreateForm from "../components/CreateUserForm";
import CustomTable from "../components/Table";
import { getUsers } from "../services/API";

function AdminPanel() {
  let options = [{ name: "Admin Panel", reference: "admin" }];
  const [showNuevo, setShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [editID, setEditID] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let usersData = await getUsers();
      setUsers(usersData);
    })();
  }, []);

  let refreshData = async () => {
    let usersData = await getUsers();
    setUsers(usersData);
  };

  return (
    <div className="sidebar-container">
      <NavBarCustom optionsList={options}></NavBarCustom>
      <div className="m-5">
        <Header
          setShow={setShow}
          setEdit={setEdit}
          setSearchText={setSearchText}
          setEditID={setEditID}
        ></Header>
      </div>
      {showNuevo && (
        <div className="m-5">
          <CreateForm
            isEdit={isEdit}
            editID={editID}
            setShow={setShow}
            refreshData={refreshData}
            setEditID={setEditID}
            setEdit={setEdit}
          ></CreateForm>
        </div>
      )}
      <div className="table-container m-5 bg-white border">
        <CustomTable
          data={users}
          setEdit={setEdit}
          setShow={setShow}
          setEditID={setEditID}
          refreshData={refreshData}
        ></CustomTable>
      </div>
    </div>
  );
}

export default AdminPanel;
