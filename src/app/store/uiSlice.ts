import { StateCreator } from "zustand";
import {
  ToastType,
  //   PackageSliceProps,
  //   WishlistSliceProps,
  //   CartSliceProps,
  UISliceProps,
} from "./types";

const createUISlice: StateCreator<UISliceProps, [], [], UISliceProps> = (
  set
) => ({
  typingPlayed: false,
  routeLoading: false,
  setRouteLoading(routeLoading) {
    set({ routeLoading });
  },
  toastArray: [
    // {
    //   id: "1",
    //   message: "This is a test message in the making of things",
    //   duration: 2000000000,
    //   type: "error",
    // },
    // {
    //   id: "2",
    //   message: "This is a test message in the making of things",
    //   duration: 2000000000,
    //   type: "success",
    // },
  ],
  setToast(toast) {
    set((state) => {
      // This prevents duplicate error messages
      if (!state.toastArray.find((prev) => prev.message === toast.message)) {
        if (state.toastArray.length >= 5) {
          // This ensures toastArray is not more than 5
          return { toastArray: [toast, ...state.toastArray.splice(0, 4)] };
        }
        return { toastArray: [toast, ...state.toastArray] };
      }
      return state;
    });
  },
  clearAllToasts: () => {
    set({ toastArray: [] });
  },
  removeToast: (id: string) => {
    set((state) => ({
      toastArray: state.toastArray.filter((not: ToastType) => id !== not.id),
    }));
  },
  setTypingPlayed: (bool) => {
    set({ typingPlayed: bool });
  },
  modalIsOpen: false,
  setModalIsOpen(isOpen) {
    set({ modalIsOpen: isOpen });
  },
});

export default createUISlice;
