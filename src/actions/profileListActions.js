import { ADD_PROFILE_ITEM, DELETE_PROFILE_ITEM } from "../store/types/profileTypes";

export const addProfileItem = (text) => ({
    type: ADD_PROFILE_ITEM,
    payload: text
});

export const deleteProfileItem = (id) => ({
    type: DELETE_PROFILE_ITEM,
    payload: id
});
