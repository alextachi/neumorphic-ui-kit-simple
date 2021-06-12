import React from 'react';
import classNames from 'classnames';

import './input.scss';

const Input = (props) => {
    const {icon, ...restProps} = props;

    return (
        <div className={classNames('form-input__wrapper', {
            'form-input__wrapper--with-icon': icon
        })} >
            <div className="form-input__bg-holder">
                <div className="form-input__bg"></div>
            </div>
            <input
                className='form-input'
                {...restProps}
            />

            {icon &&
                <div className="form-input__icon">{icon}</div>
            }
        </div>

    );
};

export default Input;