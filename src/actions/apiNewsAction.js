import { ADD_API_NEWS } from "../store/types/apiNewsType";
import { setError } from "./errorAction";
import { setLoaderSpinner } from "./loaderSpinnerAction";

export const addApiNews = (obj) => ({
    type: ADD_API_NEWS,
    payload: obj
});

export const getApiNews = (theme) => (dispatch) => {
    dispatch(setLoaderSpinner(true));
    fetch(`https://inshortsapi.vercel.app/news?category=${theme}`)
        .then(response => response.json())
        .then(data => {
            dispatch(addApiNews(data.data));
            dispatch(setLoaderSpinner(false));
        })
        .catch(err => {
            dispatch(addApiNews([]));
            dispatch(setError(err));
            dispatch(setLoaderSpinner(false));
        });
};
