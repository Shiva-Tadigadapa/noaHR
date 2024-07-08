import React from 'react'
import Navbar from './NavBar/Navbar'
import SideBar from './Sidebar/Sidebar';
import BoardIndex from './Board/BoardIndex';

const Index = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <Navbar />
      <div className='flex gap-5 p-12 w-full items-start'>
        <SideBar />
        <BoardIndex />
      </div>
    </div>
  )
}

export default Index