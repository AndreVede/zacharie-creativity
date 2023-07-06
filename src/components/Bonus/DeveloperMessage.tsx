import * as React from 'react';
import useKonamiCode from '../../hooks/SecretCode/useKonamiCode';
import styled, { css } from 'styled-components';
import { flexCenter } from '../../style-utils/styles-variables';

interface MessageContainerProps {
    readonly time: number;
    readonly onOffPop: boolean;
}

const MessageContainer = styled.div.attrs<MessageContainerProps>((p) => ({
    time: p.time,
    onOffPop: p.onOffPop || false,
}))`
    ${flexCenter()}
    background: rgb(255 255 255 / 0.3);
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 30px;
    backdrop-filter: blur(20px);
    z-index: 999;
    padding: 30px 50px;
    transition: all ${(p: MessageContainerProps) => p.time}ms ease-in;
    ${(p: MessageContainerProps) => {
        if (p.onOffPop) {
            return css`
                opacity: 1;
                transform: translate(-50%, -50%);
            `;
        } else {
            return css`
                opacity: 0;
                transform: translate(-50%, -40%);
            `;
        }
    }}
`;

const DeveloperMessage: React.FC = () => {
    const [onOff, setOnOff] = React.useState<boolean>(false);
    const code = useKonamiCode();

    const timePop = 300; // ms

    const pop = React.useEffect(() => {
        if (code) {
            setTimeout(() => {
                setOnOff(true);
            }, 100);
        }
    }, [onOff, code]);

    return (
        <>
            {code && (
                <MessageContainer time={timePop} onOffPop={onOff}>
                    <h2>Ceci est un petit message de la part du développeur de ce site</h2>
                    <p>Vous avez été assez malin pour taper le konami code. Bravo !!! 👏</p>
                    <p>Ce site est codé en Gatsby React TS. Je me suis amusé à le créer.</p>
                    <p>Bonne Navigation</p>
                </MessageContainer>
            )}
        </>
    );
};

export default DeveloperMessage;
