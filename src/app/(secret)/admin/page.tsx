/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Admin() {
   const { data: session } = useSession()
   const [jobs, setJobs] = useState<any[]>([]);
   const [newJob, setNewJob] = useState({
     companyName: '',
     applyLink: '',
     lastDateToApply: '',
     location: '',
   });

   const router = useRouter();

   useEffect(() => {
     // Fetch jobs from DB on initial load
     const fetchJobs = async () => {
       try {
         const response = await axios.get('/api/getJobs');
         setJobs(response.data);
       } catch (error) {
         console.error('Error fetching jobs:', error);
       }
     };
     fetchJobs();
   }, []);

   const handleCreateJob = async () => {
    try {
      console.log("Posting job:", newJob); // Check the data being sent
      const response = await axios.post('/api/postJob', newJob);
      console.log("Job posted:", response.data); // Check the response
  
      setNewJob({
        companyName: '',
        applyLink: '',
        lastDateToApply: '',
        location: '',
      });
      if(response){
        toast.success('Job posted successfully');
      }
    
    } catch (error) {
      console.error("Error posting job:", error);
      toast.error('Failed to post job');
    }
  };
  

   const handleDeleteJob = async (jobId: string) => {
     try {
      await axios.delete(`/api/deleteJob?id=${jobId}`);
       toast.success('Job deleted successfully');
     } catch (error) {
       toast.error('Failed to delete job');
     }
   };

  return (
    <div className="bg-black min-h-screen text-white">
      {session?.user?.email === "piyushkhare671@gmail.com" ? (
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-2xl font-bold mb-6">Admin - Job Management</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">Post New Job</h2>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded text-black"
                type="text"
                placeholder="Company Name"
                value={newJob.companyName}
                onChange={(e) => setNewJob({ ...newJob, companyName: e.target.value })}
              />
              <input
                className="w-full p-2 border rounded text-black"
                type="url"
                placeholder="Apply Link"
                value={newJob.applyLink}
                onChange={(e) => setNewJob({ ...newJob, applyLink: e.target.value })}
              />
              <input
                className="w-full p-2 border rounded text-black"
                type="date"
                value={newJob.lastDateToApply}
                onChange={(e) => setNewJob({ ...newJob, lastDateToApply: e.target.value })}
              />
              <input
                className="w-full p-2 border rounded text-black"
                type="text"
                placeholder="Location"
                value={newJob.location}
                onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
              />
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded"
                onClick={handleCreateJob}
              >
                Post Job
              </button>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">All Jobs</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job._id} className="p-4 border rounded-md shadow-md bg-gray-800">
                <p><strong>Company:</strong> {job.companyName}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Last Date to Apply:</strong> {new Date(job.lastDateToApply).toLocaleDateString()}</p>
                <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Apply Here
                </a>
                <button
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
                  onClick={() => handleDeleteJob(job._id)}
                >
                  Delete Job
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center mt-20 text-xl">Protected route for admin only</p>
      )}
    </div>
  );
}
