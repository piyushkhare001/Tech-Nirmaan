/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/admin/payments.js
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentInfo() {
  const router = useRouter();
  interface Payment {
    _id: string;
    name: string;
    email: string;
    phone: string;
    transactionId: string;
  }

  const [paymentData, setPaymentData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if admin is true in localStorage
    const isAdmin = localStorage.getItem('admin') === 'true';
    
    if (!isAdmin) {
      router.push('/'); // Redirect to home if not admin
      return;
    }

    // Fetch payment data
    const fetchPaymentData = async () => {
      try {
        const response = await fetch('/api/userPaymentInfo');
        const data = await response.json();
        
        if (data?.data) {
          setPaymentData(data?.data);
        } else {
          setError('Failed to fetch payment data');
        }
      } catch (err : any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentData();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">User Payment Information</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Transaction ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {paymentData.map((payment, index) => (
              <tr key={payment?._id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{payment.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{payment.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{payment.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{payment.transactionId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{payment._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}