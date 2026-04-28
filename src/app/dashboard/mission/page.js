'use client';

import ContentEditor from '@/components/admin/ContentEditor';

export default function MissionEditor() {
  const defaultData = {
    title: 'MISSION',
    heading: 'LASU MBA COMMUNITY',
    description: "We're thrilled to have you join us on this exciting journey and as you embark on this transformative and exciting experience, we want you to know that you're not alone. You're part of a vibrant community of like-minded individuals who are passionate about learning, growth, making positive impact and ready to support and inspire each other.",
    image: '/images/mission.svg',
  };

  return (
    <ContentEditor
      section="mission"
      title="Mission Section"
      defaultData={defaultData}
      renderForm={({ content, setContent, ImageUploader }) => (
        <div className="space-y-6">
          <ImageUploader
            label="Mission Image"
            value={content.image}
            onChange={(url) => setContent({ ...content, image: url })}
          />

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
            <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
            <input
              type="text"
              value={content.heading || ''}
              onChange={(e) => setContent({ ...content, heading: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={content.description || ''}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      )}
    />
  );
}

