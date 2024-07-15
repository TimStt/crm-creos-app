import { forwardRef, useId } from "react";
import style from "./button-theme.module.scss";
import { IButtonThemeUIProps } from "@/shared/types/swithed";
import cls from "classnames";

const ButtonTheme = forwardRef<HTMLButtonElement, IButtonThemeUIProps>(
  ({ size, classname, theme, ...props }, ref) => {
    const idRoot = useId();
    const idMoon = `moon-${idRoot}-mask`;

    return (
      <button
        className={cls(style.root, classname, "btn-reset")}
        id={idRoot}
        data-theme={theme}
        title="Переключить тему сайта"
        aria-label="auto"
        aria-live="polite"
        style={
          size ? ({ "--size": `${size}px` } as React.CSSProperties) : undefined
        }
        ref={ref}
        {...props}
      >
        <svg
          className={style.root__sun_and_moon}
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <mask className={style.root__moon} id={idMoon}>
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="black" />
          </mask>
          <circle
            className={style.root__sun}
            cx="12"
            cy="12"
            r="6"
            mask={`url(#${idMoon})`}
          />
          <g className={style.root__sun_beams}>
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
        <span className="visually-hidden">Переключить тему сайта</span>
      </button>
    );
  }
);

export default ButtonTheme;
