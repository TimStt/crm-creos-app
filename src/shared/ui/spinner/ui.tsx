import style from "./spinner.module.scss";
import cls from "classnames";

export interface ISpinnerProps {
  size: number;

  strokeWidth?: number;
  className?: string;
}

const Spinner = ({
  size,

  strokeWidth = 6,
  className,
}: ISpinnerProps) => {
  const radius = size / 2;
  const center = radius;

  return (
    <svg
      className={cls(style.root, className)}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="transparent"
    >
      <circle
        className={style.root__path}
        stroke="inherit"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        cx={center}
        cy={center}
        r={radius}
      ></circle>
    </svg>
  );
};

export default Spinner;
