import { LOADING_ON } from "../store/types/loaderSpinnerType";

export const setLoaderSpinner = (value) => ({
    type: LOADING_ON,
    payload: value
});
