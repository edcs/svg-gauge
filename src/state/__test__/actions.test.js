import fetchGauge from '../actions';
import { FETCH_GAUGE } from '../action-types';

test('creates action to fetch gauge data', () => {
    const expected = {
        type: FETCH_GAUGE,
    };

    expect(fetchGauge()).toEqual(expected);
});
