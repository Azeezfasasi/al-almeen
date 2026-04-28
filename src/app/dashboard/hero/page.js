'use client';

import ContentEditor from '@/components/admin/ContentEditor';

export default function HeroEditor() {
  const defaultData = {
    title: 'LASU MBA ONBOARDING TOOLKIT',
    subtitle: 'Dear Managers, welcome to the LASU MBA community!',
    description: "It's Not Just About Academics\nYou'll get far more from networking, collaborations, side projects, and informal meetups than from textbooks. Your classmates are CEOs, Consultants, and policymakers, connect wisely.",
    button1Text: 'Important Steps',
    button1Target: 'steps',
    button2Text: 'People To Know',
    button2Target: 'people',
    backgroundImage: '/images/hero3.jpg',
  };

  return (
    <ContentEditor
      section="hero"
      title="Hero Section"
      defaultData={defaultData}
      renderForm={({ content, setContent, ImageUploader }) => (
        <div className="space-y-6">
          <ImageUploader
            label="Background Image"
            value={content.backgroundImage}
            onChange={(url) => setContent({ ...content, backgroundImage: url })}
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
            <input
              type="text"
              value={content.subtitle || ''}
              onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={content.description || ''}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Button 1 Text</label>
              <input
                type="text"
                value={content.button1Text || ''}
                onChange={(e) => setContent({ ...content, button1Text: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Button 1 Target (section ID)</label>
              <input
                type="text"
                value={content.button1Target || ''}
                onChange={(e) => setContent({ ...content, button1Target: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Button 2 Text</label>
              <input
                type="text"
                value={content.button2Text || ''}
                onChange={(e) => setContent({ ...content, button2Text: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Button 2 Target (section ID)</label>
              <input
                type="text"
                value={content.button2Target || ''}
                onChange={(e) => setContent({ ...content, button2Target: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
        </div>
    </div>
      )}
    />
  );
}
