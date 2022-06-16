import {
  loginFailure,
  loginStart,
  loginSuccess,
  logOutUser,
} from "./userRedux";
import { logOutCart } from "./cartRedux";
import { logOutWishList } from "./wishListRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  // console.log("inAPIcalls");
  try {
    // console.log("trying in APICALL: + " + logOut);
    dispatch(logOutUser());
    dispatch(logOutCart());
    dispatch(logOutWishList());
  } catch (err) {
    console.log(err);
  }
};
