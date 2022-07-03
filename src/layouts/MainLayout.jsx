import React, { useEffect } from 'react';
import Footer from '../components/layoutComponents/Footer';
import Header from '../components/layoutComponents/Header';
import SidebarMenu from '../components/layoutComponents/SidebarMenu';
import { useDispatch, useSelector } from 'react-redux';
import { handleToggleSidebarMenu } from '../_globalRedux/Action/GlobalAction';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ children, title = null }) => {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.GlobalReducer);
    document.title = (title !== null && title !== undefined) ? `${title} || ERP-2` : `ERP-2`;

    useEffect(() => {
        dispatch(handleToggleSidebarMenu())
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className="main_layout">
                <div className={isToggle === false ? "layout_sidebar toggle_sidebar" : "layout_sidebar"}>
                    <SidebarMenu />
                </div>
                <div className={isToggle === false ? "layout_container toggle_container" : "layout_container"}>
                    <div className="layout_header">
                        <Header />
                    </div>
                    <div className="layout_content">
                        {
                            children
                        }
                    </div>
                    <div className="layout_footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainLayout;