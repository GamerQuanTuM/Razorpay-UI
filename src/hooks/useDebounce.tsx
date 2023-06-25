import { useEffect, useState } from "react";

function useDebounce<Type>(value: Type, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debouncedValue;
}

export default useDebounce;
