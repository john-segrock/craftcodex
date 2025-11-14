'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const ContactPage = () => {
  const t = useTranslations('ContactPage');
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, workEmail, message }),
    });

    if (response.ok) {
      setSuccessMessage('Your message has been sent successfully!');
      setFullName('');
      setWorkEmail('');
      setMessage('');
    }
  };

  return (
    <div className="container mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-500">{t('subtitle')}</p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight">{t('form_title')}</h2>
          {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium leading-6">{t('full_name')}</label>
                <div className="mt-2">
                  <input type="text" name="full-name" id="full-name" placeholder={t('full_name_placeholder')} value={fullName} onChange={(e) => setFullName(e.target.value)} className="block w-full rounded-lg border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-gray-50 dark:bg-gray-700" />
                </div>
              </div>
              <div>
                <label htmlFor="work-email" className="block text-sm font-medium leading-6">{t('work_email')}</label>
                <div className="mt-2">
                  <input type="email" name="work-email" id="work-email" placeholder={t('work_email_placeholder')} value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} className="block w-full rounded-lg border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-gray-50 dark:bg-gray-700" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6">{t('message')}</label>
              <div className="mt-2">
                <textarea name="message" id="message" rows={4} placeholder={t('message_placeholder')} value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full rounded-lg border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-gray-50 dark:bg-gray-700"></textarea>
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-lg bg-blue-500 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">{t('submit_button')}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
