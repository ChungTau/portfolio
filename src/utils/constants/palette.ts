import { PaletteMode, PaletteOptions } from "@mui/material";

export const dark: PaletteMode = 'dark';
export const light: PaletteMode = 'light';
export const colorModeTag = 'color-mode';

export const darkMode : PaletteOptions = {
    primary: {
        main: 'rgba(150, 97, 242,1)',
        light:  'rgba(150, 97, 242,0.8)',
    },
    secondary: {
        main: 'rgba(18,18,18,1)',
        light: 'rgba(54,54,54,1)',
    },
};

export const lightMode : PaletteOptions = {
    primary: {
        main: 'rgba(80,59,250,1)',
        light:  'rgba(80,59,250,0.8)',
    },
    secondary: {
        main: 'rgba(243,246,253,1)',
        light: 'rgba(255,255,255,1)',
        dark: 'rgba(169, 170, 171,1)'
    },
};