import RootRouter from "./components/RootRouter/RootRouter";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useUserdata } from "./queries/userdata";

function App() {
  useUserdata();

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Toaster />
        <RootRouter />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
