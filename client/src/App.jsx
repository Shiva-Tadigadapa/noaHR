import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewJobPost from './pages/NewJob/NewJobPost';
import { Toaster } from 'sonner';
import Sidebar from './components/dashBoard/SideBar';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center  w-full p-5">
      <Sidebar />
        {/* <h1 className='text-4xl'>App</h1> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/newjob" element={<NewJobPost />} />
        </Routes>
        <Toaster position='top-right' richColors/>
      </div>
    </>
  );
};

export default App;
