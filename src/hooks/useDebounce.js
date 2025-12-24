import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    // Update value after delay
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    // Clear timer on value change
    return () => clearTimeout(timer);
  }, [value, delay]);

  // Return debounced value
  return debounced;
}
