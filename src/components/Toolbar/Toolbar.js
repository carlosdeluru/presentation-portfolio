import React from 'react';

import SideBarrbutton from '../SideBarr/SideBarrbutton';

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toggle_button">
                <SideBarrbutton click={props.clickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">PRESENTATION</a></div>
            <div className="spacer"/>
            <div className="toolbar__navigation__items">
                <ul>
                    <li ><a href="#resume" >Who i am</a></li>
                    <li ><a href="mailto:aldacor2011@hotmail.com">Contact</a></li>

                </ul>
            </div>
            
        </nav>
    </header>
);

export default toolbar;