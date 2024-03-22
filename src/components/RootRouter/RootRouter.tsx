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
import Profile from "@/pages/Profile/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
