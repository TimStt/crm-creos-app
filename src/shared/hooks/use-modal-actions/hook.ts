import { useCallback, useEffect, useRef } from "react";
import { useWatch } from "../useWatch";
import { useScrollHidden } from "../use-scroll-hidden";
import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export function useModalActions(
  handler: (state: boolean) => PayloadAction<boolean>,
  state: boolean
) {
  const refModal = useRef<HTMLDialogElement>(null);
  const refWrapper = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(handler(false));
    setTimeout(() => refModal.current?.close(), 500);
  }, [dispatch, handler]);

  useEffect(() => {
    !!state ? refModal.current?.showModal() : closeModal();
  }, [closeModal, dispatch, refModal, state]);

  useWatch(refWrapper, closeModal, state);

  useScrollHidden(state);

  return { closeModal, refModal, refWrapper };
}
