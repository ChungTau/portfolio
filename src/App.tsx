import { useEffect, useMemo, useState } from 'react';
import { CssBaseline, PaletteMode, ThemeProvider, useMediaQuery} from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ColorModeContext } from './contexts/ColorModeContext';
import theme from './theme';
import { colorModeTag, dark, light } from './utils/constants/palette';
import { routes } from './utils/constants/routes';
import ImageContext from './contexts/ImageContext';
import image from "./assets/bgImage.jpg";

const rootRoutes = Object.values(routes);

function App() { 
  const localStoredMode = localStorage.getItem(colorModeTag);
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${dark})`);
  const initialMode = localStoredMode ? JSON.parse(localStoredMode) : prefersDarkMode ? dark : light;
  const [mode, setMode] = useState(initialMode);
  const darkTheme = useMemo(() => theme(mode), [mode]);
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode: PaletteMode) => (prevMode === light ? dark : light));
    },
  }), [mode]);

  useEffect(() => {
    localStorage.setItem(colorModeTag, JSON.stringify(mode));
  }, [mode]);

  const [loadedImage, setLoadedImage] = useState<HTMLImageElement|null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoadedImage(img);
    img.src = image;
  }, []);


  return(
    <ColorModeContext.Provider value={colorMode}>
      <ImageContext.Provider value={loadedImage}>
      <ThemeProvider theme={theme(dark)}> {/**. */}
        <CssBaseline/>
          <BrowserRouter>
            <AnimatePresence>
              <Routes>
                {rootRoutes.map((route) => (<Route key={route.name} path={route.path} element={(route.component)?<route.component/>:(route.to)?<Navigate to={route.to}/>:null}/>))}
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
      </ThemeProvider>
      </ImageContext.Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
