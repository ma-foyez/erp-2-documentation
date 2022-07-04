import React from 'react';
import MainLayout from '../layouts/MainLayout';
import inventory from "../assets/images/modules/Inventory Management Solution.png"
import HRM from "../assets/images/modules/HRM.png"
import UserManagement from "../assets/images/modules/user.jpg"
import documentManagement from "../assets/images/modules/document.jpg";
import { Link } from 'react-router-dom';

const moduleData = [
    {
        id: "2001",
        link: "/inventory-management",
        title: "Inventory Management System",
        img: inventory
    },
    {
        id: "2002",
        link: "/hrm-management",
        title: "HRM Management System",
        img: HRM
    },
    {
        id: "2003",
        link: "/user-management",
        title: "User Management System",
        img: UserManagement
    },
    {
        id: "2004",
        link: "/document-management",
        title: "Documents Management System",
        img: documentManagement
    },
]
const Home = () => {
    return (
        <MainLayout>
            <div className="content_inner">
                <h2 className='display-6 fw-bold'>Get started with ERP-2</h2>
                <p className='fw-semibold fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt fugiat cumque delectus porro reprehenderit eaque repudiandae, molestiae quibusdam, quia aperiam obcaecati ullam velit itaque laboriosam labore veritatis ut. Fugiat, facilis?</p>

                <div className="module_section">
                    <h2 className="fw-bold text-center text-uppercase">Modules</h2>
                    <div className="modules">
                        <div className="row justify-content-center">
                            {/* <Link to={`/module${moduleData[0].link}`} className="col-md-6 col-sm-6 col-12">
                                <div className="module_card">
                                    <div className={`module_card_1`}>
                                        <div className={`module_serial module-sl-1`}>01</div>
                                        <img src={moduleData[0].img} alt={moduleData[0].title} />
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/module${moduleData[1].link}`} className="col-md-6 col-sm-6 col-12">
                                <div className="module_card">
                                    <div className={`module_card_2`}>
                                        <div className={`module_serial module-sl-2`}>02</div>
                                        <img src={moduleData[1].img} alt={moduleData[1].title} />
                                    </div>
                                </div>
                            </Link> */}
                            {
                                moduleData.map((module, index) => (
                                    <Link to={`/module${module.link}`} className="col-md-6 col-sm-6 col-12" key={index + 1}>
                                        <div className="module_card">
                                            <div className={`module_card_${index + 1}`}>
                                                <div className={`module_serial module-sl-${index + 1}`}>0{index + 1}</div>
                                                <img src={module.img} alt={module.title} />
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;