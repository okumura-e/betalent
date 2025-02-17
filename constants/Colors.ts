/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  primaryColors: {
    bluePrimary: '#0500FF',
    blue10: '#E6F2FF',
  },
  secondaryColors: {
    blackNeutral: '#1C1C1C',
    gray20Neutral: '#9E9E9E',
    gray10Neutral: '#DFDFDF',
    gray07Neutral: '#F5F5F5',
    gray05Neutral: '#F4F4F4',
    gray00Neutral: '#F8F8F8',
    whiteNeutral: '#FFFFFF',
  }
};
