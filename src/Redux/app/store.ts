import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserAuth from "../features/UserAuthSlice";


export const store = configureStore({
  reducer: {
    UserAuth: UserAuth,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
