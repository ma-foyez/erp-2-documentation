import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleToggleSidebarMenu } from '../../_globalRedux/Action/GlobalAction';

const SidebarMenu = () => {
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.GlobalReducer);
    
    useEffect(() => {
        dispatch(handleToggleSidebarMenu())
    }, [dispatch]);


    return (
        <div className='sidebar-menu'>
           
        </div>
    );
};

export default SidebarMenu;