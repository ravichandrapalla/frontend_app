import { Toaster } from "react-hot-toast";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router";
import Blogs from "./components/Blogs";
import PrivateRoutes from "./components/PrivateRoutes";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" index element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/user"
          element={
            <PrivateRoutes>
              <Chat />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
