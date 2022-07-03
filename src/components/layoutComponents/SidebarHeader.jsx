import React from 'react';

const SidebarHeader = () => {
    return (
        <div>
            <div className="dropdown profile-element">
                <img alt="icon" className="rounded-circle img-thumbnail" src="/home/USER.png" style={{ height: '50px' }} />
                <a data-toggle="dropdown" className="dropdown-toggle" href="/#" aria-expanded="false">
                    <span className="block m-t-xs font-bold">OmniSolutionLtd</span>
                    <span className="text-muted text-xs block">Art Director <b className="caret" /></span>
                </a>
                <ul className="dropdown-menu animated fadeInRight m-t-xs" style={{ position: 'absolute', top: '94px', left: '0px', willChange: 'top, left' }} x-placement="bottom-start">
                    <li><a className="dropdown-item" href="/AppViews/Profile">Profile</a></li>
                    <li><a className="dropdown-item" href="/AppViews/Contacts">Contacts</a></li>
                    <li><a className="dropdown-item" href="/Mailbox/Inbox">Mailbox</a></li>
                    <li className="dropdown-divider" />
                    <li><a className="dropdown-item" href="/Account/LogOut">Logout</a></li>
                </ul>
            </div>
            <div className="logo-element">
                <img alt="icon" className="rounded-circle" src="/Images/omni-solution-logo.png" style={{ width: '40px' }} />
            </div>
        </div>
    );
};

export default SidebarHeader;