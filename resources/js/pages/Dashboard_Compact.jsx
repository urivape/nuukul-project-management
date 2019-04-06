import React, { Component } from 'react';
import SideBar from '../components/SideBar.jsx';

export default class Dashboard_Compact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="default-sidebar"><SideBar /></div>
                <div className="content-inner">
                    <div className="container-fluid">
                        {/* Begin Page Header */}
                        <div className="row">
                            <div className="page-header">
                                <div className="d-flex align-items-center">
                                    <h2 className="page-header-title">Dashboard</h2>
                                    <div>
                                        <div className="page-header-tools">
                                            <a className="btn btn-gradient-01" href="#">Add Widget</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Page Header */}
                        {/* Begin Row */}
                        <div className="row flex-row">
                            {/* Begin Facebook */}
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="widget widget-12 has-shadow">
                                    <div className="widget-body">
                                        <div className="media">
                                            <div className="align-self-center ml-5 mr-5">
                                                <i className="ion-social-facebook text-facebook"></i>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <div className="title">David Green</div>
                                                <div className="number">10,865 Likes</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Facebook */}
                            {/* Begin Twitter */}
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="widget widget-12 has-shadow">
                                    <div className="widget-body">
                                        <div className="media">
                                            <div className="align-self-center ml-5 mr-5">
                                                <i className="ion-social-twitter text-twitter"></i>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <div className="title">@David_Green</div>
                                                <div className="number">8,986 Followers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Twitter */}
                            {/* Begin Linkedin */}
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="widget widget-12 has-shadow">
                                    <div className="widget-body">
                                        <div className="media">
                                            <div className="align-self-center ml-5 mr-5">
                                                <i className="ion-social-linkedin-outline text-linkedin"></i>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <div className="title">@David_Green</div>
                                                <div className="number">3,654 Followers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Linkedin */}
                        </div>
                        {/* End Row */}
                        {/* Begin Row */}
                        <div className="row flex-row">
                            <div className="col-xl-12 col-md-6">
                                {/* Begin Widget 09 */}
                                <div className="widget widget-09 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header d-flex align-items-center">
                                        <h2>Delivered Orders</h2>
                                        <div className="widget-options">
                                            <button type="button" className="btn btn-shadow">View all</button>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    {/* Begin Widget Body */}
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-xl-10 col-12 no-padding">
                                                <div>
                                                    <canvas id="orders"></canvas>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-12 d-flex flex-column my-auto no-padding text-center">
                                                <div className="new-orders">
                                                    <div className="title">New Orders</div>
                                                    <div className="circle-orders">
                                                        <div className="percent-orders"></div>
                                                    </div>
                                                </div>
                                                <div className="some-stats mt-5">
                                                    <div className="title">Total Delivered</div>
                                                    <div className="number text-blue">856</div>
                                                </div>
                                                <div className="some-stats mt-3">
                                                    <div className="title">Total Estimated</div>
                                                    <div className="number text-blue">297</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Widget 09 */}
                            </div>
                        </div>
                        {/* End Row */}
                        <div className="row flex-row">
                            <div className="col-xl-4 col-md-6">
                                {/* Begin Widget 04 */}
                                <div className="widget widget-04 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Post</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-check"></i>Valid Post
                                            </a>
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-edit"></i>Edit Widget
                                            </a>
                                                    <a href="faq.html" className="dropdown-item faq">
                                                        <i className="la la-question-circle"></i>FAQ
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    {/* Begin Widget Body */}
                                    <div className="widget-body p-0">
                                        <div className="post-container">
                                            <div className="media mb-3">
                                                <div className="media-left align-self-center user">
                                                    <a href="pages-profile.html"><img src="assets/img/avatar/avatar-07.jpg" className="rounded-circle" alt="..." /></a>
                                                </div>
                                                <div className="media-body align-self-center ml-3">
                                                    <div className="title">
                                                        <span className="username">Lisa Garett</span> posted an image
                                            </div>
                                                    <div className="time">42 min ago</div>
                                                </div>
                                            </div>
                                            <img src="assets/img/background/01.jpg" alt="..." className="img-fluid" />
                                            <div className="col no-padding d-flex justify-content-end mt-3">
                                                <div className="meta">
                                                    <ul>
                                                        <li><a href="#"><i className="la la-comment"></i><span className="numb">38</span></a></li>
                                                        <li><a href="#"><i className="la la-heart"></i><span className="numb">94</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Begin Write Comment */}
                                        <div className="input-group mt-5">
                                            <input type="text" className="form-control pr-0" placeholder="Write a comment ..." />
                                            <span className="input-group-addon">
                                                <button className="btn" type="button">
                                                    <i className="la la-smile-o la-2x"></i>
                                                </button>
                                            </span>
                                            <span className="input-group-addon">
                                                <button className="btn pr-3" type="button">
                                                    <i className="la la-pencil la-2x"></i>
                                                </button>
                                            </span>
                                        </div>
                                        {/* End Write Comment */}
                                    </div>
                                    {/* End Widget Body */}
                                </div>
                                {/* End Widget 04 */}
                            </div>
                            <div className="col-xl-4 col-md-6">
                                {/* Begin Widget 05 */}
                                <div className="widget widget-05 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Top Author</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-edit"></i>Edit Widget
                                            </a>
                                                    <a href="#" className="dropdown-item faq">
                                                        <i className="la la-question-circle"></i>FAQ
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    {/* Begin Widget Body */}
                                    <div className="widget-body no-padding hidden">
                                        <div className="author-avatar">
                                            <span className="badge-pulse-green"></span>
                                            <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="author-name">
                                            Louis Henry
                                    <span>Designer</span>
                                        </div>
                                        <div className="chart">
                                            <div className="row no-margin justify-content-center">
                                                <div className="col-12 col-xl-8 col-md-8 col-sm-8">
                                                    <div className="row no-margin align-items-center">
                                                        {/* Begin Chart */}
                                                        <div className="col-9 no-padding">
                                                            <div className="chart-graph">
                                                                <div className="chart">
                                                                    <canvas id="sales-stats"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 no-padding text-center">
                                                            <div className="chart-text">
                                                                <span className="heading">Sales</span>
                                                                <span className="number">364</span>
                                                                <span className="cxg text-green">+35%</span>
                                                            </div>
                                                        </div>
                                                        {/* End Chart */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-stats">
                                            <div className="row d-flex justify-content-between">
                                                <div className="col-4 text-center">
                                                    <i className="la la-users followers"></i>
                                                    <div className="counter">+124</div>
                                                    <div className="heading">Followers</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i className="la la-dribbble dribbble"></i>
                                                    <div className="counter">+357</div>
                                                    <div className="heading">Likes</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i className="la la-behance behance"></i>
                                                    <div className="counter">+98</div>
                                                    <div className="heading">Followers</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="actions text-center">
                                            <a href="pages-profile.html" className="btn btn-gradient-01">View Profile</a>
                                        </div>
                                    </div>
                                    {/* End Widget Body */}
                                </div>
                                {/* End Widget 05 */}
                            </div>
                            <div className="col-xl-4">
                                {/* Begin Widget 06 */}
                                <div className="widget widget-06 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Reviews</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-edit"></i>Edit Widget
                                            </a>
                                                    <a href="#" className="dropdown-item faq">
                                                        <i className="la la-question-circle"></i>FAQ
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    {/* Begin Widget Body */}
                                    <div className="widget-body p-0">
                                        <div id="list-group" className="widget-scroll" style={{ maxHeight: "490px" }}>
                                            <ul className="reviews list-group w-100">
                                                {/* 01 */}
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-02.jpg" className="user-img rounded-circle" alt="..." />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Brandon Smith</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    WoW! Amazing Work!
                                                        </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">30 minutes ago - 1 Reply</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>12</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* End 01 */}
                                                {/* 02 */}
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-05.jpg" className="user-img rounded-circle" alt="..." />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Megan Duncan</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                </div>
                                                                <p>
                                                                    Very nice! Keep up the beautiful work.
                                                        </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">2 hours ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>4</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* End 02 */}
                                                {/* 03 */}
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-04.jpg" className="user-img rounded-circle" alt="..." />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Nathan Hunter</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                </div>
                                                                <p>
                                                                    Nice work, good design!
                                                        </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">4 hours ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>32</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* End 03 */}
                                                {/* 04 */}
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-09.jpg" className="user-img rounded-circle" alt="..." />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Michael Bradley</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    Very nice! Keep up the beautiful work.
                                                        </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">5 hours ago - 2 Reply</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>2</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* End 04 */}
                                                {/* 05 */}
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-03.jpg" className="user-img rounded-circle" alt="..." />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Louis Henry</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    I like the color combination!
                                                        </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">1 day ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>9</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* End 05 */}
                                            </ul>
                                        </div>
                                        {/* End List */}
                                    </div>
                                    {/* End Widget Body */}
                                </div>
                                {/* End Widget 06 */}
                            </div>
                        </div>
                        {/* End Row */}
                        <div className="row flex-row">
                            <div className="col-xl-12">
                                {/* Begin Widget 07 */}
                                <div className="widget widget-07 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Product Overview</h2>
                                        <div className="widget-options">
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-primary ripple">Week</button>
                                                <button type="button" className="btn btn-primary ripple">Month</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    {/* Begin Widget Body */}
                                    <div className="widget-body">
                                        <div className="table-responsive table-scroll padding-right-10" style={{ maxHeight: "520px" }}>
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="check-all" id="check-all" />
                                                                <label htmlFor="check-all"></label>
                                                            </div>
                                                        </th>
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
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb1" id="cb1" />
                                                                <label htmlFor="cb1"></label>
                                                            </div>
                                                        </td>
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
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb2" id="cb2" />
                                                                <label htmlFor="cb2"></label>
                                                            </div>
                                                        </td>
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
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb3" id="cb3" />
                                                                <label htmlFor="cb3"></label>
                                                            </div>
                                                        </td>
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
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb4" id="cb4" />
                                                                <label htmlFor="cb4"></label>
                                                            </div>
                                                        </td>
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
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb5" id="cb5" />
                                                                <label htmlFor="cb5"></label>
                                                            </div>
                                                        </td>
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
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb6" id="cb6" />
                                                                <label htmlFor="cb6"></label>
                                                            </div>
                                                        </td>
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
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb7" id="cb7" />
                                                                <label htmlFor="cb7"></label>
                                                            </div>
                                                        </td>
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
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb8" id="cb8" />
                                                                <label htmlFor="cb8"></label>
                                                            </div>
                                                        </td>
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
                                                    <tr>
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb9" id="cb9" />
                                                                <label htmlFor="cb9"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">092-06-FR</span></td>
                                                        <td>Beverly Matthews</td>
                                                        <td>RU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$129.85</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "5%" }}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb10" id="cb10" />
                                                                <label htmlFor="cb10"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-09-US</span></td>
                                                        <td>Jeffrey Arnold</td>
                                                        <td>US</td>
                                                        <td>07/21/2017</td>
                                                        <td><span style={{ width: "100px" }}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$199.95</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* End Widget Body */}
                                    {/* Begin Widget Footer */}
                                    <div className="widget-footer d-flex align-items-center">
                                        <div className="mr-auto p-2">
                                            <span className="display-items">Showing 1-30 / 150 Results</span>
                                        </div>
                                        <div className="p-2">
                                            <nav aria-label="...">
                                                <ul className="pagination justify-content-end">
                                                    <li className="page-item disabled">
                                                        <span className="page-link"><i className="ion-chevron-left"></i></span>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item active">
                                                        <span className="page-link">2<span className="sr-only">(current)</span></span>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#"><i className="ion-chevron-right"></i></a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    {/* End Widget Footer */}
                                </div>
                                {/* End Widget 07 */}
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col-xl-3 col-md-6">
                                {/* Begin Widget 08 */}
                                <div className="widget widget-08 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Tasks List</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-plus"></i>Add Task
                                            </a>
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-edit"></i>Edit Widget
                                            </a>
                                                    <a href="#" className="dropdown-item faq">
                                                        <i className="la la-question-circle"></i>FAQ
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    {/* Begin Widget Body */}
                                    <div className="widget-body">
                                        <div className="today">
                                            <div className="title">Today</div>
                                            <div className="new-tasks"><span className="nb">12</span> new tasks</div>
                                        </div>
                                        {/* Begin List */}
                                        <div className="todo-list">
                                            <ul id="sortable" className="list">
                                                <li className="task-color task-violet">
                                                    <div className="styled-checkbox">
                                                        <input type="checkbox" id="task-1" />
                                                        <label className="text-primary" htmlFor="task-1">Play Rainbow Six</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="styled-checkbox">
                                                        <input type="checkbox" id="task-2" />
                                                        <label className="text-dark" htmlFor="task-2">Drink coffee with Megan</label>
                                                    </div>
                                                </li>
                                                <li className="task-color task-blue">
                                                    <div className="styled-checkbox">
                                                        <input type="checkbox" id="task-3" />
                                                        <label className="text-info" htmlFor="task-3">Video conference</label>
                                                    </div>
                                                </li>
                                                <li className="task-color task-red">
                                                    <div className="styled-checkbox">
                                                        <input type="checkbox" id="task-4" />
                                                        <label className="text-danger" htmlFor="task-4">Finish visual design</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="styled-checkbox">
                                                        <input type="checkbox" id="task-5" />
                                                        <label className="text-dark" htmlFor="task-5">Meeting with team</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End List */}
                                    </div>
                                    {/* End Widget Body */}
                                </div>
                                {/* End Widget 08 */}
                            </div>
                            <div className="col-xl-5 col-md-6">
                                {/* Begin Widget 10 */}
                                <div className="widget widget-10 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Support Tickets</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                            </a>
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-edit"></i>Edit Widget
                                            </a>
                                                    <a href="#" className="dropdown-item faq">
                                                        <i className="la la-question-circle"></i>FAQ
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    {/* Begin Widget Body */}
                                    <div className="widget-body no-padding">
                                        <ul className="ticket list-group w-100">
                                            {/* 01 */}
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-02.jpg" className="user-img rounded-circle" alt="..." />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Brandon Smith</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                    </p>
                                                        </div>
                                                        <div className="status"><span className="open mr-2">Open</span>(1 hour ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End 01 */}
                                            {/* 02 */}
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-04.jpg" className="user-img rounded-circle" alt="..." />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Nathan Hunter</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                    </p>
                                                        </div>
                                                        <div className="status"><span className="pending mr-2">Pending</span>(2 hours ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End 02 */}
                                            {/* 03 */}
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-05.jpg" className="user-img rounded-circle" alt="..." />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Megan Duncan</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                    </p>
                                                        </div>
                                                        <div className="status"><span className="closed mr-2">Closed</span>(1 day ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* End 03 */}
                                        </ul>
                                    </div>
                                    {/* End Widget Body */}
                                </div>
                                {/* End Widget 10 */}
                            </div>
                            <div className="col-xl-4">
                                {/* Begin Widget 11 */}
                                <div className="widget widget-11 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Activity Log</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-history"></i>History
                                            </a>
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                            </a>
                                                    <a href="#" className="dropdown-item">
                                                        <i className="la la-edit"></i>Edit Widget
                                            </a>
                                                    <a href="#" className="dropdown-item faq">
                                                        <i className="la la-question-circle"></i>FAQ
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    {/* Begin Widget Body */}
                                    <div className="widget-body p-0 widget-scroll" style={{ maxHeight: "450px" }}>
                                        {/* Begin 01 */}
                                        <div className="timeline violet">
                                            <div className="timeline-content d-flex align-items-center">
                                                <div className="user-image">
                                                    <img className="rounded-circle" src="assets/img/avatar/avatar-06.jpg" alt="..." />
                                                </div>
                                                <div className="d-flex flex-column mr-auto">
                                                    <div className="title">
                                                        <span className="username">Beverly Oliver</span>
                                                        Send you a friend request
                                        </div>
                                                    <div className="time">4 min ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End 01 */}
                                        {/* Begin 02 */}
                                        <div className="timeline red">
                                            <div className="timeline-content d-flex align-items-center">
                                                <div className="timeline-icon">
                                                    <i className="la la-spinner"></i>
                                                </div>
                                                <div className="d-flex flex-column mr-auto">
                                                    <div className="title">
                                                        Server rebooted
                                        </div>
                                                    <div className="time">10 min ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End 02 */}
                                        {/* Begin 03 */}
                                        <div className="timeline violet">
                                            <div className="timeline-content d-flex align-items-center">
                                                <div className="user-image">
                                                    <img className="rounded-circle" src="assets/img/avatar/avatar-05.jpg" alt="..." />
                                                </div>
                                                <div className="d-flex flex-column mr-auto">
                                                    <div className="title">
                                                        <span className="username">Megan Duncan</span>
                                                        Followed 4 people
                                            <div className="users-like">
                                                            <a href="profile.html">
                                                                <img src="assets/img/avatar/avatar-01.jpg" className="img-fluid rounded-circle" alt="..." />
                                                            </a>
                                                            <a href="profile.html">
                                                                <img src="assets/img/avatar/avatar-02.jpg" className="img-fluid rounded-circle" alt="..." />
                                                            </a>
                                                            <a href="profile.html">
                                                                <img src="assets/img/avatar/avatar-07.jpg" className="img-fluid rounded-circle" alt="..." />
                                                            </a>
                                                            <a href="profile.html">
                                                                <img src="assets/img/avatar/avatar-09.jpg" className="img-fluid rounded-circle" alt="..." />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="time">12 min ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End 03 */}
                                        {/* Begin 04 */}
                                        <div className="timeline blue">
                                            <div className="timeline-content d-flex align-items-center">
                                                <div className="timeline-icon">
                                                    <i className="la la-heart-o"></i>
                                                </div>
                                                <div className="d-flex flex-column mr-auto">
                                                    <div className="title">
                                                        <span className="username">Brandon Smith</span>
                                                        Liked <span className="font-weight-bold"><a href="#">Elisyam Admin Template</a></span>
                                                    </div>
                                                    <div className="time">30 min ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End 04 */}
                                        {/* Begin 05 */}
                                        <div className="timeline violet">
                                            <div className="timeline-content d-flex align-items-center">
                                                <div className="timeline-icon">
                                                    <i className="la la-twitter"></i>
                                                </div>
                                                <div className="d-flex flex-column mr-auto">
                                                    <div className="title">
                                                        + 3 new followers
                                            <div className="users-like">
                                                            <a href="profile.html">
                                                                <img src="assets/img/avatar/avatar-09.jpg" className="img-fluid rounded-circle" alt="..." />
                                                            </a>
                                                            <a href="profile.html">
                                                                <img src="assets/img/avatar/avatar-06.jpg" className="img-fluid rounded-circle" alt="..." />
                                                            </a>
                                                            <a href="profile.html">
                                                                <img src="assets/img/avatar/avatar-03.jpg" className="img-fluid rounded-circle" alt="..." />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="time">34 min ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End 05 */}
                                        {/* Begin 06 */}
                                        <div className="timeline violet">
                                            <div className="timeline-content d-flex align-items-center">
                                                <div className="user-image">
                                                    <img className="rounded-circle" src="assets/img/avatar/avatar-04.jpg" alt="..." />
                                                </div>
                                                <div className="d-flex flex-column mr-auto">
                                                    <div className="title">
                                                        <span className="username">Nathan Hunter</span>
                                                        Invited you in a group
                                        </div>
                                                    <div className="time">42 min ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End 06 */}
                                        {/* Begin 06 */}
                                        <div className="timeline violet">
                                            <div className="timeline-content d-flex align-items-center">
                                                <div className="user-image">
                                                    <img className="rounded-circle" src="assets/img/avatar/avatar-03.jpg" alt="..." />
                                                </div>
                                                <div className="d-flex flex-column mr-auto">
                                                    <div className="title">
                                                        <span className="username">Louis Henry</span>
                                                        Is now following you
                                        </div>
                                                    <div className="time">50 min ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End 06 */}
                                        {/* Begin 07 */}
                                        <div className="timeline blue">
                                            <div className="timeline-content d-flex align-items-center">
                                                <div className="timeline-icon">
                                                    <i className="la la-image"></i>
                                                </div>
                                                <div className="d-flex flex-column mr-auto">
                                                    <div className="title">
                                                        <span className="username">Brandon Smith</span>
                                                        Uploaded <span className="font-weight-bold"><a href="#">8 photos</a></span>
                                                    </div>
                                                    <div className="time">1 hour ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End 07 */}
                                    </div>
                                    {/* End Widget Body */}
                                </div>
                                {/* End Widget 11 */}
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </>
        )
    }
}