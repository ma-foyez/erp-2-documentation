import React from 'react';
import { Dropdown } from 'react-bootstrap';
import user from "../../assets/images/common/USER.png"
import logo from "../../assets/images/common/omni-solution-logo.png"

const SidebarHeader = ({ isToggle }) => {
    return (
        <div className="sidebar_header_main">
            {
                isToggle === false ?
                    <div className='menu_header'>
                        <img src={user} alt="user photos" className='rounded-circle img-thumbnail' style={{ width: "50px" }} />
                        <h6 className='mt-2'>Omni Solutions Limited</h6>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic" style={{ color: "#ffff" }}>
                                Team OMNI
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/">Contacts</Dropdown.Item>
                                <Dropdown.Item href="#/">Mailbox</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div> :
                    <div className="menu_header">
                        <img alt="company logo" className="rounded-circle" src={logo} style={{ width: '40px' }} />
                    </div>
            }

        </div>
    );
};

export default SidebarHeader;