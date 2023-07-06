import * as React from 'react';
import useInputEvent from './useInputEvent';

const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
];

const useKonamiCode = () => {
    const [count, setCount] = React.useState<number>(0);
    const [success, setSuccess] = React.useState<boolean>(false);
    const key = useInputEvent();

    React.useEffect(() => {
        if (key === null) {
            return;
        }

        if (key.toLowerCase() !== konamiCode[count].toLowerCase()) {
            setCount(0);
            return;
        }

        setCount((i) => {
            if (count + 1 === konamiCode.length) {
                return i;
            } else {
                return i + 1;
            }
        });

        if (count + 1 === konamiCode.length) {
            setSuccess(true);
            return;
        }
    }, [key]);

    return success;
};

export default useKonamiCode;
