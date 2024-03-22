import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Clubs from "@/pages/Clubs/Clubs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
