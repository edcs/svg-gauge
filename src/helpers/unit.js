import currency from 'currency-symbol.js';

/**
 * Adds the unit prefix to the start of the value string.
 *
 * @param {Number} value
 * @param {String} format
 * @param {String} unit
 * @return {*}
 */
export default (value, unit) => (
    currency.symbolize(unit) + value
);
