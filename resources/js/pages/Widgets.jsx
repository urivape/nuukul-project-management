import React, { Component } from 'react';
import SideBar from '../components/SideBar.jsx';

export default class Widgets extends Component {
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
                                    <h2 className="page-header-title">Widgets</h2>
                                    <div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="dashboard.html"><i className="ti ti-home"></i></a></li>
                                            <li className="breadcrumb-item"><a href="#">Components</a></li>
                                            <li className="breadcrumb-item active">Widgets</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Page Header */}
                        {/* Begin Row */}
                        <div className="row flex-row">
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                {/* Begin Widget 01 */}
                                <div className="widget widget-01 has-shadow">
                                    <div className="widget-body no-padding">
                                        <h3>Happy Customers <span className="text-green">+24%</span></h3>
                                        <div className="circle">
                                            <div className="percent"></div>
                                        </div>
                                        {/* Begin Other Stats */}
                                        <div className="other-stats">
                                            {/* Begin Row */}
                                            <div className="row no-margin justify-content-center">
                                                <div className="col-12 col-xl-10 col-md-10 col-sm-10">
                                                    <div className="today-sales">
                                                        <div className="graph">
                                                            <div className="chart">
                                                                <canvas id="today-chart"></canvas>
                                                            </div>
                                                        </div>
                                                        <div className="text">
                                                            <div className="heading">Today Sales</div>
                                                            <div className="number">489</div>
                                                            <div className="value text-blue">+30%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Today Sales */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                        {/* End Other Stats */}
                                    </div>
                                </div>
                                {/* End Widget 01 */}
                            </div>
                            <div className="col-xl-5 col-md-6 col-sm-6">
                                {/* Begin Widget 02 */}
                                <div className="widget widget-02 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Activity Graph</h2>
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
                                    <div className="widget-body no-padding">
                                        {/* Begin Item */}
                                        <div className="text-center">
                                            <div className="more-charts">
                                            <a className="btn btn-shadow" href="components-charts.html">More Charts</a>
                                            </div>
                                        </div>
                                        {/* End Item */}
                                    </div>
                                    {/* End Widget Body */}
                                    <div className="chart">
                                        <canvas id="sale-chart"></canvas>
                                    </div>
                                </div>
                                {/* End Widget 02 */}
                            </div>
                            <div className="col-xl-4 col-md-12">
                                {/* Begin Widget 03 */}
                                <div className="widget-image widget-03 has-shadow blog-image position-relative">
                                    <div className="blog-overlay"></div>
                                    <div className="blog-content">
                                        <span className="author">By Saerox</span>
                                        <h3 className="blog-title"><a href="#">Be<br />Elisyam</a></h3>
                                        <ul className="meta">
                                            <li><i className="la la-comments"></i><span className="numb">85</span></li>
                                            <li><i className="la la-heart"></i><span className="numb">254</span></li>
                                        </ul>
                                        <div className="blog-category">
                                            <a href="#0">Webdesign</a>
                                        </div>
                                    </div>
                                </div>
                                {/* End Widget 03 */}
                            </div>
                        </div>
                        {/* End Row */}
                        {/* Begin Row/Widget 12 */}
                        <div className="row flex-row">
                            {/* Begin Facebook */}
                            <div className="col-xl-3 col-md-6 col-sm-6">
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
                            <div className="col-xl-3 col-md-6 col-sm-6">
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
                            <div className="col-xl-3 col-md-6 col-sm-6">
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
                            {/* Begin Youtube */}
                            <div className="col-xl-3 col-md-6 col-sm-6">
                                <div className="widget widget-12 has-shadow">
                                    <div className="widget-body">
                                        <div className="media">
                                            <div className="align-self-center ml-5 mr-5">
                                                <i className="ion-social-youtube-outline text-youtube"></i>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <div className="title">/beElisyam</div>
                                                <div className="number">12,357 Views</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Youtube */}
                        </div>
                        {/* End Row/Widget 12 */}
                        {/* Begin Row */}
                        <div className="row flex-row">
                            {/* Begin Widget 13 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-13 has-shadow">
                                    <div className="widget-body p-0">
                                        <div className="author-avatar">
                                            <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="author-name">
                                            Nathan Hunter
                                            <span>Mobile Designer</span>
                                        </div>
                                        <div className="follow-btn text-center mt-4">
                                            <a className="btn btn-shadow" href="#">Follow</a>
                                        </div>
                                        <div className="social-stats mt-5">
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
                                        <div className="shape-container">
                                            <svg className="wavy" viewBox="00 0 85 25">
                                                <path fill="#e4e8f0" d="M0 30 V15 Q30 3 60 15 V30z" />
                                                <path fill="#5d5386" d="M0 30 V5 Q30 20 55 12 T100 11 V30z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 13 */}
                            {/* Begin Widget 14 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-14 has-shadow">
                                    <div className="widget-body">
                                        <div className="section-title mb-5">
                                            <h2>Calendar</h2>
                                        </div>
                                        <div className="widget14 owl-carousel">
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">April</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">May</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">June</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">July</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">August</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">September</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">October</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">November</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="item-projects">
                                                    <div className="month">December</div>
                                                    <div className="year">2018</div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="list-group w-100 mt-3">
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="event-date align-self-center mr-3">
                                                        10
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="event-title text-secondary">Meeting with Team</div>
                                                        <div className="event-desc mr-3">
                                                            <i className="la la-calendar"></i>
                                                            <span>09:30 AM</span>
                                                        </div>
                                                        <div className="event-desc">
                                                            <i className="la la-user"></i>
                                                            <span>4</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="event-date align-self-center mr-3">
                                                        12
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="event-title text-info">Dentist</div>
                                                        <div className="event-desc mr-3">
                                                            <i className="la la-calendar"></i>
                                                            <span>11:00 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="event-date align-self-center mr-3">
                                                        15
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="event-title text-dark">Brandon Birthday</div>
                                                        <div className="event-desc mr-3">
                                                            <i className="la la-calendar"></i>
                                                            <span>07:00 PM</span>
                                                        </div>
                                                        <div className="event-desc">
                                                            <i className="la la-user"></i>
                                                            <span>2</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="event-date align-self-center mr-3">
                                                        21
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="event-title text-primary">Flight Paris</div>
                                                        <div className="event-desc mr-3">
                                                            <i className="la la-calendar"></i>
                                                            <span>10:00 PM</span>
                                                        </div>
                                                        <div className="event-desc">
                                                            <i className="la la-user"></i>
                                                            <span>30</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 14 */}
                            {/* Begin Widget 15 */}
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div className="widget widget-15 has-shadow">
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-xl-6 d-flex justify-content-center align-items-center">
                                                <div className="weather-infos">
                                                    <div className="temp">24°</div>
                                                    <div className="city">Paris, FR</div>
                                                    <div className="risk"><i className="la la-tint"></i>80%</div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 d-flex justify-content-center align-items-center">
                                                <div className="weather-icon">
                                                    <i className="meteocons-cloudy"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="time-nav nav nav-tabs justify-content-center mt-5 mb-5" role="tablist" id="weather-tab">
                                            <li><a className="active" data-toggle="tab" href="#weekly" role="tab" id="weekly-tab">Weekly</a></li>
                                            <li><a data-toggle="tab" href="#hourly" role="tab" id="hourly-tab">Hourly</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            {/* Begin Tab 1 */}
                                            <div role="tabpanel" className="tab-pane show active" id="weekly" aria-labelledby="weekly-tab">
                                                <div className="widget15-weekly owl-carousel">
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">Monday</div>
                                                        <div className="weather">2 Apr</div>
                                                        <div className="weather-temp">12 / 30°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>10%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-lightning3"></i>
                                                        </div>
                                                        <div className="day">Tuesday</div>
                                                        <div className="weather">3 Apr</div>
                                                        <div className="weather-temp">8 / 21°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>95%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-rainy2"></i>
                                                        </div>
                                                        <div className="day">Wednesday</div>
                                                        <div className="weather">4 Apr</div>
                                                        <div className="weather-temp">8 / 19°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>82%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-cloudy"></i>
                                                        </div>
                                                        <div className="day">Thursday</div>
                                                        <div className="weather">5 Apr</div>
                                                        <div className="weather-temp">6 / 20°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>50%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">Friday</div>
                                                        <div className="weather">6 Apr</div>
                                                        <div className="weather-temp">14 / 25°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>0%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Tab 1 */}
                                            {/* Begin Tab 2 */}
                                            <div role="tabpanel" className="tab-pane" id="hourly" aria-labelledby="hourly-tab">
                                                <div className="widget15-hourly owl-carousel">
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">11:00 PM</div>
                                                        <div className="weather-temp">24°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>10%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">12:00 PM</div>
                                                        <div className="weather-temp">25°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>0%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">13:00 PM</div>
                                                        <div className="weather-temp">25°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>10%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-cloudy"></i>
                                                        </div>
                                                        <div className="day">14:00 PM</div>
                                                        <div className="weather-temp">20°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>30%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">15:00 PM</div>
                                                        <div className="weather-temp">30°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>0%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">16:00 PM</div>
                                                        <div className="weather-temp">30°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>0%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">17:00 PM</div>
                                                        <div className="weather-temp">28°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>5%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-sun"></i>
                                                        </div>
                                                        <div className="day">18:00 PM</div>
                                                        <div className="weather-temp">28°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>5%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-cloud"></i>
                                                        </div>
                                                        <div className="day">19:00 PM</div>
                                                        <div className="weather-temp">23°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>20%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-weather2"></i>
                                                        </div>
                                                        <div className="day">20:00 PM</div>
                                                        <div className="weather-temp">22°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>0%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-weather2"></i>
                                                        </div>
                                                        <div className="day">22:00 PM</div>
                                                        <div className="weather-temp">22°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>0%
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="weather-mini-icon mb-2">
                                                            <i className="meteocons-weather2"></i>
                                                        </div>
                                                        <div className="day">23:00 PM</div>
                                                        <div className="weather-temp">20°</div>
                                                        <div className="rain">
                                                            <i className="la la-tint"></i>50%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Tab 2 */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 15 */}
                        </div>
                        {/* End Row */}
                        {/* Begin Row */}
                        <div className="row flex-row">
                            {/* Begin Widget 16 */}
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-16 has-shadow">
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-xl-8 d-flex flex-column justify-content-center align-items-center">
                                                <div className="counter">258,036</div>
                                                <div className="total-views">Total Page Views</div>
                                            </div>
                                            <div className="col-xl-4 d-flex justify-content-center align-items-center">
                                                <div className="pages-views">
                                                    <div className="percent"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 16 */}
                            {/* Begin Widget 17 */}
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-17 has-shadow">
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-xl-7 d-flex flex-column justify-content-center align-items-center">
                                                <div className="counter">1,658</div>
                                                <div className="total-visitors">Visitors Online</div>
                                            </div>
                                            <div className="col-xl-5 d-flex justify-content-center align-items-center">
                                                <div className="visitors">
                                                    <div className="percent"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 17 */}
                        </div>
                        {/* End Row */}
                        {/* Begin Row */}
                        <div className="row flex-row">
                            {/* Begin Widget 18 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-18 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Messages Box</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="app-chat.html" className="dropdown-item"> 
                                                        <i className="la la-comments"></i>New Message
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
                                    <div className="widget-body">
                                        <div className="input-group">
                                            <span className="input-group-addon pr-0 pl-0">
                                                <a className="btn" href="#">
                                                    <i className="la la-search la-2x"></i>
                                                </a>
                                            </span>
                                            <input type="text" className="form-control no-ppading-right no-padding-left" placeholder="Search" />
                                        </div>
                                        <div className="new-message">
                                            <div className="media">
                                                <div className="media-left align-self-center mr-3">
                                                    <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "50px" }} />
                                                </div>
                                                <div className="media-body align-self-center">
                                                    <div className="new-message-sender">Nathan Hunter</div>
                                                    <div className="new-message-time">New message about 2 minutes ago</div>
                                                </div>
                                                <div className="media-right align-self-center">
                                                    <div className="actions">
                                                        <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="list-group w-100 mt-5">
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-02.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "50px" }} />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Brandon Smith</div>
                                                            <div className="other-message-time">Are you serious? - 3 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "50px" }} />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Louis Henry</div>
                                                            <div className="other-message-time">Bonne idée, coucou à ... - 10 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-05.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "50px" }} />
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Megan Duncan</div>
                                                            <div className="other-message-time">See you later! - 20 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 18 */}
                            {/* Begin Widget 19 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-19 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>New Meeting</h2>
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
                                    <div className="widget-body p-0">
                                        <div className="form-group row mt-3 mr-0 mb-3 ml-0">
                                            <div className="col-xl-12">
                                                <label className="form-control-label">Meeting Name</label>
                                                <input type="text" defaultValue={"My Meeting"} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row mr-0 mb-3 ml-0">
                                            <div className="col-xl-8 mb-3">
                                                <label className="form-control-label">Date</label>
                                                <select name="meeting-date" className="custom-select form-control">
                                                    <option defaultValue={""}>Select Date</option>
                                                    <option defaultValue={"01"}>Sun 1 April</option>
                                                    <option defaultValue={"02"}>Mon 2 April</option>
                                                    <option defaultValue={"03"}>Tue 3 April</option>
                                                    <option defaultValue={"04"}>Wed 4 April</option>
                                                    <option defaultValue={"05"}>Thu 5 April</option>
                                                    <option defaultValue={"07"}>Fri 6 April</option>
                                                    <option defaultValue={"08"}>Sat 7 April</option>
                                                    <option defaultValue={"09"}>Sun 8 April</option>
                                                    <option defaultValue={"10"}>Mon 9 April</option>
                                                    <option defaultValue={"11"}>Tue 10 April</option>
                                                    <option defaultValue={"12"}>Wed 11 April</option>
                                                    <option defaultValue={"05"}>Thu 12 April</option>
                                                    <option defaultValue={"07"}>Fri 13 April</option>
                                                    <option defaultValue={"08"}>Sat 14 April</option>
                                                    <option defaultValue={"09"}>Sun 15 April</option>
                                                    <option defaultValue={"10"}>Mon 16 April</option>
                                                    <option defaultValue={"11"}>Tue 17 April</option>
                                                    <option defaultValue={"12"}>Wed 18 April</option>
                                                    <option defaultValue={"05"}>Thu 19 April</option>
                                                    <option defaultValue={"07"}>Fri 20 April</option>
                                                    <option defaultValue={"08"}>Sat 21 April</option>
                                                    <option defaultValue={"09"}>Sun 22 April</option>
                                                    <option defaultValue={"10"}>Mon 23 April</option>
                                                    <option defaultValue={"11"}>Tue 24 April</option>
                                                    <option defaultValue={"04"}>Wed 25 April</option>
                                                    <option defaultValue={"05"}>Thu 26 April</option>
                                                    <option defaultValue={"07"}>Fri 27 April</option>
                                                    <option defaultValue={"08"}>Sat 28 April</option>
                                                    <option defaultValue={"09"}>Sun 29 April</option>
                                                    <option defaultValue={"10"}>Mon 30 April</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4">
                                                <label className="form-control-label">Hour</label>
                                                <select name="meeting-hour" className="custom-select form-control">
                                                    <option defaultValue={""}>Select Hour</option>
                                                    <option defaultValue={"01"}>07:00 am</option>
                                                    <option defaultValue={"02"}>08:00 am</option>
                                                    <option defaultValue={"03"}>09:00 am</option>
                                                    <option defaultValue={"04"}>10:00 am</option>
                                                    <option defaultValue={"05"}>11:00 am</option>
                                                    <option defaultValue={"07"}>12:00 am</option>
                                                    <option defaultValue={"08"}>01:00 pm</option>
                                                    <option defaultValue={"09"}>02:00 pm</option>
                                                    <option defaultValue={"10"}>03:00 pm</option>
                                                    <option defaultValue={"08"}>04:00 pm</option>
                                                    <option defaultValue={"09"}>05:00 pm</option>
                                                    <option defaultValue={"10"}>06:00 pm</option>
                                                    <option defaultValue={"08"}>07:00 pm</option>
                                                    <option defaultValue={"09"}>08:00 pm</option>
                                                    <option defaultValue={"10"}>09:00 pm</option>
                                                    <option defaultValue={"08"}>10:00 pm</option>
                                                    <option defaultValue={"09"}>11:00 pm</option>
                                                    <option defaultValue={"10"}>12:00 pm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <ul className="list-group w-100 widget-scroll" style={{ maxHeight:"250px" }}>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-02.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Brandon Smith</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Louis Henry</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Nathan Hunter</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-05.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Megan Duncan</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-06.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Beverly Oliver</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-07.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Lisa Garett</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-08.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Peter Collins</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-09.jpg" alt="..." className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Michael Bradley</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="text-center mt-4 mb-3">
                                            <button type="button" className="btn btn-gradient-01" data-toggle="modal" data-target="#delay-modal">
                                                Create Meeting
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 19 */}
                            {/* Begin Widget 20 */}
                            <div className="col-xl-4">
                                <div className="widget widget-20 has-shadow">
                                    {/* Begin Widget Header */}
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Files</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Manage Files
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Widget Header */}
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="widget20 owl-carousel">
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/03.jpg" alt="..." />
                                                            <div className="card-overlay card-overlay-01">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/04.jpg" alt="..." />
                                                            <div className="card-overlay card-overlay-02">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/05.jpg" alt="..." />
                                                            <div className="card-overlay card-overlay-01">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/02.jpg" alt="..." />
                                                            <div className="card-overlay card-overlay-02">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5 mr-0 ml-0">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-video-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">My Video</a></div>
                                                        <div className="files-number">84 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-audio-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">My Songs</a></div>
                                                        <div className="files-number">786 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-picture-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Photos</a></div>
                                                        <div className="files-number">189 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-zip-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Template</a></div>
                                                        <div className="files-number">36 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-pdf-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Pdf</a></div>
                                                        <div className="files-number">19 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-powerpoint-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Presentation</a></div>
                                                        <div className="files-number">263 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 20 */}
                        </div>
                        {/* End Row */}
                        {/* Begin Row */}
                        <div className="row flex-row">
                            {/* Begin Widget 21 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-21 has-shadow">
                                    <div className="widget-body">
                                        <div className="section-title">
                                            <h3>Hit Rate</h3>
                                        </div>
                                        <div className="hit-rate">
                                            <div className="percent"></div>
                                        </div>
                                        <div className="value-progress text-green">
                                            + 34%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 21 */}
                            {/* Begin Widget 22 */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-22 has-shadow">
                                    <div className="widget-body bg-gradient-03">
                                        <div className="section-title">
                                            <h3>Happy Customers</h3>
                                        </div>
                                        <div className="happy-customers">
                                            <div className="percent"></div>
                                        </div>
                                        <div className="value-progress">
                                            + 54 Today
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 22 */}
                            {/* Begin Widget 23 */}
                            <div className="col-xl-4">
                                <div className="widget widget-23 bg-gradient-02 d-flex justify-content-center align-items-center">
                                    <div className="widget-body text-center">
                                        <i className="ti ti-zip"></i>
                                        <div className="title">Archive Title</div>
                                        <div className="number">Download Archive</div>
                                        <div className="text-center mt-3 mb-3">
                                            <button type="button" className="btn btn-outline-light">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 23 */}
                        </div>
                        {/* End Row */}
                        {/* Begin Row */}
                        <div className="row flex-row">
                            <div className="col-xl-4 col-md-12">
                                {/* Begin Widget 24 */}
                                <div className="widget-24 widget-image has-shadow bg-image">
                                    <div className="overlay"></div>
                                    <div className="content">
                                        <div className="weather-icon text-center">
                                            <i className="meteocons-cloudy"></i>
                                        </div>
                                        <div className="weather-infos text-center">
                                            <div className="temp">24°</div>
                                        </div>
                                        <div className="city">Paris, FR</div>
                                        <div className="week-prev">
                                            <div className="row">
                                                <div className="col-xl-2 text-center">
                                                    <div className="day">MON</div>
                                                    <div className="weather-mini-icon">
                                                        <i className="meteocons-sun"></i>
                                                    </div>
                                                    <div className="weather-temp">26°</div>
                                                </div>
                                                <div className="col-xl-2 text-center">
                                                    <div className="day">TUE</div>
                                                    <div className="weather-mini-icon">
                                                        <i className="meteocons-cloudy"></i>
                                                    </div>
                                                    <div className="weather-temp">30°</div>
                                                </div>
                                                <div className="col-xl-2 text-center">
                                                    <div className="day">WED</div>
                                                    <div className="weather-mini-icon">
                                                        <i className="meteocons-sun"></i>
                                                    </div>
                                                    <div className="weather-temp">32°</div>
                                                </div>
                                                <div className="col-xl-2 text-center">
                                                    <div className="day">THU</div>
                                                    <div className="weather-mini-icon">
                                                        <i className="meteocons-sun"></i>
                                                    </div>
                                                    <div className="weather-temp">27°</div>
                                                </div>
                                                <div className="col-xl-2 text-center">
                                                    <div className="day">FRI</div>
                                                    <div className="weather-mini-icon">
                                                        <i className="meteocons-cloudy2"></i>
                                                    </div>
                                                    <div className="weather-temp">25°</div>
                                                </div>
                                                <div className="col-xl-2 text-center">
                                                    <div className="day">SAT</div>
                                                    <div className="weather-mini-icon">
                                                        <i className="meteocons-windy2"></i>
                                                    </div>
                                                    <div className="weather-temp">31°</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Widget 24 */}
                            </div>
                            {/* Begin Widget 32 */}
                            <div className="col-xl-4">
                                <div className="widget-32 widget-image bg-image">
                                    <div className="overlay"></div>
                                    <div className="content">
                                        <div id="events-day"></div>
                                        <div id="events-date"></div>
                                        <div id="events-year"></div>
                                    </div>
                                    <div className="real-time">
                                        <div id="events-time"></div>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget 32 */}
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </>
        )
    }
}