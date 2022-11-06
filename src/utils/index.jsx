import { useEffect, useState } from "react";
export const isFlasy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const res = { ...object };
  Object.keys(res).forEach((key) => {
    const val = res[key];
    if (isFlasy(val)) {
      delete res[key];
    }
  });
  return res;
};
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedParam, setDebouncedParam] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedParam(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedParam;
};
