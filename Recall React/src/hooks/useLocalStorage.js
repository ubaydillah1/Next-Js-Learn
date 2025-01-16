/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function getSavedValue(key) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  return "";
}

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
