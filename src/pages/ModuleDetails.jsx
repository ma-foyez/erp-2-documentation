import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const ModuleDetails = () => {

    let params = useParams();

    return (
        <MainLayout>
            <div className="content_inner">
                <h2 className='display-6 fw-bold text-uppercase'>Welcome TO {params.moduleName} </h2>
            </div>
        </MainLayout>
    );
};

export default ModuleDetails;