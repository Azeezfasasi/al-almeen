'use client';

import { useState } from 'react';
import ContentEditor from '@/components/admin/ContentEditor';

function ArrayEditor({ items, onChange, label }) {
  const [newItem, setNewItem] = useState({ title: '', description: '' });

  const addItem = () => {
    if (!newItem.description.trim()) return;
    onChange([...items, { ...newItem }]);
    setNewItem({ title: '', description: '' });
  };

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, field, value) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      
      {items.map((item, index) => (
        <div key={index} className="bg-gray-50 p-3 rounded-md space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={item.title || ''}
              onChange={(e) => updateItem(index, 'title', e.target.value)}
              placeholder="Title (optional)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <button
              onClick={() => removeItem(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          <textarea
            value={item.description || ''}
            onChange={(e) => updateItem(index, 'description', e.target.value)}
            placeholder="Description"
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
      ))}

      <div className="bg-gray-50 p-3 rounded-md space-y-2 border-2 border-dashed border-gray-300">
        <input
          type="text"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          placeholder="New item title (optional)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <textarea
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          placeholder="New item description"
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <button
          onClick={addItem}
          className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-sm font-medium transition-colors"
        >
          + Add Item
        </button>
      </div>
    </div>
  );
}

export default function StepsEditor() {
  const defaultData = {
    title: 'IMPORTANT FIRST STEPS',
    subtitle: 'To kick off your MBA journey, here are some essential steps to take:',
    items: [
      { title: 'Payment of Important Fees', description: 'After you have been offered admission, visit the school portal to pay the required fees like Acceptance Fee, Medical Fee, LACACA Fee and Library Fee.' },
      { title: 'School fee payment', description: 'The school fee payment can be made in two (2) installments of 70% and 30%.' },
      { title: 'Activate Your LASU Student Portal', description: 'In order to access essential resources and information through the portal activate your LASU student portal and ensure you complete your course registration as soon as possible.' },
      { title: 'Familiarize yourself with the campus to make your transition smoother', description: 'Class Venues: Know where your classes will take place.\nFaculty Office: Find out where to meet your professors.\nLibrary: Discover the resources available for your studies.\nCool Spots: Check out popular locations to relax or grab a bite.' },
      { title: '', description: 'To stay updated on important announcement click here For further information: https://chat.whatsapp.com/DOkruJS6Epl8jqdeFZ29X5' },
    ],
    note: {
      title: '',
      text: 'LASU is renowned for its commitment to academic excellence. As such, all lectures must be taken seriously, and class attendance is compulsory.\n\nThe pass mark is set at 50%. Final scores are determined through a combination of examinations and Continuous Assessments (CAs). The examination constitutes 70% of the total score, while the remaining 30% comes from CAs, which may include tests, assignments, and class participation, including attendance.',
      grading: ['A - 70% and above', 'B - 60% - 69%', 'C - 50% - 59%', 'Less than 50% - FAIL'],
    },
  };

  return (
    <ContentEditor
      section="steps"
      title="Important Steps Section"
      defaultData={defaultData}
      renderForm={({ content, setContent }) => (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
            <input
              type="text"
              value={content.title || ''}
              onChange={(e) => setContent({ ...content, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
            <input
              type="text"
              value={content.subtitle || ''}
              onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <ArrayEditor
            label="Step Items"
            items={content.items || []}
            onChange={(items) => setContent({ ...content, items })}
          />

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Note Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Note Text</label>
              <textarea
                value={content.note?.text || ''}
                onChange={(e) => setContent({ ...content, note: { ...content.note, text: e.target.value } })}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Grading Scale (one per line)</label>
              <textarea
                value={(content.note?.grading || []).join('\n')}
                onChange={(e) => setContent({ ...content, note: { ...content.note, grading: e.target.value.split('\n').filter(l => l.trim()) } })}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="A - 70% and above&#10;B - 60% - 69%"
              />
            </div>
        </div>
        </div>
      )}
    />
  );
}
