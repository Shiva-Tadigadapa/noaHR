import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center max-w-[1600px]">

        {/* <h1 className='text-4xl'>App</h1> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App