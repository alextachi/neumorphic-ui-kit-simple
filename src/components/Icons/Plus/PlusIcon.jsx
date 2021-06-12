import React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = (props) => {
    const { size , ...restProps} = props;
    return (
        <svg width={size} height={size} {...restProps} viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ii_plus_icon)">
                <g filter="url(#filter1_dd_plus_icon)">
                    <path d="M10.8333 20.8333H15.5144C16.9792 20.8333 18.1666 22.0208 18.1666 23.4856V28.1667C18.1666 29.1792 18.9875 30 20 30C21.0125 30 21.8333 29.1792 21.8333 28.1667V23.673C21.8333 22.1047 23.1047 20.8333 24.673 20.8333H29.1667C30.1792 20.8333 31 20.0125 31 19C31 17.9875 30.1792 17.1667 29.1667 17.1667H24.2029C22.8942 17.1667 21.8333 16.1057 21.8333 14.797V9.83334C21.8333 8.82081 21.0125 8 20 8C18.9875 8 18.1666 8.82081 18.1666 9.83334V14.797C18.1666 16.1057 17.1057 17.1667 15.797 17.1667H10.8333C9.82081 17.1667 9 17.9875 9 19C9 20.0125 9.82081 20.8333 10.8333 20.8333Z" stroke="url(#paint0_linear_plus_icon)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <filter id="filter0_ii_plus_icon" x="7.5" y="6.5" width="25" height="25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-0.5" dy="-0.5" />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="0.5" dy="0.5" />
                    <feGaussianBlur stdDeviation="0.25" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.127604 0 0 0 0 0.267969 0 0 0 0 0.408333 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
                </filter>
                <filter id="filter1_dd_plus_icon" x="0" y="0" width="40" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.239843 0 0 0 0 0.396078 0 0 0 0.26 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="-2" dy="-1" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_plus_icon" x1="31" y1="32" x2="7.28858" y2="13.1531" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2D3134" />
                    <stop offset="0.234375" stopColor="#57636E" />
                    <stop offset="0.442708" stopColor="#EBEFF3" />
                    <stop offset="0.682292" stopColor="#AFBBC7" />
                    <stop offset="1" stopColor="#768BA2" />
                </linearGradient>
            </defs>
        </svg>

    );
};

PlusIcon.propTypes = {
    size: PropTypes.number
};

PlusIcon.defaultProps = {
    size: 26
};


export default PlusIcon;