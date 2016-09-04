import { FETCHED_GAUGE } from '../action-types';

const initialState = {
    value: 0,
    min: 0,
    max: 100,
    format: 'currency',
    unit: 'gbp',
};

export default (state = initialState, { type, ...newState }) => {
    switch (type) {
        case FETCHED_GAUGE:
            return {
                ...state,
                value: newState.gauge.value,
                min: newState.gauge.min,
                max: newState.gauge.max,
                format: newState.gauge.format,
                unit: newState.gauge.unit,
            };

        default:
            return state;
    }
};
