import SidePanel from "../components/SidePanel";
import Navbar from "../components/Navbar";
import RouterNav from "../router/Routes";
import { useState } from "react";

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="app-container min-h-screen flex overflow-hidden bg-white">
      <SidePanel
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="main-container flex-1 shrink w-full">
        <Navbar selectedPage={selectedPage} />
        <RouterNav />
      </div>
    </div>
  );
};

export default Layout;
