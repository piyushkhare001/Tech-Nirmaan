/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios from 'axios';

const JobsPage = () => {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('/api/getJobs');
      setJobs(response.data);
      console.log(jobs)
    };
    fetchJobs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto overflow-y-auto h-full p-8 scrollbar-hidden">
      <h1 className="text-2xl text-white font-bold mb-6">Job Listings</h1>
      <div className=" flex flew-wrap gap-8 ">
  {jobs.map((job) => (
    <div
      key={job._id}
      className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
    >
      <h3 className="text-lg font-bold text-white mb-2">{job.companyName}</h3>
      <p className="text-sm text-gray-400 mb-4">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-sm text-gray-400 mb-4">
        <strong>Last Date to Apply:</strong>{" "}
        <span className="text-gray-300">{new Date(job.lastDateToApply).toLocaleDateString()}</span>
      </p>
      <a
        href={job.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-all"
      >
        Apply Here
      </a>
    </div>
  ))}
</div>
    </div>
  );
};

export default JobsPage;
