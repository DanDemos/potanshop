import { store } from "../redux/store/configureStore";
import type { AppDispatch } from "../redux/store/configureStore";

export const dispatchStore = (data: Parameters<AppDispatch>[0]): void => {
  store.dispatch(data);
};
