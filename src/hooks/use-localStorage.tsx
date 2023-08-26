import * as React from 'react';

function getStorageValue(key: string, defaultValue: string) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = saved ? JSON.parse(saved) : undefined;
    return initial ? initial : defaultValue;
}

type LocalStorageProps = [string, React.Dispatch<React.SetStateAction<string>>];

const useLocalStorage = (key: string, defaultValue: string): LocalStorageProps => {
    const [value, setValue] = React.useState<string>(() => {
        return getStorageValue(key, defaultValue);
    });

    React.useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
