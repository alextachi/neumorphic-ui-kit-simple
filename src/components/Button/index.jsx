import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const ButtonDark = (props) => {    
    const {children, curved, soft, circle, className, ...newProps} = props;

    return (
        <button
            className={classNames(`dark-button ${className ? className : ''}`, {
                'dark-button--curved': curved,
                'dark-button--soft': soft,
                'dark-button--circle': circle
            })}
           {...newProps}
        >
            <div className='dark-button__bg-holder'>
                <div className="dark-button__bg"></div>
            </div>
            <div className='dark-button__wrapper'>
                {children}
            </div>
        </button>
    );
};

ButtonDark.propTypes = {
    className: PropTypes.string
};

export default ButtonDark; 