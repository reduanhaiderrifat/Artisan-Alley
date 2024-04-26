import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
  return (
    <div className="px-2">
      <Navbar></Navbar>
      <div className="h-[calc-(100vh-252px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
