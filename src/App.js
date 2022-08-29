import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthRoutesManagement from "./components/AuthRoutesManagement";
import Layout from "./components/Layout";
import AdminPanel from "./pages/AdminPanelPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import CentralPage from "./pages/CentralPage";
import UnauthorizedPage from "./pages/UnauthoizedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<LoginPage></LoginPage>} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
        {/* Routes protected by roles */}
        <Route element={<AuthRoutesManagement allowedRoles={["ADMIN"]} />}>
          <Route path="admin" element={<AdminPanel></AdminPanel>} />
        </Route>
        <Route element={<AuthRoutesManagement allowedRoles={["USER"]} />}>
          <Route path="user" element={<UserPage></UserPage>} />
        </Route>
        <Route
          element={<AuthRoutesManagement allowedRoles={["ADMIN", "USER"]} />}
        >
          <Route path="/" element={<CentralPage></CentralPage>} />
        </Route>
        {/* Routes default */}
        <Route path="*" element={<LoginPage></LoginPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
