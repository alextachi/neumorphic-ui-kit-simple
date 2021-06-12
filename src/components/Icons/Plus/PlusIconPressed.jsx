import React from 'react';
import PropTypes from 'prop-types';

const PlusIconPressed = (props) => {
    const { size , ...restProps} = props;
    return (
        <svg width={size} height={size} {...restProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.83334 14.3333H7.51437C8.70304 14.3333 9.66665 15.2969 9.66665 16.4856V21.1667C9.66665 22.4553 10.7113 23.5 12 23.5C13.2887 23.5 14.3333 22.4553 14.3333 21.1667V16.673C14.3333 15.3808 15.3808 14.3333 16.673 14.3333H21.1667C22.4553 14.3333 23.5 13.2887 23.5 12C23.5 10.7113 22.4553 9.66666 21.1667 9.66666H16.2029C15.1704 9.66666 14.3333 8.82961 14.3333 7.79705V2.83334C14.3333 1.54467 13.2887 0.5 12 0.5C10.7113 0.5 9.66665 1.54467 9.66665 2.83334V7.79705C9.66665 8.8296 8.82959 9.66666 7.79703 9.66666H2.83334C1.54467 9.66666 0.5 10.7113 0.5 12C0.5 13.2887 1.54467 14.3333 2.83334 14.3333Z" fill="url(#paint0_linear_plus_icon_pressed)" stroke="url(#paint1_linear_plus_icon_pressed)" />
            <defs>
                <linearGradient id="paint0_linear_plus_icon_pressed" x1="33.0671" y1="27.125" x2="3.91495" y2="5.52432" gradientUnits="userSpaceOnUse">
                    <stop offset="0.245118" stopColor="#545C65" />
                    <stop offset="1" stopColor="#1B2129" />
                </linearGradient>
                <linearGradient id="paint1_linear_plus_icon_pressed" x1="2.68774" y1="6.04167" x2="23.5563" y2="19.7726" gradientUnits="userSpaceOnUse">
                    <stop offset="0.130987" stopColor="#889199" />
                    <stop offset="1" stopColor="#33393D" />
                </linearGradient>
            </defs>
        </svg>

    );
};

PlusIconPressed.propTypes = {
    size: PropTypes.number
};

PlusIconPressed.defaultProps = {
    size: 26
};

export default PlusIconPressed;