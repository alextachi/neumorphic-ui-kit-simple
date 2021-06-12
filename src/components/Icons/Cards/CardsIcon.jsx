import React from 'react';
import PropTypes from 'prop-types';

const CardsIcon = (props) => {
    const { size, ...restProps} = props;
    return (
        <svg width={size} height={size} {...restProps} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ii_cards_icon)">
                <path d="M1 23H18.4545C19.6595 23 20.6364 22.015 20.6364 20.8V14.0428M1 23V12.0001M1 23V14.0428M1 12.0001C1 10.785 1.97683 9.80007 3.18182 9.80007H5.36361M1 12.0001V14.0428M5.36361 9.80007H18.4545C19.6595 9.80007 20.6364 10.785 20.6364 12.0001V14.0428M5.36361 9.80007V5.40005M20.6364 14.0428L22.928 14.1253C24.0601 14.1661 25 13.2594 25 12.1266L25 5.40005M20.6364 14.0428H1M5.36361 5.40005H25M5.36361 5.40005L5.36362 3.00001C5.36363 1.89546 6.25903 1.00005 7.36358 1.00003L8.63633 1L23 1.00006C24.1046 1.00006 25 1.89551 25 3.00008L25 4.29998L25 5.40005" stroke="url(#paint0_linear)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_ii_cards_icon" x="-0.5" y="-0.5" width="27" height="25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
                <linearGradient id="paint0_linear" x1="25" y1="25" x2="0.906172" y2="4.10821" gradientUnits="userSpaceOnUse">
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

CardsIcon.propTypes = {
    size: PropTypes.number
};

CardsIcon.defaultProps = {
    size: 26
};

export default CardsIcon;