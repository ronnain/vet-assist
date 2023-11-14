const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets:[require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      minHeight: {
        actionBarre: "var(--top-menu-bar-height)",
        messagesContainer: "var(--messages-container-height)"
      },
      maxHeight: {
        messagesContainer: "var(--messages-container-height)"
      },
      maxWidth: {
        xxs: "17rem",
      },
      height: {
        messagesContainer: "var(--messages-container-height)"
      },
      boxShadow: {
        error: '0 0 3pt 2pt var(--error)'
      },
      colors: {
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        primary: {
          DEFAULT: '#5F9196',
          foreground: 'white',
          shade: {
            50:  '#eff4f5',
            100: '#cdddde',
            200: '#b5cccf',
            300: '#94b5b9',
            400: '#7fa7ab',
            500: '#5f9196',
            600: '#568489',
            700: '#43676b',
            800: '#345053',
            900: '#283d3f',
          },
        },
        grey: {
          DEFAULT: '#F1F1F1',
          foreground: 'black',
        }
    },
    fontSize: {
      'xxs': '.65rem',
    }
  },
  },
  plugins: [],
};
