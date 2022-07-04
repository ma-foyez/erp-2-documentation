import React from 'react';
import MainLayout from '../layouts/MainLayout';
import department from "../assets/images/modules/inventory/departmentEntry/1.png"
import departmentUpdate from "../assets/images/modules/inventory/departmentEntry/3.png"

const DepartmentEntry = () => {
    return (
        <MainLayout>
            <div className="content_inner">
                <div className="card">
                    <div className="card-inner border-bottom  p-3">
                        <h2 className='display-6 fw-bold text-uppercase fs-3'>Department Entry</h2>
                        <h5>To add or upgrade department requisition follow the below steps</h5>
                    </div>

                    <div className="step p-3">
                        <h4>STEP-1 : To Create Department</h4>
                        <p>
                            Inventory Module <span><i class="fa-solid fa-arrow-right"></i> </span>
                            Department <span><i class="fa-solid fa-arrow-right"></i> </span>
                            Settings <span><i class="fa-solid fa-arrow-right"></i> </span>
                            Department Entry
                        </p>

                        <div className="row">
                            <div className="col-md-8 col-sm-7">
                                <img src={department} alt="Department" className='img-fluid img-thumbnail' />
                            </div>
                            <div className="col-md-4 col-sm-5">
                                <div className="border rounded">
                                    <div className="card-header">
                                        <h6 className='text-center fw-bold text-uppercase'>Department Entry</h6>
                                    </div>
                                    <div className="guid_list">
                                        <ul>
                                            <li>
                                                Select a company & click on the search button to view already existed department list
                                            </li>
                                            <li>
                                                Type department name
                                            </li>
                                            <li>
                                                Click on <strong>Submit</strong> button to add new department
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="step p-3">
                        <h4>STEP-2 : To Update Department</h4>

                        <div className="row">
                            <div className="col-md-8 col-sm-7">
                                <img src={departmentUpdate} alt="Department" className='img-fluid img-thumbnail' />
                            </div>
                            <div className="col-md-4 col-sm-5">
                                <div className="border rounded">
                                    <div className="card-header">
                                        <h6 className='text-center fw-bold text-uppercase'>Department Update </h6>
                                    </div>
                                    <div className="guid_list">
                                        <ul>
                                            <li>
                                                Click on the edit button from the list to view department data in department input fields.
                                            </li>
                                            <li>
                                                If you want to change your company name again select your expected company name
                                            </li>
                                            <li>
                                                Type department name into department field
                                            </li>
                                            <li>
                                                Click on the <strong>Update </strong> button
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
};

export default DepartmentEntry;