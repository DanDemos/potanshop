import { store } from "../redux/store/configureStore";

export const selectStore = (name: string) => store.getState()[name];
