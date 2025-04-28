import { useCallback } from "react";

export function useLocalStorage() {
  const get = useCallback((key) => {
    if (typeof window === "undefined") return null;

    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue === null) return null;

      try {
        return JSON.parse(storedValue);
      } catch {
        return storedValue;
      }
    } catch (error) {
      console.error(`Error getting key "${key}" from localStorage`, error);
      return null;
    }
  }, []);

  const set = useCallback((key, value) => {
    if (typeof window === "undefined") return;

    try {
      const valueToStore =
        typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error(`Error setting key "${key}" in localStorage`, error);
    }
  }, []);

  return { get, set };
}
