export const menuList = [
    {
        id: "01",
        menuName: "Getting Started",
        icon: "fa-brands fa-dashcube",
        link: "/getting-started"
    },
    {
        id: "02",
        menuName: "Inventory",
        icon: "fa-solid fa-satellite-dish",
        link: "/module/inventory-management",
        subMenu: [
            {
                menuName: "Department",
                link: "/module/inventory-management/department",
                subSubMenu: [
                    {
                        menuName: "Department Entry",
                        link: "/module/inventory-management/department-entry",
                    },
                    {
                        menuName: "Department Item Received",
                        link: "/module/inventory-management/department-item-received",
                    },
                    {
                        menuName: "Department Requisition List",
                        link: "/module/inventory-management/department-requisition-list",
                    },
                    {
                        menuName: "Department Received",
                        link: "/module/inventory-management/department-received",
                    },
                    {
                        menuName: "Department Requisition",
                        link: "/module/inventory-management/department-requisition",
                    },

                ]
            },
        ]

    },
    {
        id: "03",
        menuName: "HRM Management",
        icon: "fa-solid fa-satellite-dish",
        link: "/module/hrm-management",
        subMenu: [
            {
                menuName: "Sub-Menu - 1",
                link: "/submenu-1",
                subSubMenu: [
                    {
                        menuName: "Sub-Sub-Menu -1",
                        link: "/sub-submenu-31",
                    },
                    {
                        menuName: "Sub-Sub-Menu - 2",
                        link: "/sub-submenu-2",
                    }
                ]
            },
            {
                menuName: "Sub-Menu - 2",
                link: "/submenu-3",
            },
        ]
    },
]