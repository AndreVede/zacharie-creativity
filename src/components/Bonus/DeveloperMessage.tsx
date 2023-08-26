import * as React from 'react';
import useKonamiCode from '../../hooks/SecretCode/useKonamiCode';
import styled, { css } from 'styled-components';
import { flexCenter } from '../../style-utils/styles-variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import color from 'color';

interface MessageContainerProps {
    readonly time: number;
    readonly onoffpop: boolean;
}

const MessageContainer = styled.div.attrs<MessageContainerProps>((p) => ({
    time: p.time,
    onoffpop: p.onoffpop || false,
}))`
    ${flexCenter()}
    background: rgb(255 255 255 / 0.3);
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 30px;
    backdrop-filter: blur(20px);
    z-index: 999;
    padding: 30px 40px;
    transition: all ${(p: MessageContainerProps) => p.time}ms ease-in;
    ${(p: MessageContainerProps) => {
        if (p.onoffpop) {
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
    & .title {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        align-content: center;
        flex-direction: row;
    }
`;

interface CrossProps {
    iconsize?: number;
}

const CrossButton = styled.button`
    ${flexCenter()}
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: ${(p) => color(p.theme.colors.background, 'hex').alpha(0.6).hsl().string()};
    backdrop-filter: blur(10px);
    padding: 10px;
`;
const CrossIcon = styled(FontAwesomeIcon).attrs<CrossProps>((p: CrossProps) => ({
    iconsize: p.iconsize || 50,
}))`
    width: ${(p: CrossProps) => p.iconsize}px;
    height: ${(p: CrossProps) => p.iconsize}px;
    color: ${(p) => p.theme.colors.primary};
`;

const DeveloperMessage: React.FC = () => {
    const [onOff, setOnOff] = React.useState<boolean>(false);
    const [code, setBooleanCode] = useKonamiCode();

    const crossSize = 20;

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
                <MessageContainer
                    time={timePop}
                    onoffpop={onOff}
                    onTransitionEnd={() => {
                        if (!onOff) {
                            setBooleanCode((i) => !i);
                        }
                    }}
                >
                    <div className="title">
                        <h2>Ceci est un petit message de la part du développeur de ce site</h2>
                        <CrossButton
                            onClick={() => {
                                setOnOff(false);
                            }}
                        >
                            <CrossIcon icon={faXmark} iconsize={crossSize} />
                        </CrossButton>
                    </div>
                    <p>Vous avez été assez malin pour taper le konami code. Bravo !!! 👏</p>
                    <p>Ce site est codé en Gatsby React TS. Je me suis amusé à le créer.</p>
                    <p>Bonne Navigation</p>
                </MessageContainer>
            )}
        </>
    );
};

export default DeveloperMessage;
