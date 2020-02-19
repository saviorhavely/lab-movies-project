import React from 'react';
import './style.scss';

const Header = (props) => {
    const {title} = props;

    return(
        <header id="main-header">
            <div className="container text-center">
                {title}
            </div> 
        </header>
    )
}

export default Header;