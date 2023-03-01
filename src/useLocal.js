import { useState, useEffect } from "react";

export function getLocal(key, iniValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || iniValue;
}

export const useLocal = (key, iniValue) => {
  const [value, setValue] = useState(() => {
    return getLocal(key, iniValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
