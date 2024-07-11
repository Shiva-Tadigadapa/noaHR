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
      <div className="flex items-center justify-center ">
        <div className="flex items-start justify-center max-w-[1800px] w-full p-5">
          {show && <Sidebar />}
          {/* <h1 className='text-4xl'>App</h1> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/newjob" element={<NewJobPost />} />
            <Route path="/myjobs/manage/:id" element={<ManageJob />} />
            <Route path="/devatoms/jobs/:jobId/preview" element={<ApplyForm />} />
            <Route path="/devatoms/preview/careers" element={<Career />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
          <Toaster position="top-right" richColors />
        </div>
      </div>
    </>
  );
};

export default App;
