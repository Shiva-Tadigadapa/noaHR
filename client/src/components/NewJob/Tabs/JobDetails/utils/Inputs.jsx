import React from 'react'

const Inputs = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">

        <div className="flex flex-col space-y-2">
          <label htmlFor="jobTitle" className="text-sm font-semibold">Job Title</label>
          <input type="text" id="jobTitle" className="py-2 px-4 border border-gray-300 rounded-md" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="companyName" className="text-sm font-semibold">Company Name</label>
          <input type="text" id="companyName" className="py-2 px-4 border border-gray-300 rounded-md" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="location" className="text-sm font-semibold">Location</label>
          <input type="text" id="location" className="py-2 px-4 border border-gray-300 rounded-md" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="jobType" className="text-sm font-semibold">Job Type</label>
          <select id="jobType" className="py-2 px-4 border border-gray-300 rounded-md">
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="salary" className="text-sm font-semibold">Salary</label>
          <input type="text" id="salary" className="py-2 px-4 border border-gray-300 rounded-md" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="text-sm font-semibold">Job Description</label>
          <textarea id="description" className="py-2 px-4 border border-gray-300 rounded-md" rows="5"></textarea>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="requirements" className="text-sm font-semibold">Requirements</label>
          <textarea id="requirements" className="py-2 px-4 border border-gray-300 rounded-md" rows="5"></textarea>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="applicationDeadline" className="text-sm font-semibold">Application Deadline</label>
          <input type="date" id="applicationDeadline" className="py-2 px-4 border border-gray-300 rounded-md" />
        </div>

      </div>
    </>
  )
}

export default Inputs