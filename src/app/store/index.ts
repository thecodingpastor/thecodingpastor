import { create } from "zustand";

// import createPackageSlice from "./packageSlice";
// import createWishlistSlice from "./wishlistSlice";
// import createCartSlice from "./cartSlice";
// import createSharedSlice from "./sharedSlice";
import createUISlice from "./uiSlice";

import {
  //   CartSliceProps,
  //   PackageSliceProps,
  //   SharedSliceProps,
  //   WishlistSliceProps,
  UISliceProps,
} from "./types";

const useBoundStore = create<UISliceProps>()((...a) => ({
//   PackageSliceProps &
//     WishlistSliceProps &
//     SharedSliceProps &
//     CartSliceProps &
//     UISliceProps
  ...createUISlice(...a),
  //   ...createPackageSlice(...a),
  //   ...createWishlistSlice(...a),
  //   ...createCartSlice(...a),
  //   ...createSharedSlice(...a),
}));

export default useBoundStore;
