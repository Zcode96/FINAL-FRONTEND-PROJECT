"use client";
import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '@/lib/data';

// Define the shape of your sales data for TypeScript
interface SalesRecord {
  year: string;
  sales: number;
}

export const SalesChart = ({ threshold }: { threshold: number }) => {
  const [type, setType] = useState<'bar' | 'line'>('bar');
  
  // No need for useEffect or loading states if you use static data
  const data: SalesRecord[] = salesData;

  const filteredData = data.filter((d) => d.sales >= threshold);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setType('bar')} 
          className={`px-4 py-2 rounded ${type === 'bar' ? 'bg-blue-600 text-white' : 'bg-blue-200'}`}
        >
          Bar Chart
        </button>
        <button 
          onClick={() => setType('line')} 
          className={`px-4 py-2 rounded ${type === 'line' ? 'bg-green-600 text-white' : 'bg-green-200'}`}
        >
          Line Chart
        </button>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        {type === 'bar' ? (
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#9029bc" />
          </BarChart>
        ) : (
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#1b22a9" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};