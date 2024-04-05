import { useState, useCallback, useLayoutEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export default function useLocalStorage<T>(key: string, defaultValue: T): UseLocalStorageReturnType<T> {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  });

  const updateValue: Dispatch<SetStateAction<T>> = useCallback((newValue: SetStateAction<T>) => {
    setValue((prevValue) => {
      const finalValue = typeof newValue === 'function' ? (newValue as (prevState: T) => T)(prevValue) : newValue;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(finalValue));
      }
      return finalValue;
    });
  }, [key]);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      if (storedValue !== JSON.stringify(value)) {
        setValue(storedValue ? JSON.parse(storedValue) : defaultValue);
      }
    }
  }, [key, value, defaultValue]);

  return [value, updateValue];
}
