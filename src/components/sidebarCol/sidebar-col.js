import React from 'react';

import SearchBar from '../searchBar/searchbar';
import Trends from '../trends';

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <SearchBar />
            <Trends />
        </div>
    )
}

export default SidebarCol;