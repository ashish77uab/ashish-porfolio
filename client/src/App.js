import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import {
  Home
} from "./pages";

import MainLayout from "./components/layout/MainLayout";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        className={
          "lg:w-[500px] text-16 font-semibold w-full max-w-full  m-auto p-0 !font-poppins"
        }
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={3}
      />
    </div>
  );
}

export default App;
