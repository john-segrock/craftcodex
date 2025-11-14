'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit absolute right-5 top-2 bg-slate-200 dark:bg-gray-500 px-4 py-2 rounded-lg`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeSwitcher;
