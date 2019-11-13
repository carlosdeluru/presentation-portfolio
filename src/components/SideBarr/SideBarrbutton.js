import React from 'react';

import './sideBarrbutton.css';

const SideBarrButton = props => (
    <button className="button" onClick={props.click}>
        <div className="button__line"/>
        <div className="button__line"/>
        <div className="button__line"/>

    </button>
);

export default SideBarrButton;