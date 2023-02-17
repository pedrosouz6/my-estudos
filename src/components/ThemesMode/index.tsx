import light from '../../style/theme/light';
import dark from '../../style/theme/dark';
import { useTheme } from '../../hooks/Theme'; 
import { ThemeType } from '../../context/Theme';

import { 
    ContainerThemesMode,
} from "./style";


export function ThemesMode() {

    const { ToggleTheme } = useTheme();

    function ToggleDropDownThemesModeAndTheme(nameTheme: string) {
        const theme: ThemeType = nameTheme === 'light' ? light : dark;
        ToggleTheme(theme)
    }

    return (
        <ContainerThemesMode>
            <label htmlFor="theme">Temas</label>
            <select id='theme' onChange={e => ToggleDropDownThemesModeAndTheme(e.target.value)}>
                <option value='light'>Claro</option>    
                <option value='dark'>Escuro</option>    
            </select>
        </ContainerThemesMode>
    )
}