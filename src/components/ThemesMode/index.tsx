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

export function ThemesMode() {

    const { ToggleTheme } = useTheme();

    const [ isRenderingDropDownThemesMode, setIsRenderingDropDownThemesMode ] = useState<boolean>(false);

    function ToggleDropDownThemesMode() {
        setIsRenderingDropDownThemesMode(!isRenderingDropDownThemesMode);
    }

    return (
        <ContainerThemesMode>

            <ButtonDropDownThemesMode>
                <button onClick={() => ToggleDropDownThemesMode()}><MdLightMode /></button>
            </ButtonDropDownThemesMode>

            { isRenderingDropDownThemesMode && 
                <DropDownThemesMode>
                    <li><button onClick={() => ToggleTheme(light)}><MdLightMode /> Claro</button></li>
                    <li><button onClick={() => ToggleTheme(dark)}><MdNightlight /> Escuro</button></li>
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