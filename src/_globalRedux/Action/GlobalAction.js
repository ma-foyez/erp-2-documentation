import * as Types from "../types/Types";

/** */
export const handleToggleSidebarMenu = (isToggle = false) => async (dispatch) => {
    dispatch({ type: Types.TOGGLE_SIDEBAR_MENU, payload: isToggle });
}