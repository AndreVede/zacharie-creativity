import * as React from 'react';
import styled, { css } from 'styled-components';
import { flexCenter } from '../style-utils/styles-variables';

import * as Themes from '../style-utils/Themes';
import { ThemeContext } from '../templates/Layout';

const Container = styled.div`
    ${flexCenter('column')}
    gap: 4px;
    position: relative;

    & > span {
        font-size: 16px;
    }
`;

interface PickerProps {
    themeObj: Themes.Theme;
}

interface PickerItemProps {
    themeObj: Themes.Theme;
    themeKey: string;
    infoLabel?: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Picker = styled.div.attrs<PickerProps>((p: PickerProps) => ({
    themeObj: p.themeObj,
}))`
    ${flexCenter()}
    border-radius: 50%;
    height: 30px;
    width: 30px;
    border: 2px solid ${(p) => p.theme.colors.veryDark};
    background: linear-gradient(
        45deg,
        ${(p: PickerProps) => p.themeObj.colors.primary} 21%,
        ${(p: PickerProps) => p.themeObj.colors.secondary}
    );
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    position: relative;
`;

const InfoBulle = styled.span`
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 6px 15px;
    background: black;
    color: white;
    font-size: 13px;
    border-radius: 15px;
    box-shadow: inset -2px -5px 8px 0 rgba(255, 255, 255, 0.6);
`;

const Popup = styled.div`
    ${flexCenter('row')}
    gap: 8px;
    position: absolute;
    top: 120%;
    right: 90%;
    padding: 15px;
    background: ${(p) => p.theme.colors.dark};
    border-radius: 20px;
    box-shadow: 0 2px 0 3px rgba(0, 0, 0, 0.4);
`;

const getThemeList = () => {
    const tmpList = [];
    for (const themeKey in Themes) {
        tmpList.push({ key: themeKey, value: Themes[themeKey as keyof typeof Themes] });
    }
    return tmpList;
};

const PickerItem: React.FC<PickerItemProps> = ({ themeObj, themeKey, infoLabel, setTheme }) => {
    const [info, setInfo] = React.useState<boolean>(false);
    return (
        <Picker
            themeObj={themeObj}
            onMouseEnter={() => {
                setInfo(true);
            }}
            onMouseLeave={() => {
                setInfo(false);
            }}
            onClick={() => {
                setTheme(themeKey);
            }}
        >
            {infoLabel && info && <InfoBulle>{infoLabel}</InfoBulle>}
        </Picker>
    );
};

const ThemePicker: React.FC = () => {
    const [show, setShow] = React.useState(false);
    const { theme, setTheme } = React.useContext(ThemeContext);
    const ThemesList = getThemeList();
    return (
        <Container>
            <Picker
                themeObj={Themes[theme as keyof typeof Themes]}
                onClick={(e) => {
                    e.preventDefault();
                    setShow((i) => !i);
                }}
            >
                {show && (
                    <Popup>
                        {ThemesList.map((theme, i) => {
                            console.log(theme);
                            return (
                                <PickerItem
                                    key={theme.key + '-' + i + '-' + Date.now()}
                                    themeObj={theme.value}
                                    themeKey={theme.key}
                                    setTheme={setTheme}
                                    infoLabel={theme.value.name}
                                ></PickerItem>
                            );
                        })}
                    </Popup>
                )}
            </Picker>
            <span>{Themes[theme as keyof typeof Themes].name}</span>
        </Container>
    );
};

export default ThemePicker;
