import { 
    useContext, 
    createContext,
    useState
} from "react";

import {
    ThemeStateContextTypes,
    ThemeProviderProps,
    ThemeProviderValuesTypes,
    TypesThemeResult
} from "../types";

import colors from "../styles/colors";

export const ThemeContext = createContext({} as ThemeProviderValuesTypes);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    let [ theme, setTheme ] = useState({} as ThemeStateContextTypes);

    function applyThemeResult(result: TypesThemeResult) {
        switch(result) {
            case "under-weight":
                setTheme({
                    backgroundInterface: colors.light.underWeight,
                    backgroundInputs: colors.dark.underWeight,
                    colorIconInputs: colors.light.underWeight,
                    colorPlaceholderInputs: colors.lightAlpha.underWeight,
                    colorText: colors.dark.underWeight
                });
                
                break;
            case "normal":
                setTheme({
                    backgroundInterface: colors.light.normal,
                    backgroundInputs: colors.dark.normal,
                    colorIconInputs: colors.light.normal,
                    colorPlaceholderInputs: colors.lightAlpha.normal,
                    colorText: colors.dark.normal
                });

                break;
            case "about-weight":
                setTheme({
                    backgroundInterface: colors.light.aboutWeight,
                    backgroundInputs: colors.dark.aboutWeight,
                    colorIconInputs: colors.light.aboutWeight,
                    colorPlaceholderInputs: colors.lightAlpha.aboutWeight,
                    colorText: colors.dark.aboutWeight
                });

                break;
            case "obesity":
                setTheme({
                    backgroundInterface: colors.light.obesity,
                    backgroundInputs: colors.dark.obesity,
                    colorIconInputs: colors.light.obesity,
                    colorPlaceholderInputs: colors.lightAlpha.obesity,
                    colorText: colors.dark.obesity
                });

                break;
            case "severe-obesity":
                setTheme({
                    backgroundInterface: colors.light.severeObesity,
                    backgroundInputs: colors.dark.severeObesity,
                    colorIconInputs: colors.light.severeObesity,
                    colorPlaceholderInputs: colors.lightAlpha.severeObesity,
                    colorText: colors.dark.severeObesity
                });

                break;
            default:
                setTheme({
                    backgroundInterface: colors.extra.grayDark,
                    backgroundInputs: colors.extra.gray,
                    colorIconInputs: colors.extra.black,
                    colorPlaceholderInputs: colors.extra.black,
                    colorText: colors.extra.grayDark
                });
        }
    }

    return (
        <ThemeContext.Provider 
            value={{ 
                theme, 
                setTheme,
                applyThemeResult
            } as ThemeProviderValuesTypes}
        >
            { children }
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);