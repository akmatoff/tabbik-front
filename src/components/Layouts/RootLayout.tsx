import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex flex-col w-screen items-center text-text px-4 lg:px-20">
      <div className="w-full min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
