import useSecretCode, { SecretCodeProps } from './useSecretCode';

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

const useKonamiCode = (): SecretCodeProps => {
    const [success, setSuccess] = useSecretCode(konamiCode);
    return [success, setSuccess];
};

export default useKonamiCode;
