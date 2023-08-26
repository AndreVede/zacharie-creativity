import * as React from 'react';
import useInputEvent from './useInputEvent';

export type SecretCodeProps = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const useSecretCode = (secretCode: Array<string>): SecretCodeProps => {
    const [count, setCount] = React.useState<number>(0);
    const [success, setSuccess] = React.useState<boolean>(false);
    const key = useInputEvent();

    React.useEffect(() => {
        if (key === null) {
            return;
        }

        if (key.toLowerCase() !== secretCode[count].toLowerCase()) {
            setCount(0);
            return;
        }

        setCount((i) => {
            if (count + 1 === secretCode.length) {
                return i;
            } else {
                return i + 1;
            }
        });

        if (count + 1 === secretCode.length) {
            setSuccess(true);
            setCount(0);
            return;
        }
    }, [key]);

    return [success, setSuccess];
};

export default useSecretCode;
