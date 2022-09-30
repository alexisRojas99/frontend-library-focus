import { createLocalStorageManager, extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default theme;

export const manager = createLocalStorageManager("theme-mode");
