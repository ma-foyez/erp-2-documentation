import React from 'react';

const Footer = () => {
    return (
        <p className='text-center'> <strong>Copyright</strong> Omni Solutions Limited {new Date().getFullYear()} - {new Date().getFullYear() + 1}</p>
    );
};

export default Footer;