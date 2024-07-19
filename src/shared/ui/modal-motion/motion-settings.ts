import { tr } from "@faker-js/faker";
import { animate } from "framer-motion";
import { transform } from "next/dist/build/swc";
import { init } from "next/dist/compiled/webpack/webpack";
import { exit } from "process";
import { start } from "repl";

export const motionSettingsVisibleDisplay = (
  state?: boolean,
  isOpenFlex?: boolean
) => {
  return {
    initial: { opacity: 0, display: "none", scale: 0.5 },
    animate: {
      opacity: state ? 1 : 0,
      display: state ? (isOpenFlex ? "flex" : "block") : "none",
      scale: state ? 1 : 0.5,
      transform: state ? " scale(1) " : " scale(0.5)",
    },
  };
};

// export const motionSettingsVisibleNoScaleDisplay = (state?: boolean) => {
//   return {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: state ? 1 : 0,
//     },
//     transition: { duration: "1s" },
//   };
// };

export const motionSettingsVisibleOpacity = {
  whileInView: { opacity: 1 },
  initial: { opacity: 0.2 },
  transition: { duration: 0.6 },
};

export const motionSettingsVisibleNoScaleDisplay = (key: string) => {
  return {
    key: key,
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: {
      opacity: 1,
    },
    transition: { duration: 0.3 },
  };
};
