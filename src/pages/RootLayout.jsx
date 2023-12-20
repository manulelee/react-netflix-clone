import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const RootLayout = ({ children }) => {
  return (
    <span className="flex flex-col justify-between min-h-screen w-full" id="rootLayout">
      <Navbar />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </span>
  );
};
export default RootLayout;
