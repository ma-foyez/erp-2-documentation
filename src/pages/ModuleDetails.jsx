import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const ModuleDetails = () => {
    
    let params = useParams();

    return (
        <MainLayout>
            <div className="content_inner">
                <h3>This is {params.moduleName} Page</h3>
            </div>
        </MainLayout>
    );
};

export default ModuleDetails;