import { useContext } from "react";
import { ContextTheme } from "../../context/Theme";

export function useTheme() {
    return useContext(ContextTheme);
}