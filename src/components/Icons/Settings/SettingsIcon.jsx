import React from 'react';
import PropTypes from 'prop-types';

const SettingsIcon = (props) => {
    const { size, ...restProps } = props;
    return (
        <svg width={size} height={size} { ...restProps} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ii_settings_icon)">
                <path d="M19.0926 12.3251C18.8087 12.1084 18.6681 11.7573 18.6919 11.401C18.7007 11.2682 18.7058 11.1345 18.7058 11C18.7058 10.8658 18.7007 10.7324 18.6919 10.5998C18.6682 10.2431 18.8092 9.89156 19.0936 9.675L20.8077 8.37C21.003 8.22 21.0595 7.95 20.931 7.73L18.8754 4.265C18.747 4.05 18.4797 3.96 18.2485 4.05L16.2071 4.85167C15.8851 4.9781 15.5232 4.92518 15.2325 4.73765C14.9891 4.58058 14.7361 4.43601 14.4741 4.30561C14.1565 4.14758 13.921 3.85438 13.8699 3.50335L13.5669 1.42C13.5207 1.185 13.31 1 13.053 1H8.94185C8.6849 1 8.47421 1.185 8.4331 1.42L8.13009 3.50335C8.07904 3.85438 7.84351 4.14755 7.5256 4.30491C7.26448 4.43416 7.01237 4.57733 6.76972 4.73401C6.47734 4.92281 6.1132 4.97744 5.78924 4.85022L3.75152 4.05C3.52026 3.965 3.25304 4.05 3.12457 4.265L1.06899 7.73C0.940514 7.945 0.997043 8.215 1.19232 8.37L2.90225 9.67494C3.18612 9.89157 3.32673 10.2427 3.30299 10.599C3.29413 10.7318 3.28901 10.8655 3.28901 11C3.28901 11.1345 3.29413 11.2682 3.30299 11.401C3.32673 11.7573 3.18612 12.1084 2.90225 12.3251L1.19232 13.63C0.997043 13.78 0.940514 14.05 1.06899 14.27L3.12457 17.735C3.25304 17.95 3.52026 18.04 3.75152 17.95L5.79293 17.1483C6.11489 17.0219 6.47681 17.0748 6.76746 17.2623C7.01091 17.4194 7.26387 17.564 7.52593 17.6944C7.8435 17.8524 8.07904 18.1456 8.13009 18.4966L8.4331 20.58C8.47421 20.815 8.6849 21 8.94185 21H13.053C13.31 21 13.5207 20.815 13.5618 20.58L13.8648 18.4966C13.9158 18.1456 14.1513 17.8524 14.4693 17.6951C14.7304 17.5658 14.9825 17.4227 15.2251 17.266C15.5175 17.0772 15.8817 17.0226 16.2056 17.1498L18.2433 17.95C18.4746 18.035 18.7418 17.95 18.8703 17.735L20.9259 14.27C21.0543 14.055 20.9978 13.785 20.8025 13.63L19.0926 12.3251ZM10.9974 14.5C9.00866 14.5 7.40017 12.935 7.40017 11C7.40017 9.065 9.00866 7.5 10.9974 7.5C12.9862 7.5 14.5947 9.065 14.5947 11C14.5947 12.935 12.9862 14.5 10.9974 14.5Z" stroke="url(#paint0_linear_settings_icon)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_ii_settings_icon" x="-0.500641" y="-0.5" width="23.0008" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
                <linearGradient id="paint0_linear_settings_icon" x1="21" y1="22.8182" x2="-0.555832" y2="5.68468" gradientUnits="userSpaceOnUse">
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

SettingsIcon.propTypes = {
    size: PropTypes.number
};

SettingsIcon.defaultProps = {
    size: 26
};


export default SettingsIcon;