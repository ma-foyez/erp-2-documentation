import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleToggleSidebarMenu } from '../../_globalRedux/Action/GlobalAction';
import SidebarHeader from './SidebarHeader';

const SidebarMenu = () => {
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.GlobalReducer);

    useEffect(() => {
        dispatch(handleToggleSidebarMenu())
    }, [dispatch]);


    return (
        <div className='sidebar_menu'>
            <div className="sidebar_toggle" onClick={() => dispatch(handleToggleSidebarMenu(!isToggle))}>
                <i class={isToggle === false ? "fa-solid fa-chevron-left" : "fa-solid fa-chevron-right"}></i>
            </div>
            <SidebarHeader isToggle={isToggle} />
        </div>
    );
};

export default SidebarMenu;