import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder , clickmethod }) => (

    <input 
    type='search' 
    className = 'search'
    placeholder= {placeholder}
    onChange = { clickmethod } />

);