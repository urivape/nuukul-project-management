import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
            <header className="header">
                <nav className="navbar fixed-top">         
                    <div className="search-box">
                        <button className="dismiss"><i className="ion-close-round"></i></button>
                        <form id="searchForm" action="#" role="search">
                            <input type="search" placeholder="Search something ..." className="form-control" />
                        </form>
                    </div>
                    <div className="navbar-holder d-flex align-items-center align-middle justify-content-between">
                        <div className="navbar-header">
                            <a href="db-default.html" className="navbar-brand">
                                <div className="brand-image brand-big">
                                    <img src={"assets/img/logo-big.png"} alt="logo" className="logo-big" />
                                </div>
                                <div className="brand-image brand-small">
                                    <img src={"assets/img/logo.png"} alt="logo" className="logo-small" />
                                </div>
                            </a>
                            <a id="toggle-btn" href="#" className="menu-btn active">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                        <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right">
                            <li className="nav-item d-flex align-items-center"><a id="search" href="#"><i className="la la-search"></i></a></li>
                            <li className="nav-item dropdown"><a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="la la-bell animated infinite swing"></i><span className="badge-pulse"></span></a>
                                <ul aria-labelledby="notifications" className="dropdown-menu notification">
                                    <li>
                                        <div className="notifications-header">
                                            <div className="title">Notifications (4)</div>
                                            <div className="notifications-overlay"></div>
                                            <img src={"assets/img/notifications/01.jpg"} alt="..." className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="message-icon">
                                                <i className="la la-user"></i>
                                            </div>
                                            <div className="message-body">
                                                <div className="message-body-heading">
                                                    New user registered
                                                </div>
                                                <span className="date">2 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="message-icon">
                                                <i className="la la-calendar-check-o"></i>
                                            </div>
                                            <div className="message-body">
                                                <div className="message-body-heading">
                                                    New event added
                                                </div>
                                                <span className="date">7 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="message-icon">
                                                <i className="la la-history"></i>
                                            </div>
                                            <div className="message-body">
                                                <div className="message-body-heading">
                                                    Server rebooted
                                                </div>
                                                <span className="date">7 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="message-icon">
                                                <i className="la la-twitter"></i>
                                            </div>
                                            <div className="message-body">
                                                <div className="message-body-heading">
                                                    You have 3 new followers
                                                </div>
                                                <span className="date">10 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="nofollow" href="#" className="dropdown-item all-notifications text-center">View All Notifications</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a id="user" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><img src={"assets/img/avatar/avatar-01.jpg"} alt="..." className="avatar rounded-circle"/></a>
                                <ul aria-labelledby="user" className="user-size dropdown-menu">
                                    <li className="welcome">
                                        <a href="#" className="edit-profil"><i className="la la-gear"></i></a>
                                        <img src={"assets/img/avatar/avatar-01.jpg"} alt="..." className="rounded-circle" />
                                    </li>
                                    <li>
                                        <a href="pages-profile.html" className="dropdown-item"> 
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app-mail.html" className="dropdown-item"> 
                                            Messages
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item no-padding-bottom"> 
                                            Settings
                                        </a>
                                    </li>
                                    <li className="separator"></li>
                                    <li>
                                        <a href="pages-faq.html" className="dropdown-item no-padding-top"> 
                                            Faq
                                        </a>
                                    </li>
                                    <li><a rel="nofollow" href="pages-login.html" className="dropdown-item logout text-center"><i className="ti-power-off"></i></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a rel="nofollow" href={ pathLogout } className="nav-link logout text-center" onClick={ (event) => { event.preventDefault(); document.getElementById('logout-form').submit(); } }><i className="ti-power-off"></i></a>
                                <form id="logout-form" action={ pathLogout } method="POST" style={{ display: "none" }}><input type="hidden" name="_token" value={csrf_token} /></form>
                            </li>
                            <li className="nav-item"><a href="#off-canvas" className="open-sidebar"><i className="la la-ellipsis-h"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
	}
}