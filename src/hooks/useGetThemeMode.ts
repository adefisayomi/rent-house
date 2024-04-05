import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const useGetThemeMode = () => {

    const {theme} = useTheme()
    const [themeMode, setThemeMode] = useState(theme as 'dark' | 'light' | 'system');
    const handleGetTheme = () => {
      if (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return setThemeMode('dark')
      }
      if (theme === 'system' && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return setThemeMode('light')
      }
      else return setThemeMode(theme as 'dark' | 'light' | 'system')
    }
  
    useEffect(() => {
      handleGetTheme()
    }, [theme]);
  
    return themeMode;
  };

export default useGetThemeMode;