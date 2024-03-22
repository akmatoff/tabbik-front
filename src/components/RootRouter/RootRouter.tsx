import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  
  function RootRouter() {
    return <RouterProvider router={router} />;
  }
  
  export default RootRouter;