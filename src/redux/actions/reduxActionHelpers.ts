import { Action, PayloadAction } from "@reduxjs/toolkit";

export const isPendingAction = (prefix: string) => {
  return (action: Action): action is PayloadAction<any> =>
    action.type.startsWith(prefix) && action.type.endsWith("/pending");
};

export const isFulfilledAction = (prefix: string) => {
  return (action: Action): action is PayloadAction<any> =>
    action.type.startsWith(prefix) && action.type.endsWith("/fulfilled");
};

export const isRejectedAction = (prefix: string) => {
  return (action: Action): action is PayloadAction<any> =>
    action.type.startsWith(prefix) && action.type.endsWith("/rejected");
};
