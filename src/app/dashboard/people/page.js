'use client';

import { useState } from 'react';
import ContentEditor from '@/components/admin/ContentEditor';

function PeopleArrayEditor({ items, onChange, label }) {
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (!newItem.trim()) return;
    onChange([...items, newItem.trim()]);
    setNewItem('');
  };

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, value) => {
    const updated = [...items];
    updated[index] = value;
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
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
      ))}

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new person"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <button
          onClick={addItem}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-sm font-medium transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default function PeopleEditor() {
  const defaultData = {
    title: 'PEOPLE TO KNOW',
    subtitle: 'Building connections is vital to your MBA experience. Get to know the key people who will support you throughout your studies',
    people: [
      'Coordinator of MBA Program',
      'Dean of Post Graduate School',
      'Program Secretary',
      'LASUMBA Executives',
      'GBENUSI Community',
    ],
  };

  return (
    <ContentEditor
      section="people"
      title="People to Know Section"
      defaultData={defaultData}
      renderForm={({ content, setContent }) => (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
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

          <PeopleArrayEditor
            label="People List"
            items={content.people || []}
            onChange={(people) => setContent({ ...content, people })}
          />
        </div>
      )}
    />
  );
}

