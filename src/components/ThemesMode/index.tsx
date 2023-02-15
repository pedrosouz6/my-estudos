import { useState } from 'react';

import light from '../../style/theme/light';
import dark from '../../style/theme/dark';
import { useTheme } from '../../hooks/Theme'; 

import { 
    MdLightMode,
    MdNightlight
} from 'react-icons/md';

import { IoMdArrowDropup } from 'react-icons/io';

import { 
    ContainerThemesMode,
    DropDownThemesMode,
    ButtonDropDownThemesMode,
    ArrowThemesMode
} from "./style";
import { ThemeType } from '../../context/Theme';

export function ThemesMode() {

    const { ToggleTheme } = useTheme();

    const [ isRenderingDropDownThemesMode, setIsRenderingDropDownThemesMode ] = useState<boolean>(false);

    function ToggleDropDownThemesMode() {
        setIsRenderingDropDownThemesMode(!isRenderingDropDownThemesMode);
    }

    function ToggleDropDownThemesModeAndTheme(theme: ThemeType) {
        ToggleTheme(theme)
        setIsRenderingDropDownThemesMode(false);
    }

    return (
        <ContainerThemesMode>

            <ButtonDropDownThemesMode>
                <button onClick={() => ToggleDropDownThemesMode()}><MdLightMode /></button>
            </ButtonDropDownThemesMode>

            { isRenderingDropDownThemesMode && 
                <DropDownThemesMode>
                    <li><button onClick={() => ToggleDropDownThemesModeAndTheme(light)}><MdLightMode /> Claro</button></li>
                    <li><button onClick={() => ToggleDropDownThemesModeAndTheme(dark)}><MdNightlight /> Escuro</button></li>
                </DropDownThemesMode>
            }

            { isRenderingDropDownThemesMode &&
                <ArrowThemesMode>
                    <IoMdArrowDropup />
                </ArrowThemesMode>
            }

        </ContainerThemesMode>
    )
}