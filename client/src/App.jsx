import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/DashBoard";
import NewJobPost from "./pages/NewJob/NewJobPost";
import { Toaster } from "sonner";
import Sidebar from "./components/dashBoard/SideBar";
import ApplyForm from "./pages/ApplyForm/ApplyForm";
import { useLocation } from "react-router-dom";
import Career from "./pages/Careers/Career";
import ManageJob from "./pages/MangeJob/ManageJob";
import { ModalProvider } from "./context/ModalContext";
import EditJob from "./components/Manage/EditJob/EditJob";
import Settings from "./pages/Settings/Settings";
// import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (
      location.pathname.includes("devatoms") ||
      location.pathname.includes("myjobs")
    ) {
      setShow(false);
    }
  }, [location]);

  return (
    <>
    <ModalProvider>
      <div className="flex  justify-center  w-full">
        {show && <Sidebar />}
        {/* <h1 className='text-4xl'>App</h1> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/newjob" element={<NewJobPost />} />
          <Route path="/myjobs/manage/:id" element={<ManageJob />} />
          <Route path="/myjobs/manage/:column/job/:pid" element={<ManageJob   openSideModal={'true'} />} />
          <Route path="/devatoms/jobs/:jobId/preview" element={<ApplyForm />} />
          <Route path="/devatoms/preview/careers" element={<Career />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </div>
      </ModalProvider>
    </>
  );
};

export default App;
