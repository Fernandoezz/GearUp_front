import { Outlet } from "react-router-dom";
import SideNavbar from "../components/sideNavbar"; 

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <SideNavbar />
      <div className="flex-1 p-6 ml-60">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
