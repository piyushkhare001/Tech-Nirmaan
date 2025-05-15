/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Project = {
  _id: string;
  name: string;
  description: string;
  image?: string;
};

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const fetchProjects = async () => {
    const res = await fetch('/api/project');
    const data = await res.json();
    setProjects(data);
  };

  const createProject = async () => {
    const res = await fetch('/api/project/new', {
      method: 'POST',
      body: JSON.stringify({ name, description, image }),
      headers: { 'Content-Type': 'application/json' },
    });
      alert('Project created successfully!');
    if (!res.ok) {
      console.error('Failed to create project:', res.statusText);
      return;
    }

    const data = await res.json();
    console.log('Project created:', data);
    setName('');
    setDescription('');
    setImage('');
    fetchProjects();
  };

  const deleteProject = async (id: string) => {
    await fetch(`/api/project/${id}`, { method: 'DELETE' });
    fetchProjects();
    alert('Project deleted successfully!');
  };

  useEffect(() => {
    if (localStorage.getItem('admin') !== 'true') {
      router.push('/admin/login');
    } else {
      fetchProjects();
    }
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">Admin Dashboard</h1>
    <button onClick={() => router.push('/admin/userPaymentInfo')} className="bg-blue-500 text-white px-4 py-2 mb-4">
      Check payed Users
    </button>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Create Project</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          onClick={createProject}
          className="bg-green-600 text-white px-4 py-2"
        >
          Add Project
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        {projects.map((project) => (
          <div
            key={project._id}
            className="border p-4 mb-3 rounded-md flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-white">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="mt-2 max-w-xs rounded"
                />
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => router.push(`/admin/project/${project._id}`)}
                className="bg-blue-500 text-white px-3 py-1 text-sm rounded"
              >
                View Lessons
              </button>
              <button
                onClick={() => deleteProject(project._id)}
                className="bg-red-500 text-white px-3 py-1 text-sm rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
