import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface TSwitchedThemeInitialState {
  theme: TSwitchedTheme;
}

export type TSwitchedTheme = "dark" | "light";

export interface ISwitchedUIProps
  extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  variant?: "squere" | "circle";
  classname?: string;
  textInner?: {
    textLeft?: string;
    textRight?: string;
  };
}

export interface IButtonThemeUIProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
  theme?: TSwitchedTheme;
  size?: string;
}

export interface TLocaleTranslateInitialState {
  locale: TLocaleTranslate;
}

export interface ISwithedLocaleTranslateUIProps {
  locale: TLocaleTranslate;
  setLocale: (locale: TLocaleTranslate) => void;
  toggleLocale?: () => void;
  classname?: string;
}

export type TLocaleTranslate = "Ru" | "En";
