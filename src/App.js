import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthRoutesManagement from "./components/AuthRoutesManagement";
import Layout from "./components/Layout";
import AdminPanel from "./pages/AdminPanel";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import CentralPage from "./pages/CentralPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>} />
      
      <Route path="/" element={<AuthRoutesManagement />}>
        <Route path="/" element={<CentralPage></CentralPage>} />
        <Route path="/admin" element={<AdminPanel></AdminPanel>} />
        <Route path="/user" element={<UserPage></UserPage>} />
      </Route>

      <Route path="*" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
}

export default App;
