import React, { Component } from 'react';
import SideBar from '../components/SideBar.jsx';

export default class Dashboard_Clean extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="default-sidebar"><SideBar /></div>
                <div className="content-inner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="page-header">
                                <div className="d-flex align-items-center">
                                    <h2 className="page-header-title text-gradient-01">Dashboard</h2>
                                    <div>
                                        <div className="page-header-tools">
                                            <a className="btn btn-outline-primary" href="#">Add Widget</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col-xl-4">
                                <div className="widget-36 widget has-shadow">
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-xl-12 text-center mt-5 mb-5">
                                                <div className="nb-visitors">
                                                    New Users
                                        </div>
                                                <div className="visitors-nb text-gradient-02">
                                                    2,861
                                        </div>
                                            </div>
                                            <div className="col-xl-6 text-center mt-5">
                                                <p className="text-dark">Registrations</p>
                                                <div className="mt-2">
                                                    <label defaultfor="l1">
                                                        <input className="toggle-checkbox" type="checkbox" defaultChecked />
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 text-center mt-5">
                                                <p className="text-dark">Maintenance Mode</p>
                                                <div className="mt-2">
                                                    <label defaultfor="l2">
                                                        <input className="toggle-checkbox" type="checkbox" />
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="widget widget-34 has-shadow">
                                    <div className="widget-header d-flex align-items-center">
                                        <h2>Overall Ratings</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-circle-o-notch"></i>
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
                                    <div className="widget-body hidden">
                                        <div className="row">
                                            <div className="col-12 d-flex align-items-center">
                                                <div className="r-title">
                                                    4.0
                                        </div>
                                                <div className="star-rating">
                                                    <ul>
                                                        <li><i className="la la-star rate"></i></li>
                                                        <li><i className="la la-star rate"></i></li>
                                                        <li><i className="la la-star rate"></i></li>
                                                        <li><i className="la la-star rate"></i></li>
                                                        <li><i className="la la-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chart">
                                            <div className="row justify-content-center">
                                                <div className="col-12">
                                                    <div className="chart-graph">
                                                        <div className="chart">
                                                            <canvas id="reviews-stats"></canvas>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="widget-35 widget has-shadow">
                                    <div className="widget-body h-100">
                                        <div className="row align-items-center">
                                            <div className="col-xl-6 d-flex align-items-center">
                                                <div className="user-avatar">
                                                    <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="user-n">
                                                    <div className="m-name">Nathan hunter</div>
                                                    <div className="account-name">@nhunter</div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 d-flex justify-content-end">
                                                <i className="ion-social-facebook"></i>
                                            </div>
                                        </div>
                                        <div className="w-text">
                                            <div className="widget35 owl-carousel">
                                                <div className="item">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat <a href="#">https://www.expl.com</a></p>
                                                </div>
                                                <div className="item">
                                                    <p>Integer nec justo vel ligula malesuada pharetra sit amet vitae tellus. Sed nibh massa, blandit vitae lorem pellentesque, euismod vestibulum lacus. Mauris non elit eu nisi sodales aliquet a id justo.</p>
                                                </div>
                                                <div className="item">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat <a href="#">https://www.expl.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="widget widget-25 has-shadow">
                                    <div className="widget-header no-actions d-flex align-items-center">
                                        <h2>Weather</h2>
                                    </div>
                                    <div className="widget-body">
                                        <div className="row m-0 align-items-center">
                                            <div className="col-xl-12 text-center">
                                                <div className="current-weather">
                                                    <div className="weather-report">Today</div>
                                                    <div className="temperature">26°</div>
                                                    <i className="meteocons-rainy2"></i>
                                                    <div className="condition mt-2 mb-5">Sunshine</div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-4 text-center">
                                                <div className="weather-next-day">
                                                    <div className="day">Tue</div>
                                                    <i className="meteocons-sun"></i>
                                                    <div className="temp mt-2">30°</div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-4 text-center">
                                                <div className="weather-next-day">
                                                    <div className="day">Wed</div>
                                                    <i className="meteocons-cloudy"></i>
                                                    <div className="temp mt-2">24°</div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-4 text-center">
                                                <div className="weather-next-day">
                                                    <div className="day">Thu</div>
                                                    <i className="meteocons-windy2"></i>
                                                    <div className="temp mt-2">27°</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="widget-39 widget d-flex align-items-center justify-content-center bg-dark has-shadow">
                                    <div className="widget-effect"><i className="ti ti-unlock"></i></div>
                                    <div className="widget-body text-center">
                                        <i className="ti ti-crown mb-3 text-gradient-01"></i>
                                        <div className="congrats-name mb-2">Congratulations!</div>
                                        <p>You have unlocked a new badge</p>
                                        <a className="btn btn-gradient-01 mt-3" href="#">It's Awesome</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="widget widget-38 has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Customers Locations</h4>
                                    </div>
                                    <div className="widget-body p-0">
                                        <div id="layer-control" style={{ height: "385px" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col-xl-6 col-md-6">
                                <div className="widget widget-09 has-shadow">
                                    <div className="widget-header d-flex align-items-center">
                                        <h2>Delivered Orders</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-circle-o-notch"></i>
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
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-xl-12 col-12 d-flex flex-column my-auto no-padding text-center">
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="some-stats mb-4">
                                                            <div className="title">Total Delivered</div>
                                                            <div className="number text-secondary">856</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="some-stats mb-4">
                                                            <div className="title">Total Estimated</div>
                                                            <div className="number text-secondary">297</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12 p-0">
                                                <div>
                                                    <canvas id="orders"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-6">
                                <div className="widget widget-02 has-shadow">
                                    <div className="widget-header d-flex align-items-center">
                                        <h2>Activity Graph</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-circle-o-notch"></i>
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
                                    <div className="widget-body no-padding">
                                        <div className="text-center">
                                            <div className="more-charts">
                                                <a className="btn btn-shadow" href="components-charts.html">More Charts</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chart">
                                        <canvas id="sale-chart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row no-margin">
                            <div className="col-xl-12">
                                <div className="row widget has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Calendar</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-circle-o-notch"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item">
                                                        Add Event
                                            </a>
                                                    <a href="app-calendar.html" className="dropdown-item">
                                                        Basic Calendar
                                            </a>
                                                    <a href="app-calendar-list.html" className="dropdown-item">
                                                        List Views
                                            </a>
                                                    <a href="app-calendar-event.html" className="dropdown-item">
                                                        External Events
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body">
                                        <div id="demo-calendar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}