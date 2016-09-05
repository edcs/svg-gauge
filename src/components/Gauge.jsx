import React from 'react';

import createTransform from '../helpers/transform';
import parseNumber from '../helpers/unit';

const style = {
    wrapper: {
        width: 500,
    },
    svg: {
        marginRight: 25,
        marginLeft: 25,
    },
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
    text: {
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
        fontSize: 50,
        color: '#999',
    },
    textContainer: {
        display: 'flex',
        width: '100%',
    },
    upperText: {
        flexDirection: 'column',
        textAlign: 'center',
        width: '100%',
        fontSize: 80,
    },
    lowerText: {
        flexDirection: 'column',
        width: '50%',
    },
    lowerTextRight: {
        textAlign: 'right',
    },
};

const Gauge = ({ value, min, max, unit }) => (
    <div style={style.wrapper}>
        <div style={style.textContainer}>
            <div style={{ ...style.text, ...style.upperText }}>
                {parseNumber(value, unit)}
            </div>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 610 335" style={style.svg}>
                <path
                    style={style.arc}
                    d="M585 312.5c0-154.64-125.36-280-280-280S25 157.86 25 312.5"
                    id="gauge"
                />
                <g
                    id="dial"
                    transform={createTransform(value, min, max)}
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
        </div>
        <div style={style.textContainer}>
            <div style={{ ...style.text, ...style.lowerText }}>
                {parseNumber(min, unit)}
            </div>
            <div style={{ ...style.text, ...style.lowerText, ...style.lowerTextRight }}>
                {parseNumber(max, unit)}
            </div>
        </div>
    </div>
);

Gauge.propTypes = {
    value: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    unit: React.PropTypes.string,
};

export default Gauge;
