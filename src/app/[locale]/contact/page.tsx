
'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', workEmail: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>
      <div className="mt-12 max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium">
              {t('full_name')}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t('full_name_placeholder')}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="workEmail" className="block text-sm font-medium">
              {t('work_email')}
            </label>
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder={t('work_email_placeholder')}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              {t('message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t('message_placeholder')}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : t('submit_button')}
            </button>
          </div>
        </form>
        {status === 'success' && <p className="mt-4 text-center text-green-500">Your message has been sent successfully!</p>}
        {status === 'error' && <p className="mt-4 text-center text-red-500">An error occurred. Please try again.</p>}
      </div>
    </div>
  );
}
