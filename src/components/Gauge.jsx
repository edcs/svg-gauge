import React from 'react';

const style = {
    arc: {
        fill: 'none',
        strokeMiterlimit: 10,
        stroke: '#999',
        strokeWidth: 50,
    },
    dialCenter: {
        fill: 'none',
        strokeMiterlimit: 10,
        stroke: '#999',
        strokeWidth: 10,
    },
    dialArm: {
        fill: '#999',
    },
    blank: {
        fill: '#4D4D4D',
    },
};

export default () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 610 335">
        <path
            style={style.arc}
            d="M585 312.5c0-154.64-125.36-280-280-280S25 157.86 25 312.5"
            id="gauge"
        />
        <g
            id="dial"
            transform="rotate(0, 304.5, 312.5)"
        >
            <circle
                style={style.dialCenter}
                cx="304.5"
                cy="312.5"
                r="16"
            />
            <path
                style={style.blank}
                d="M279.5 0h50v65h-50z"
            />
            <path
                style={style.dialArm}
                d="M310.5 295V32.5c0-7.72-12-7.73-12 0V295c0 7.72 12 7.73 12 0z"
            />
        </g>
    </svg>
);
