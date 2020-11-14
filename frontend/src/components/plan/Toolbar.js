import React from 'react';

import {Link} from "react-router";
import'./Toolbar.css';
const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar_nav">


            <div></div>
            <div className="toolbar_logo"><a href="/">Dash-Bord</a></div>
            <div className="espace"/>
            <div className="toolbar_nav_items">
                <ul>
                    
                    
                    <li>Admin</li>
                    
                </ul>


            </div>
        </nav>





    </header>
);
export default toolbar;