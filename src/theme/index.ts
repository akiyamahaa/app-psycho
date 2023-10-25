import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const newColorTheme = {
  primary: {
    600: "#0891B2",
  },
};

const appTheme = extendTheme({
  colors: newColorTheme,
  fontConfig: {
  
    },
 
});

export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
