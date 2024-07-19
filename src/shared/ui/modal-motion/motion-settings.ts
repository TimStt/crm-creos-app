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
