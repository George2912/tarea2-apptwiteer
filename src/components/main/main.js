import React from 'react';
import PrimaryCol from '../primaryCol/primary-col';
import SidebarCol from '../sidebarCol/sidebar-col';

const Main = (props) => {
    return (
        <div className="t-main">
            <PrimaryCol profileUrl={props.profileUrl} />
            <SidebarCol />
        </div>
    )
}

export default Main;