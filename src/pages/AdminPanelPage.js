import { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBarCustom from "../components/NavBar";
import CreateForm from "../components/CreateUserForm";
import CustomTable from "../components/Table";
import { deleteUser, getUsers } from "../services/API";
import useAuth from "../context/authContext";
import { generateOptionNavBar } from "../utils";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const { authentication } = useAuth();
  let currentUser = authentication.user;
  let optionsNavbar = generateOptionNavBar(currentUser?.roles);
  const navigate = useNavigate();
  const [showNuevo, setShow] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editID, setEditID] = useState(0);
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const edithandler = (id) => {
    setEditID(id);
    setEdit(true);
    setShow(true);
  };
  const deleteHandler = async (id) => {
    await deleteUser(id);
    refreshData();
  };

  useEffect(() => {
    (async () => {
      let usersData = await getUsers();
      setUsers(usersData);
      setAllUsers(usersData);
    })();
  }, []);

  let refreshData = async () => {
    let usersData = await getUsers();
    setUsers(usersData);
  };

  return (
    <div className="sidebar-container">
      <NavBarCustom
        optionsList={optionsNavbar}
        clickHanlder={navigate}
      ></NavBarCustom>
      <div className="m-5">
        <Header
          setShow={setShow}
          setEdit={setEdit}
          setEditID={setEditID}
          setUsers={setUsers}
          allUsers={allUsers}
        ></Header>
      </div>
      {showNuevo && (
        <div className="mx-5 my-1">
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
          deleteHandler={deleteHandler}
          edithandler={edithandler}
        ></CustomTable>
      </div>
    </div>
  );
}

export default AdminPanel;
