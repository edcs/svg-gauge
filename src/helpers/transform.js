/**
 * Creates an SVG transform for for the gauges needle using the supplied values. 90 degrees is subtracted from the
 * calculated angle as the 'resting' position of the needle is at 12 o'clock.
 *
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @return {string}
 */
export default (value, min, max) => {
    const percentage = (value - min) / (max - min);
    const angle = (percentage * 180) - 90;

    return `rotate(${angle}, 304.5, 312.5)`;
};
