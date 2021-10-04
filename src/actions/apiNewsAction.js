import { ADD_API_NEWS } from "../store/types/apiNewsType";
import { setError } from "./errorAction";

export const addApiNews = (obj) => ({
    type: ADD_API_NEWS,
    payload: obj
});

export const getApiNews = (theme) => (dispatch) => {
    fetch(`https://inshortsapi.vercel.app/news?category=${theme}`)
        .then(response => response.json())
        .then(data => {
            dispatch(addApiNews(data.data));
        })
        .catch(err => {
            dispatch(addApiNews([]));
            dispatch(setError(err))
        });
};
