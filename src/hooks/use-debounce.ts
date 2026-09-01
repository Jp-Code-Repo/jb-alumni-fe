import {useState, useEffect} from 'react';

export const useDebounce = <T = any> (value: T, delay = 500) => {
    const [debounce, setDebounce] = useState<T>(value);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebounce(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value, delay])

    return debounce;
}