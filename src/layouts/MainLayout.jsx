import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { handleToggleDashSidebar } from '../_redux/Action/DashboardAction';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ children, title = null }) => {

    // const dispatch = useDispatch();
    // const { isToggle } = useSelector((state) => state.DashboardReducer);

    document.title = (title !== null && title !== undefined) ? `${title} || ERP-2` : `ERP-2`;

    // useEffect(() => {
    //     dispatch(handleToggleDashSidebar())
    // }, [dispatch]);

    return (
        <React.Fragment>
            <h2>This is dashboard</h2>

            {
                children
            }
        </React.Fragment>
    );
};

export default MainLayout;