import { createTheme } from '@mui/material/styles';

export interface ThemeOptions {
  palette: Palette;
  typography: Typography;
}
export interface Palette {
  type: string;
  primary: PrimaryOrSecondaryOrErrorOrSuccessOrInfo;
  secondary: PrimaryOrSecondaryOrErrorOrSuccessOrInfo;
  error: PrimaryOrSecondaryOrErrorOrSuccessOrInfo;
  success: PrimaryOrSecondaryOrErrorOrSuccessOrInfo;
  info: PrimaryOrSecondaryOrErrorOrSuccessOrInfo;
  text: Text;
}
export interface PrimaryOrSecondaryOrErrorOrSuccessOrInfo {
  main: string;
}
export interface Text {
  primary: string;
}
export interface Typography {
  fontFamily: string;
}

const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#4640de',
    },
    secondary: {
      main: '#333333',
    },
    error: {
      main: '#f23b50',
    },
    success: {
      main: '#2ed16c',
    },
    info: {
      main: '#4640de',
    },
    text: {
      primary: '#333333',
    },
  },
  typography: {
    fontFamily: 'Nunito',
  },
};

export const theme = createTheme(themeOptions);
