import React from 'react';

import '../App.css'

function Home(props) {
    return (
        <div>
            <div className='container-fluid '>
                <h1>{props.title}</h1>
                
            </div>
        </div>
    )
}

export default  Home;