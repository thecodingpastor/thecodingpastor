export interface ToastType {
  id: string;
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  close?: () => void;
}

export interface UISliceProps {
  toastArray: ToastType[];
  setToast: (toast: ToastType) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
  clearAllToasts: () => void;
  removeToast: (id: string) => void;
}
