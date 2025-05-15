/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Lesson = {
  _id: string;
  title: string;
  description: string;
  youtubeUrl: string;
};

type Project = {
  _id: string;
  name: string;
  description: string;
};

export default function ProjectLessonsPage() {
  const { id } = useParams();
  console.log('Project ID:', id);
  const [project, setProject] = useState<Project | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const fetchProject = async () => {
    const res = await fetch(`/api/project/${id}`);
    const data = await res.json();
    console.log('Project data:', data);
    setProject(data.project);
    setLessons(data.lessons);
  };

  const addLesson = async () => {
    await fetch(`/api/lessons/new`, {
      method: 'POST',
      body: JSON.stringify({ projectId: id, title, description, youtubeUrl }),
      headers: { 'Content-Type': 'application/json' },
    });
    setTitle('');
    setDescription('');
    setYoutubeUrl('');
    fetchProject();
  };

  const deleteLesson = async (_id: string) => {
    await fetch(`/api/lessons/${_id}`, { method: 'DELETE' });
    fetchProject();
  };

  useEffect(() => {
    fetchProject();
  }, []);

  if (!project) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto ">
      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Add Lesson</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Lesson Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="YouTube URL"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
        />
        <button
          onClick={addLesson}
          className="bg-green-600 text-white px-4 py-2"
        >
          Add Lesson
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Lessons</h2>
        {lessons.map((lesson) => (
          <div
            key={lesson._id}
            className="border p-4 mb-3 rounded-md flex justify-between items-start"
          >
            <div>
              <h3 className="font-bold">{lesson.title}</h3>
              <p className="text-sm text-gray-700 mb-1">{lesson.description}</p>
              <a
                href={lesson.youtubeUrl}
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                Watch on YouTube
              </a>
            </div>
            <button
              onClick={() => deleteLesson(lesson._id)}
              className="bg-red-500 text-white px-3 py-1 text-sm rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
