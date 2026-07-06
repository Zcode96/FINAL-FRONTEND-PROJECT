// src/app/page.tsx
"use client";
import { useState } from 'react';
import { SalesInput } from '@/components/atoms/SalesInput';
import { SalesChart } from '@/components/organisms/SalesChart';

export default function Dashboard() {
  const [threshold, setThreshold] = useState<number>(0);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Sales Analytics</h1>
          <p className="text-gray-600">Track your annual revenue performance</p>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Filter by Minimum Sales
          </label>
          <SalesInput value={threshold} onChange={setThreshold} />
        </section>

        <SalesChart threshold={threshold} />
      </div>
    </main>
  );
}