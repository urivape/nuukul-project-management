import React, { Component } from 'react';
import SideBar from '../components/SideBar.jsx';

export default class Basic_Table extends Component {
    render() {
        return(
            <>
                <div className="default-sidebar"><SideBar /></div>
                <div className="content-inner">
                    <div className="container-fluid">
                        {/* Begin Page Header*/}
                        <div className="row">
                            <div className="page-header">
	                            <div className="d-flex align-items-center">
	                                <h2 className="page-header-title">Basic Tables</h2>
	                                <div>
			                            <ul className="breadcrumb">
			                                <li className="breadcrumb-item"><a href="db-default.html"><i className="ti ti-home"></i></a></li>
			                                <li className="breadcrumb-item active">Basic Tables</li>
			                            </ul>
	                                </div>
	                            </div>
                            </div>
                        </div>
                        {/* End Page Header */}
                        <div className="row">
                            <div className="col-xl-12">
                                {/* Default */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Default</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Order ID</th>
                                                        <th>Customer Name</th>
                                                        <th>Country</th>
                                                        <th>Ship Date</th>
                                                        <th><span style={{ width: "100px" }}>Status</span></th>
                                                        <th>Order Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Lori Baker</td>
                                                        <td>US</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>Lawrence Crawford</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Samuel Walker</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">092-06-FR</span></td>
                                                        <td>Angela Walters</td>
                                                        <td>US</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small success">Delivered</span></span></td>
                                                        <td>$129.85</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-09-US</span></td>
                                                        <td>Ryan Hanson</td>
                                                        <td>ES</td>
                                                        <td>07/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$199.95</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Evelyn Black</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>James Morris</td>
                                                        <td>EN</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Valentin H.</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* End Default */}
                                {/* Hover */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Hover</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Order ID</th>
                                                        <th>Customer Name</th>
                                                        <th>Country</th>
                                                        <th>Ship Date</th>
                                                        <th><span style={{ width: "100px" }}>Status</span></th>
                                                        <th>Order Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Lori Baker</td>
                                                        <td>US</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>Lawrence Crawford</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Samuel Walker</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">092-06-FR</span></td>
                                                        <td>Angela Walters</td>
                                                        <td>US</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small success">Delivered</span></span></td>
                                                        <td>$129.85</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-09-US</span></td>
                                                        <td>Ryan Hanson</td>
                                                        <td>ES</td>
                                                        <td>07/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$199.95</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Evelyn Black</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>James Morris</td>
                                                        <td>EN</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Valentin H.</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* End Hover */}
                                {/* Border */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Border</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Order ID</th>
                                                        <th>Customer Name</th>
                                                        <th>Country</th>
                                                        <th>Ship Date</th>
                                                        <th><span style={{ width: "100px" }}>Status</span></th>
                                                        <th>Order Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Lori Baker</td>
                                                        <td>US</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>Lawrence Crawford</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Samuel Walker</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">092-06-FR</span></td>
                                                        <td>Angela Walters</td>
                                                        <td>US</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small success">Delivered</span></span></td>
                                                        <td>$129.85</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-09-US</span></td>
                                                        <td>Ryan Hanson</td>
                                                        <td>ES</td>
                                                        <td>07/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$199.95</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Evelyn Black</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>James Morris</td>
                                                        <td>EN</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Valentin H.</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* End Border */}
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </>
        );
    }
}