'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem('admin') === 'true';
    const isLoginPage = window.location.pathname.includes('/admin/login');

    if (!isAdmin && !isLoginPage) {
      router.replace('/admin/login');
    }
  }, []);

  return <div>{children}</div>;
}
