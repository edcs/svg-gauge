import reducer from '../gauge';
import { FETCHED_GAUGE } from '../../action-types';

test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        value: 0,
        min: 0,
        max: 100,
        format: 'currency',
        unit: 'gbp',
    });
});

test('should handle FETCHED_GAUGE', () => {
    expect(reducer([], {
        type: FETCHED_GAUGE,
        gauge: {
            value: 200,
            min: 100,
            max: 300,
            format: 'currency',
            unit: 'usd',
        }
    })).toEqual({
        value: 200,
        min: 100,
        max: 300,
        format: 'currency',
        unit: 'usd',
    });
});
