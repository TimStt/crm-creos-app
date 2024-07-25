import cls from "classnames";
import { useModalActions } from "@/shared/hooks/use-modal-actions";
import {
  selectModalMenuState,
  setStateModalMenu,
} from "@/shared/stores/menu-mobile";
import { ModalMotion } from "@/shared/ui/modal-motion";
import style from "./modal-menu-mobile.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { SwithedLocale } from "@/shared/ui/swithed-locale";
import { selectorLocale, setLocale } from "@/shared/stores/locale-translate";

import { TLocaleTranslate } from "@/shared/types/swithed/types";
import { NavMenu } from "../nav-menu";
import { localeTranslate } from "@/shared/config/locale-translate";

const NavMenuMobile = () => {
  const isOpenModal = useSelector(selectModalMenuState);
  const locale = useSelector(selectorLocale);
  const { closeModal, refModal, refWrapper } = useModalActions(
    (state: boolean) => setStateModalMenu(state),
    isOpenModal
  );

  const { other } = localeTranslate[locale];

  const dispatch = useDispatch();

  return (
    <ModalMotion className={style.root} ref={refModal} state={isOpenModal}>
      <div className={style.root__wrapper} ref={refWrapper}>
        <header className={style.root__header}>
          <span className={style.root__title}>CRM Creos</span>
          <div className={style.root__buttons}>
            <button
              className={cls(style.root__close, "btn-reset")}
              onClick={closeModal}
              title={other.close_mobile_menu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="m10.94 12-5.95 5.94L6.05 19 12 13.06 17.94 19 19 17.94 13.06 12 19 6.05l-1.06-1.06L12 10.93 6.05 4.99 4.99 6.05 10.94 12Z"
                />
              </svg>
              <span className="visually-hidden">{other.close_mobile_menu}</span>
            </button>
            <SwithedLocale
              locale={locale}
              setLocale={(locale: TLocaleTranslate) =>
                dispatch(setLocale(locale))
              }
            />
          </div>
        </header>
        <NavMenu
          className={style.root__menu}
          locale={locale}
          onClickItem={closeModal}
        />
      </div>
    </ModalMotion>
  );
};

export default NavMenuMobile;
