// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Preloader from './Components/Preloader.jsx';
import Login from './Pages/Login.jsx';

import Header from './Components/Header.jsx';
import Dashboard_Default from './Pages/Dashboard_Default.jsx';
import Dashboard_Clean from './Pages/Dashboard_Clean.jsx';
import Dashboard_Compact from './Pages/Dashboard_Compact.jsx';
import Widgets from './Pages/Widgets.jsx';
import Basic_Tables from './Pages/Basic_Tables.jsx';
import MisActividades from './Pages/Lista_Actividades.jsx';

if (document.querySelector('#nuukulLogin') != null) {
    render(
        <>
            {/*<Preloader />*/}
            <Login />
        </>
        , document.querySelector('#nuukulLogin')
    );
}

if (document.querySelector('#nuukulApp') != null) {
    render(
        <>
            {/*<Preloader />*/}
            <Header />
            <div className="page-content d-flex align-items-stretch">
                <Router history={browserHistory}>
                    <Route path="/" component={Dashboard_Default} />
                    <Route path="/dashboard_default" component={Dashboard_Default} />
                    <Route path="/dashboard_clean" component={Dashboard_Clean} />
                    <Route path="/dashboard_compact" component={Dashboard_Compact} />
                    <Route path="/widgets" component={Widgets}/>
                    <Route path="/tables_basic" component={Basic_Tables}/>
                    <Route path="/lista_actividades" component={MisActividades}/>
                </Router>
            </div>
        </>
        , document.getElementById('nuukulApp')
    );
}