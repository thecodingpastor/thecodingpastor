export type MenuMode =
  | "x-enter"
  | "x-leave"
  | "hamburger-enter"
  | "hamburger-leave";

export type HamburgerContainerProps = {
  IsOpen: boolean;
  onClick: () => void;
  animate: MenuMode;
  setAnimate: React.Dispatch<React.SetStateAction<MenuMode>>;
};
