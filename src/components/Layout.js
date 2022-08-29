import { Outlet } from "react-router-dom";
// main entry for routers
const Layout = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};
export default Layout;
