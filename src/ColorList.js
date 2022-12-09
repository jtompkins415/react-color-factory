import React from 'react';
import {Link} from 'react-router-dom';
import './ColorList.css';

const ColorList = ({colors}) => {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));

    return (
        <div className='ColorList'>
            <header className='ColorList-header'>
                <h1 className='ColorList-title'> Color Pick'em </h1>
                <h2>
                    <Link to='/colors/new'>Add a Color</Link>
                </h2>
            </header>
            <div className='ColorList-pick'>
                <h3>Please choose a color</h3>
                <ul>{colorLinks}</ul>
            </div>
        </div>
    )
}

export default ColorList 