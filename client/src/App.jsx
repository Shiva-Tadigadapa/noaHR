import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import NewJobPost from './pages/NewJob/NewJobPost';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center max-w-[1600px]">

        {/* <h1 className='text-4xl'>App</h1> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/newjob" element={<NewJobPost />} />
        </Routes>
        <Toaster position='top-right' richColors/>
      </div>
    </>
  )
}

export default App