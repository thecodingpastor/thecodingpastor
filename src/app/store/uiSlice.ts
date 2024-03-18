import { StateCreator } from "zustand";
import {
  ToastType,
  //   PackageSliceProps,
  //   WishlistSliceProps,
  //   CartSliceProps,
  UISliceProps,
} from "./types";

const createUISlice: StateCreator<
  UISliceProps,
  [],
  [],
  UISliceProps
  //   PackageSliceProps & WishlistSliceProps & CartSliceProps & UISliceProps,
  //   [],
  //   [],
  //   UISliceProps
> = (set) => ({
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
      if (state.toastArray.length >= 5) {
        // This ensures toastArray is not more than 5
        return { toastArray: [toast, ...state.toastArray.splice(0, 4)] };
      }
      return { toastArray: [toast, ...state.toastArray] };
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
  modalIsOpen: false,
  setModalIsOpen(isOpen) {
    set({ modalIsOpen: isOpen });
  },
});

export default createUISlice;
