import { CHANGE_CHECK_MAILING } from "../store/types/checkMailingType";

export const changeCheckMailing = (value) => ({
    type: CHANGE_CHECK_MAILING,
    payload: value
});
