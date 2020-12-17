import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Image from './image';
import About from './about';

function Display(){
    return(
        <div>
            <App />
            <Image />
            <About />
        </div>
    )
}



ReactDOM.render(<Display />, document.getElementById('root'));