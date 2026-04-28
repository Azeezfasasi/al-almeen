'use client';

import { useState, useEffect } from 'react';

export default function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="text-justify space-y-3 text-gray-700">
            <p className="font-semibold">Dear Future Leaders,</p>
            <p>Welcome to the Lagos State University MBA program!</p>
            <p>We are a team of professionals and members of LASU MBA. We are here to assist in providing necessary academic and social supports to all the incoming Managers. Our mission is to provide you with the academic and social support needed to ensure a smooth and successful start to your MBA journey.</p>
            <p>From your screening process to settling in, we are here to assist you every step of the way and help make your experience as seamless as possible.</p>
            <p>Once again, welcome to LASU. We wish you a rewarding journey ahead.</p>
            <p>Warm regards,</p>
            <p className="italic font-medium">Morad</p>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

