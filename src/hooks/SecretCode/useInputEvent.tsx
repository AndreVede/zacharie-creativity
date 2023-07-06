import * as React from 'react';

const useInputEvent = () => {
    const [key, setKey] = React.useState<string | null>(null);

    const keydownHandler = (ev: KeyboardEvent) => setKey(ev.key);

    const keyupHandler = () => setKey(null);

    React.useEffect(() => {
        global.addEventListener('keydown', keydownHandler);
        global.addEventListener('keyup', keyupHandler);

        return () => {
            global.removeEventListener('keydown', keydownHandler);
            global.removeEventListener('keyup', keyupHandler);
        };
    }, []);
    return key;
};

export default useInputEvent;
