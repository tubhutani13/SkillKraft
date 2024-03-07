import { Outlet, Link } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
