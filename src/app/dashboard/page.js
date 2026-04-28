'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchContent } from '@/lib/api';

const sections = [
  { key: 'hero', label: 'Hero Section', color: 'bg-blue-500', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { key: 'mission', label: 'Mission', color: 'bg-green-500', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { key: 'community', label: 'Community Power', color: 'bg-purple-500', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { key: 'steps', label: 'Important Steps', color: 'bg-orange-500', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
  { key: 'people', label: 'People to Know', color: 'bg-pink-500', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { key: 'network', label: 'Network', color: 'bg-indigo-500', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
];

export default function DashboardHome() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    Promise.all(
      sections.map(async (s) => {
        try {
          await fetchContent(s.key);
          return { key: s.key, hasContent: true };
        } catch {
          return { key: s.key, hasContent: false };
        }
      })
    ).then((results) => {
      const map = {};
      results.forEach((r) => { map[r.key] = r.hasContent; });
      setCounts(map);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {sections.map((section) => (
          <Link
            key={section.key}
            href={`/dashboard/${section.key}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${section.color} text-white mb-4`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{section.label}</h3>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${counts[section.key] ? 'bg-green-500' : 'bg-gray-300'}`} />
              <span className="text-sm text-gray-500">
                {counts[section.key] ? 'Custom content' : 'Using defaults'}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Guide</h2>
        <ul className="space-y-2 text-gray-600">
          <li>Click on any card above to edit that section.</li>
          <li>Use the Image Uploader to replace images - they are stored on Cloudinary.</li>
          <li>All changes are saved to the database and appear immediately on the homepage.</li>
          <li>Green dot means custom content is saved for that section.</li>
        </ul>
      </div>
    </div>
  );
}
