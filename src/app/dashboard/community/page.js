'use client';

import ContentEditor from '@/components/admin/ContentEditor';

export default function CommunityEditor() {
  const defaultData = {
    title: 'The Power of Community and Collaboration',
    description: 'At LASU MBA, we believe that community and collaboration are the keys to success. By working together, sharing ideas, and supporting one another, we can achieve great things. Our community is built on the principles of mutual respect, trust and a shared passion for excellence.\n\nAs Morad always says, "Leadership starts with service." We\'re committed to creating an environment where you can grow, learn, and thrive. Whether you\'re looking for academic support, career guidance, or simply a friendly ear, we\'re here for you.',
    image: '/images/lasu.jpg',
  };

  return (
    <ContentEditor
      section="community"
      title="Community Power Section"
      defaultData={defaultData}
      renderForm={({ content, setContent, ImageUploader }) => (
        <div className="space-y-6">
          <ImageUploader
            label="Community Image"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={content.description || ''}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      )}
    />
  );
}

