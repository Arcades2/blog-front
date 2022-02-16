import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import useStore from '../store';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useStore(
    (state) => [state.darkMode, state.setDarkMode],
    shallow,
  );

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <label htmlFor="dark-mode-toggle" className="flex gap-1 items-baseline">
        Dark mode
        <input
          id="dark-mode-toggle"
          type="checkbox"
          checked={darkMode}
          onChange={(e) => {
            setDarkMode(e.target.checked);
            localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
          }}
        />
      </label>
    </div>
  );
}

export default DarkModeToggle;
