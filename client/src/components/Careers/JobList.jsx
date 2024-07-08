import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
const JobList = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      category: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Product Manager",
      category: "Product",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UX Designer",
      category: "Design",
      location: "San Francisco, CA",
      type: "Contract",
    },
    {
      id: 4,
      title: "Frontend Developer",
      category: "Engineering",
      location: "Remote",
      type: "Part-time",
    },
    {
      id: 5,
      title: "Backend Developer",
      category: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 6,
      title: "UI Designer",
      category: "Design",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 7,
      title: "Product Designer",
      category: "Design",
      location: "Remote",
      type: "Full-time",
    },
  ]);

  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
    type: "All",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.category === "All" || job.category === filters.category) &&
      (filters.location === "All" || job.location === filters.location) &&
      (filters.type === "All" || job.type === filters.type)
    );
  });

  return (
    <div className="w-[70%] m-auto pt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">Job Openings</h2>
        <div className="flex space-x-4">
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="py-2 px-4 border border-gray-300 rounded-md"
          >
            <option value="All">All Categories</option>
            <option value="Engineering">Engineering</option>
            <option value="Product">Product</option>
            <option value="Design">Design</option>
          </select>
          <select
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="py-2 px-4 border border-gray-300 rounded-md"
          >
            <option value="All">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="New York, NY">New York, NY</option>
            <option value="San Francisco, CA">San Francisco, CA</option>
          </select>
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="py-2 px-4 border border-gray-300 rounded-md"
          >
            <option value="All">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 border
            hover:bg-gray-300/20 transition-all duration-150 group cursor-pointer
             border-gray-300 rounded-md hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold group-hover:text-xl transition-all">
              {job.title}
            </h3>
            <p className="text-sm py-1">
              {job.category} - {job.location}
            </p>
            <p className="text-sm">{job.type}</p>
            <button
              onClick={() => navigate(`/devatoms/jobs/${job.id}/preview`)}
            className="mt-4 py-2 px-5 bg-gray-900 text-sm text-white rounded-md">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
