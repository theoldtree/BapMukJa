import { createReducer } from "@reduxjs/toolkit";
import { updateInfo } from "./action";

export const reducer = createReducer(
  {},
  {
    [updateInfo]: (state, action) => {
      {
        userInfo: action.payload;
      }
    },
  }
);
