import React from 'react';
import NewJob from '../../components/NewJob';

const NewJobPost = () => {
  return (
    <>
      <div className="flex justify-center items-start w-full ">
        <div className="w-[25%] h-screen flex items-center justify-center py-4">
          <div className="w-[90%] h-full rounded-3xl bg-white"></div>
        </div>
        <NewJob />
      </div>
    </>
  )
}

export default NewJobPost