import React from 'react';
import PropTypes from 'prop-types';

const CardsIconPressed = (props) => {
    const { size, ...restProps } = props;
    return (
        <svg width={size} height={size} {...restProps} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 4.29998C25 3.08548 25 2.47823 24.745 2.0229C24.5648 1.70103 24.299 1.43527 23.9772 1.25503C23.5218 1.00006 22.9146 1.00006 21.7001 1.00005L8.63633 1V1C7.44751 1.00002 6.8531 1.00004 6.40506 1.2447C6.06859 1.42844 5.79202 1.70502 5.60829 2.04149C5.36363 2.48953 5.36362 3.08394 5.36361 4.27277L5.36361 5.40005H25L25 4.29998V4.29998Z" fill="url(#paint0_linear_cards_icon_pressed)" />
            <path d="M18.4545 9.80007C19.6595 9.80007 20.6364 10.785 20.6364 12.0001V14.0428L20.856 14.0507C22.8034 14.1209 23.777 14.1559 24.3885 13.5661C25 12.9762 25 12.0019 25 10.0533L25 5.40005H5.36361V9.80007H18.4545Z" fill="url(#paint1_linear_cards_icon_pressed)" />
            <path d="M20.6364 12.0001C20.6364 10.785 19.6595 9.80007 18.4545 9.80007H5.36361H3.18182C1.97683 9.80007 1 10.785 1 12.0001V14.0428H20.6364V12.0001Z" fill="url(#paint2_linear_cards_icon_pressed)" />
            <path d="M1 23H18.4545C19.6595 23 20.6364 22.015 20.6364 20.8V14.0428H1V23Z" fill="url(#paint3_linear_cards_icon_pressed)" />
            <path d="M1 23H18.4545C19.6595 23 20.6364 22.015 20.6364 20.8V14.0428M1 23V12.0001M1 23V14.0428M1 12.0001C1 10.785 1.97683 9.80007 3.18182 9.80007H5.36361M1 12.0001V14.0428M5.36361 9.80007H18.4545C19.6595 9.80007 20.6364 10.785 20.6364 12.0001V14.0428M5.36361 9.80007V5.40005M20.6364 14.0428L20.856 14.0507C22.8034 14.1209 23.777 14.1559 24.3885 13.5661C25 12.9762 25 12.0019 25 10.0533L25 5.40005M20.6364 14.0428H1M5.36361 5.40005H25M5.36361 5.40005L5.36361 4.27277C5.36362 3.08394 5.36363 2.48953 5.60829 2.04149C5.79202 1.70502 6.06859 1.42844 6.40506 1.2447C6.8531 1.00004 7.44751 1.00002 8.63633 1V1L21.7001 1.00005C22.9146 1.00006 23.5218 1.00006 23.9772 1.25503C24.299 1.43527 24.5648 1.70103 24.745 2.0229C25 2.47823 25 3.08548 25 4.29998V4.29998L25 5.40005" stroke="url(#paint4_linear_cards_icon_pressed)" />
            <defs>
                <linearGradient id="paint0_linear_cards_icon_pressed" x1="35.9823" y1="27.125" x2="6.18728" y2="3.04099" gradientUnits="userSpaceOnUse">
                    <stop offset="0.245118" stopColor="#545C65" />
                    <stop offset="1" stopColor="#1B2129" />
                </linearGradient>
                <linearGradient id="paint1_linear_cards_icon_pressed" x1="35.9823" y1="27.125" x2="6.18728" y2="3.04099" gradientUnits="userSpaceOnUse">
                    <stop offset="0.245118" stopColor="#545C65" />
                    <stop offset="1" stopColor="#1B2129" />
                </linearGradient>
                <linearGradient id="paint2_linear_cards_icon_pressed" x1="35.9823" y1="27.125" x2="6.18728" y2="3.04099" gradientUnits="userSpaceOnUse">
                    <stop offset="0.245118" stopColor="#545C65" />
                    <stop offset="1" stopColor="#1B2129" />
                </linearGradient>
                <linearGradient id="paint3_linear_cards_icon_pressed" x1="35.9823" y1="27.125" x2="6.18728" y2="3.04099" gradientUnits="userSpaceOnUse">
                    <stop offset="0.245118" stopColor="#545C65" />
                    <stop offset="1" stopColor="#1B2129" />
                </linearGradient>
                <linearGradient id="paint4_linear_cards_icon_pressed" x1="2.84118" y1="6.04167" x2="24.3705" y2="21.4951" gradientUnits="userSpaceOnUse">
                    <stop offset="0.130987" stopColor="#889199" />
                    <stop offset="1" stopColor="#33393D" />
                </linearGradient>
            </defs>
        </svg>

    );
};

CardsIconPressed.propTypes = {
    size: PropTypes.number
};

CardsIconPressed.defaultProps = {
    size: 26
};

export default CardsIconPressed;