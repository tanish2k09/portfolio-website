import { DarkModeProvider } from "../contexts/DarkModeContext";

export const ThemeContainer = (props) => {
    return (
        <DarkModeProvider>
            {props.children}
        </DarkModeProvider>
    )
};
