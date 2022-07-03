export const menuList = [
    {
        id: "01",
        menuName: "Getting Started",
        icon: "fa-brands fa-dashcube",
        link: "/getting-started"
    },
    {
        id: "02",
        menuName: "Menu - 2",
        icon: "fa-solid fa-satellite-dish",
        link: "/getting-started",
        subMenu: [
            {
                menuName: "Sub-Menu - 1",
                link: "/submenu-1",
            },
            {
                menuName: "Sub-Menu - 2",
                link: "/submenu-3",
            },
        ]
    },
    {
        id: "02",
        menuName: "Menu - 2",
        icon: "fa-solid fa-satellite-dish",
        link: "/getting-started",
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