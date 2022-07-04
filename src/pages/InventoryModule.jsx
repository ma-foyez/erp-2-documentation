import React from 'react';
import MainLayout from '../layouts/MainLayout';
// import inventoryFlowChart from "../assets/images/modules/inventory/InventoryWorkProcess.drawio.png"
import inventoryFlowChart from "../assets/images/modules/inventory/InventoryWorkProcess.drawio-1.jpg"
import { Link } from 'react-router-dom';
const InventoryModule = () => {


    return (
        <MainLayout>
            <div className="content_inner">
                <h2 className='display-6 fw-bold text-uppercase fs-3'>Inventory Management System</h2>
                <div className="module_features">
                    <h5>Module Features</h5>
                    <ul>
                        <li><Link to="/module/inventory-management/department">Department</Link></li>
                        <li><Link to="/module/inventory-management/warehouse">Warehouse</Link></li>
                        <li><Link to="/module/inventory-management/Procurement">Procurement</Link></li>
                        <li><Link to="/module/inventory-management/item-management">Item Management</Link></li>
                    </ul>
                </div>
                <div className="card shadow-sm">
                    <div className="card-header p-2">
                        <h4 className='text-center text-uppercase'>Inventory Working Process</h4>
                    </div>
                    <img src={inventoryFlowChart} alt="Inventory Working Process" className='img-fluid' />
                </div>
            </div>
        </MainLayout>
    );
};

export default InventoryModule;