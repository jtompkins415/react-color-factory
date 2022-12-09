import React from 'react';
import {Link} from 'react-router-dom'
import './Color.css'

const Color = ({color, hex, history}) => {
    if(!hex){
        history.push('/colors')
    }

    return (
        <div className='Color' style={{backgroundColor: hex}}>
            <h1>THIS IS {color.toUpperCase()}</h1>
            <h3>IT'S MY FAVORITE!</h3>
            <div>
                <Link to='/'>GO BACK</Link>
            </div>
        </div>
    )
}

export default Color