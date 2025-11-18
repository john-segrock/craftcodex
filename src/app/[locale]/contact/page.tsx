'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function QuotePage() {
  const t = useTranslations('QuotePage');
  const [formData, setFormData] = useState({
    requestType: 'quote',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        // Reset form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="container mx-auto px-4 py-20 text-foreground">
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{t('title')}</h1>
            <p className="mt-6 text-lg text-secondary">{t('subtitle')}</p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form fields */}
                    <div>
                        <label className="block text-sm font-medium mb-2">{t('requestType.label')}</label>
                        <div className="flex gap-4">
                            <label><input type="radio" name="requestType" value="quote" checked={formData.requestType === 'quote'} onChange={handleChange} /> {t('requestType.quote')}</label>
                            <label><input type="radio" name="requestType" value="meeting" checked={formData.requestType === 'meeting'} onChange={handleChange} /> {t('requestType.meeting')}</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="projectType">{t('projectType.label')}</label>
                        <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="mt-1 block w-full rounded-md bg-background border-border" required>
                            <option value="">{t('projectType.placeholder')}</option>
                            <option value="webapp">{t('projectType.webapp')}</option>
                            <option value="mobileapp">{t('projectType.mobileapp')}</option>
                            <option value="custom">{t('projectType.custom')}</option>
                            <option value="other">{t('projectType.other')}</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="budget">{t('budget.label')}</label>
                        <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="mt-1 block w-full rounded-md bg-background border-border">
                            <option value="">{t('budget.placeholder')}</option>
                            <option value="<20k">{t('budget.o1')}</option>
                            <option value="20k-50k">{t('budget.o2')}</option>
                            <option value="50k-100k">{t('budget.o3')}</option>
                            <option value="100k+">{t('budget.o4')}</option>
                            <option value="unknown">{t('budget.o5')}</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="timeline">{t('timeline.label')}</label>
                        <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="mt-1 block w-full rounded-md bg-background border-border">
                            <option value="">{t('timeline.placeholder')}</option>
                            <option value="asap">{t('timeline.o1')}</option>
                            <option value="1-3m">{t('timeline.o2')}</option>
                            <option value="3m+">{t('timeline.o3')}</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="description">{t('description.label')}</label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={5} className="mt-1 block w-full rounded-md bg-background border-border" required></textarea>
                    </div>

                    <hr className="border-border" />

                    <div>
                        <label htmlFor="name">{t('name.label')}</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md bg-background border-border" required />
                    </div>

                    <div>
                        <label htmlFor="email">{t('email.label')}</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md bg-background border-border" required />
                    </div>

                    <div>
                        <label htmlFor="company">{t('company.label')}</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full rounded-md bg-background border-border" />
                    </div>

                    <div>
                        <label htmlFor="phone">{t('phone.label')}</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md bg-background border-border" />
                    </div>

                    <div className="text-center">
                        <button type="submit" disabled={status === 'sending'} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg w-full">
                            {status === 'sending' ? t('sending') : t('submit')}
                        </button>
                    </div>

                </form>
                {status === 'success' && <p className="mt-4 text-center text-green-500">{t('success')}</p>}
                {status === 'error' && <p className="mt-4 text-center text-red-500">{t('error')}</p>}
                <p className="mt-4 text-center text-sm text-secondary">{t('disclaimer')}</p>
            </div>
        </div>
    </main>
  );
}
