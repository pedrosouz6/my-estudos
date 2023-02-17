import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            
            background: string,
            color: string,

            borderColor: string,

            header: string,
            bottomHeader: string,

            success: string,
            info: string,
            warning: string
        }
    }
}