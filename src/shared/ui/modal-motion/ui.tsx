import { motion } from "framer-motion";
import { forwardRef } from "react";
import style from "./modal-motion.module.scss";

import cls from "classnames";
import { motionSettingsVisibleDisplay } from "./motion-settings";
import { IModelUI } from "@/shared/types/ui";

const ModalMotion = forwardRef<HTMLDialogElement, IModelUI>(
  ({ className, children, state, isOpenFlex }, ref) => {
    const styleAnimation = motionSettingsVisibleDisplay(
      state as boolean,
      isOpenFlex
    );
    return (
      <motion.dialog
        className={cls(style.root, className)}
        ref={ref}
        {...styleAnimation}
      >
        {children}
      </motion.dialog>
    );
  }
);

ModalMotion.displayName = "ModalMotion";

export default ModalMotion;
