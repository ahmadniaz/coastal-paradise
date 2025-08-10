import { createTheme } from '@mui/material/styles';
import { coastalColors } from './colors';
import { typography } from './typography';

export const coastalTheme = createTheme({
  palette: {
    primary: {
      main: coastalColors.primary[500],
      light: coastalColors.primary[300],
      dark: coastalColors.primary[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: coastalColors.secondary[500],
      light: coastalColors.secondary[300],
      dark: coastalColors.secondary[700],
      contrastText: '#ffffff',
    },
    background: {
      default: coastalColors.neutral[50],
      paper: '#ffffff',
    },
    text: {
      primary: coastalColors.neutral[900],
      secondary: coastalColors.neutral[600],
    },
  },
  typography: {
    fontFamily: typography.fontFamily.primary,
    h1: {
      fontFamily: typography.fontFamily.secondary,
      fontSize: typography.fontSizes['5xl'],
      fontWeight: typography.fontWeights.bold,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: typography.fontFamily.secondary,
      fontSize: typography.fontSizes['4xl'],
      fontWeight: typography.fontWeights.semibold,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: typography.fontFamily.secondary,
      fontSize: typography.fontSizes['3xl'],
      fontWeight: typography.fontWeights.semibold,
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSizes['2xl'],
      fontWeight: typography.fontWeights.medium,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSizes.xl,
      fontWeight: typography.fontWeights.medium,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSizes.lg,
      fontWeight: typography.fontWeights.medium,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: typography.fontSizes.base,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: typography.fontSizes.sm,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: typography.fontFamily.primary,
      fontWeight: typography.fontWeights.medium,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: typography.fontSizes.sm,
          fontWeight: typography.fontWeights.medium,
        },
        contained: {
          boxShadow: '0 4px 12px rgba(0, 188, 212, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0, 188, 212, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    // Add global styles for better CSS variable support
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'var(--font-poppins), sans-serif',
        },
      },
    },
  },
});

export { coastalColors, typography };
