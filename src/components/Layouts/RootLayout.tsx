import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function RootLayout() {
  return (
    <div className="flex flex-col w-screen items-center text-text px-3">
      <Navbar />
      <div className="w-full lg:w-7/12 min-h-screen py-40">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
