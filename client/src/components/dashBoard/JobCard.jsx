import React from 'react'
import Avatar from 'boring-avatars'
import { Link } from 'react-router-dom'

const JobCard = (props) => {
  const { name } = props;
  return (
    <>
      <Link to={`/myjobs/manage/${name}`} className=" rounded-xl  px-5  py-4  w-[90%] bg-gray-900" >
        <div className=" flex flex-col gap-4">
          <div className=" flex items-center ">
            <Avatar
              size={35}
              name="Maria Mitchell"
              variant="marble"
              colors={[
                "#92A1C6",
                "#146A7C",
                "#F0AB3D",
                "#C271B4",
                "#C20D90",
              ]}
            />
            ;
            <h1 className="text-xl text-white  font-medium">
              Job Name goes here
            </h1>
          </div>
          <div className=" flex ml-2 gap-4">
            <div className=" px-2 py-2 text-xs  rounded-md    text-white bg-gray-700">
              <p>Not Yet Published</p>
            </div>
            <div className=" px-2 py-2 text-xs  rounded-md    text-white bg-gray-700">
              <p>Full Time</p>
            </div>
            <div className=" px-2 py-2 text-xs  rounded-md    text-white bg-gray-700">
              <p>Remote/Onsite</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default JobCard