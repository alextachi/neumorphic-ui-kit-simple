import React from 'react';
import PropTypes from 'prop-types';

const HomeIconPressed = (props) => {
    const {size, ...restProps} = props;
    return (
        <svg width={size} height={size} {...restProps} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9434 25.5H8.98652H8.94991C8.0382 25.5 7.30332 25.5 6.72535 25.4223C6.12528 25.3416 5.62003 25.169 5.21875 24.7678C4.81747 24.3665 4.64487 23.8612 4.5642 23.2612C4.48649 22.6832 4.4865 21.9483 4.48652 21.0366V21V13.2854C3.72384 13.2838 3.09794 13.2737 2.62024 13.2116C2.06866 13.1398 1.49954 12.9758 1.2398 12.4459C1.20155 12.3679 1.17016 12.2867 1.14598 12.2032C0.981715 11.6364 1.29253 11.1322 1.65242 10.7081C2.02466 10.2695 2.60321 9.74354 3.32376 9.08855L3.35348 9.06153L9.94524 3.06933L9.97076 3.04613C10.5866 2.48626 11.0846 2.03359 11.5263 1.72519C11.9858 1.40436 12.4378 1.20028 12.9652 1.19957C13.4926 1.19886 13.9452 1.40173 14.4055 1.72132C14.8481 2.02854 15.3472 2.47989 15.9646 3.03811L15.9902 3.06121L22.5845 9.02352L22.615 9.05108C23.3558 9.72082 23.9503 10.2583 24.331 10.7065C24.6991 11.1398 25.0154 11.6565 24.8342 12.2345C24.8342 12.2345 24.8342 12.2345 24.8342 12.2345L24.3571 12.0849C24.3444 12.1254 24.3291 12.1651 24.3114 12.2037C24.0436 12.7857 23.0102 12.7857 20.9434 12.7857L16.9434 25.5ZM16.9434 25.5H16.98C17.8917 25.5 18.6266 25.5 19.2045 25.4223C19.8046 25.3416 20.3099 25.169 20.7111 24.7678C21.1124 24.3665 21.285 23.8612 21.3657 23.2612C21.4434 22.6832 21.4434 21.9483 21.4434 21.0366V21V13.2854L16.9434 25.5Z" fill="url(#paint0_linear_pressed)" stroke="url(#paint1_linear_pressed)" />
            <defs>
                <linearGradient id="paint0_linear_pressed" x1="37.8975" y1="29.5" x2="5.44204" y2="3.44768" gradientUnits="userSpaceOnUse">
                    <stop offset="0.245118" stopColor="#545C65" />
                    <stop offset="1" stopColor="#1B2129" />
                </linearGradient>
                <linearGradient id="paint1_linear_pressed" x1="1.99461" y1="6.5" x2="25.4283" y2="23.2036" gradientUnits="userSpaceOnUse">
                    <stop offset="0.130987" stopColor="#889199" />
                    <stop offset="1" stopColor="#33393D" />
                </linearGradient>
            </defs>
        </svg>

    );
};


HomeIconPressed.propTypes = {
    size: PropTypes.number
};

HomeIconPressed.defaultProps = {
    size: 26
};

export default HomeIconPressed;