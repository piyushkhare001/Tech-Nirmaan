'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem('admin', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Admin Login</h1>
      <input
        type="password"
        className="border p-2 w-full mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter admin password"
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 w-full">
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
