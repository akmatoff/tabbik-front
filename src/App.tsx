import RootRouter from "./components/RootRouter/RootRouter";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
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
