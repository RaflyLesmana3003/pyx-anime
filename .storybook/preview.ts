import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { theme } from '../src/theme/theme';

const preview: Preview = {
   parameters: {
      backgrounds: {
         default: 'default',
         values: [
            {
               name: 'default',
               value: '#F5FBFF',
            },
         ],
      },
      actions: { argTypesRegex: "^on[A-Z].*" },
      controls: {
         matchers: {
         color: /(background|color)$/i,
         date: /Date$/i,
         },
      },
   },
};

export default preview;


/* snipped for brevity */

export const decorators = [
   withThemeFromJSXProvider({
   themes: {
      light: theme,
      dark: theme,
   },
   defaultTheme: 'light',
   Provider: ThemeProvider,
   GlobalStyles: CssBaseline,
})];