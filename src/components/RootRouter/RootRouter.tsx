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
import ClubsList from "@/pages/Clubs/components/ClubsList";
import ClubDetails from "@/pages/Clubs/ClubDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/clubs" element={<Clubs />}>
          <Route index path="list" element={<ClubsList />} />
          <Route path=":id" element={<ClubDetails />} />
        </Route>
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
