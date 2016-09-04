import * as types from './action-types';

/**
 * Action to fetch gauge data from api.
 */
export const fetchGauge = () => ({
    type: types.FETCH_GAUGE,
});

/**
 * Stores the fetched gauge data in state.
 *
 * @param model
 */
export const fetchedGauge = (gauge) => ({
    type: types.FETCHED_GAUGE,
    gauge,
});
