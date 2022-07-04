import React from 'react';
import MainLayout from '../layouts/MainLayout';
import department_requisition from "../assets/images/modules/inventory/department_requisition.png"
import department_addCart_update from "../assets/images/modules/inventory/department_addCart_update.png"
const Department = () => {
    return (
        <MainLayout>
            <div className="content_inner">
                <div className="card">
                    <div className="card-inner border-bottom  p-3">
                        <h2 className='display-6 fw-bold text-uppercase fs-3'>Department Requisition</h2>
                        <h5>To upgrade department requisition follow the below steps</h5>
                    </div>

                    <div className="step p-3">
                        <h4>STEP-1 : First Load Editable Data</h4>
                        <p>
                            Inventory Module <span><i class="fa-solid fa-arrow-right"></i> </span>
                            Department <span><i class="fa-solid fa-arrow-right"></i> </span>
                            Department Requisition <span><i class="fa-solid fa-arrow-right"></i> </span>
                            Click On Edit Button
                        </p>
                        <img src={department_requisition} alt="Department Requisitions" className='img-fluid img-thumbnail' />
                    </div>
                    <div className="step p-3">
                        <h4>STEP-2 : Update Data</h4>
                        <p>
                            After clicking on the <strong>Edit Button</strong>, data will be loaded, & input into another field. Then click on <strong>Add To Cart Button</strong> to add multiple data & then after adding more data, click on the <strong>Update Button</strong>
                        </p>

                        <img src={department_addCart_update} alt="Department Requisitions" className='img-fluid img-thumbnail' />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Department;