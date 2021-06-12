import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Toggle = (props) => {

    const {
        text,
        onChange,
    } = props;

    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <div className="toggle__wrapper">
            <label className={`toggle__label ${isChecked ? 'toggle__label--checked' : ''}`}>
                <span className="toggle__controls">
                    <span className="toggle__content">
                        <span className="toggle__bg-holder">
                            <span className="toggle__bg"></span>
                        </span>
                        <input
                            {...props}
                            type="checkbox"
                            className="toggle"
                            checked={isChecked} onChange={(e) => {
                                setIsChecked(!isChecked);
                                onChange(e);
                            }}

                        />
                    </span>
                    <span className="toggle__led">
                        <span className="toggle__led-inner">
                            <span className="toggle__led-lamp"></span>
                        </span>
                    </span>
                </span>
                <span className="toggle__text">{text}</span>
            </label>
        </div>
    );
};

Toggle.propTypes = {
    onChange: PropTypes.func
};

Toggle.defaultProps = {
    onChange: (e) => { }
};

export default Toggle;