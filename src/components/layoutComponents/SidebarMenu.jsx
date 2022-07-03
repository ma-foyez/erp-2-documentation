import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuList } from '../../assets/data/SidebarMenuList';
import { handleToggleSidebarMenu } from '../../_globalRedux/Action/GlobalAction';
import SidebarHeader from './SidebarHeader';
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.GlobalReducer);

    useEffect(() => {
        dispatch(handleToggleSidebarMenu())
    }, [dispatch]);


    const [subMenuToggle, setSubMenuToggle] = useState(false)
    const [subSubMenuToggle, setSubSubMenuToggle] = useState(false)

    return (
        <div className='sidebar_menu'>
            <div className="sidebar_toggle" onClick={() => dispatch(handleToggleSidebarMenu(!isToggle))}>
                <i class={isToggle === false ? "fa-solid fa-chevron-left" : "fa-solid fa-chevron-right"}></i>
            </div>
            <SidebarHeader isToggle={isToggle} />
            <div className="menu-list">
                <ul>
                    {
                        menuList && menuList.length > 0 && menuList.map((menu, index) => (
                            (menu.subMenu && menu.subMenu.length > 0) ?
                                <li className='menu_item' key={index + 1}>
                                    <div className="d-flex justify-content-between align-items-center" onClick={() => setSubMenuToggle(!subMenuToggle)}>
                                        <div>
                                            <span><i class={menu.icon}></i></span>
                                            {menu.menuName}
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <ul
                                        className={subMenuToggle === true ? "sub_menu_list_open" : "sub_menu_list"}
                                    >
                                        {
                                            menu.subMenu.map((subMenu1, index1) => (
                                                (subMenu1.subSubMenu && subMenu1.subSubMenu.length > 0) ?
                                                    <li key={index1 + 2} className="subMenu_item menu_item">
                                                        <div className="d-flex justify-content-between align-items-center" onClick={() => setSubSubMenuToggle(!subSubMenuToggle)}>
                                                            <div>
                                                                {subMenu1.menuName}
                                                            </div>
                                                            <div>
                                                                <i class="fa-solid fa-angle-right"></i>
                                                            </div>
                                                        </div>
                                                        <ul className='sub_submenu_list'>
                                                            {
                                                                subMenu1.subSubMenu.map((submenu2, index2) => (
                                                                    <li key={index2 + 1} className="menu_item sub_submenu_item">{submenu2.menuName}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </li> :
                                                    <li className='menu_item subMenu_item'>{subMenu1.menuName}</li>
                                            ))
                                        }
                                    </ul>
                                </li> :
                                <li key={index + 1} className="menu_item">
                                    <NavLink to={menu.link} className={({ isActive }) =>
              isActive ? "navLink_active" : undefined
            }>
                                        <span><i class={menu.icon}></i></span> {menu.menuName}
                                    </NavLink>
                                </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default SidebarMenu;