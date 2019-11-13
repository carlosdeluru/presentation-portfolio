import React from 'react';

import './SideBarr.css';

const SideBarr = props => {
    let barraClasses = 'side-barr';
    if(props.show){
        barraClasses ='side-barr open';
    }
   return( 
    <nav className={barraClasses} >
        <ul>
            <li><a href="#resume">Who i am </a></li>
            <li><a href="mailto:aldacor2011@hotmail.com">Contact</a></li>
        </ul>
    </nav>
   );
 };

export default SideBarr;