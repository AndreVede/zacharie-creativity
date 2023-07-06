import useSecretCode from './useSecretCode';

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
    const success = useSecretCode(konamiCode);
    return success;
};

export default useKonamiCode;
