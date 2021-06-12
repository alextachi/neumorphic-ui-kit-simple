import React from 'react';
import PropTypes from 'prop-types';

const HomeIcon = (props) => {
    const { size, ...restProps} = props;
    return (
        <svg width={size} height={size} {...restProps} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ii_default_button)">
                <path d="M6.98652 25H18.9434C20.0479 25 20.9434 24.1046 20.9434 23V12.7857H23.4029C24.3183 12.7857 24.7526 11.6579 24.0736 11.044L14.3099 2.21605C13.5467 1.52603 12.3846 1.52759 11.6233 2.21965L1.91405 11.0458C1.2377 11.6606 1.67266 12.7857 2.5867 12.7857H4.98652V23C4.98652 24.1046 5.88195 25 6.98652 25Z" stroke="url(#paint0_linear_default_button)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_ii_default_button" x="0.0826721" y="0.199585" width="25.8243" height="26.3004" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
                <linearGradient id="paint0_linear_default_button" x1="26" y1="27.1818" x2="-0.257621" y2="4.57191" gradientUnits="userSpaceOnUse">
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

HomeIcon.propTypes = {
    size: PropTypes.number
};

HomeIcon.defaultProps = {
    size: 26
};

export default HomeIcon;