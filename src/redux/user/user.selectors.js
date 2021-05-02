import { createSelector } from "reselect";

// get the whole reducer state as input
const selectUser = (state) => state.user;
const selectCart = (state) => state.cart;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
