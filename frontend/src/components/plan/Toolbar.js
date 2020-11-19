import React from 'react';

import {Link} from "react-router-dom";

import'./Toolbar.css';

const toolbar = props => (

    <header className="toolbar" >
        <nav className="toolbar_nav">


            <div></div>
            <div className="toolbar_logo"><a href="/">Dash-Bord </a></div>
            <div className="espace"/>

            <div className="toolbar_nav_items">
                <ul>
                    <li><Link href="/admin" to="/admin">Admin</Link></li>
                    
                </ul>


            </div>
        </nav>





    </header>
);
export default toolbar;