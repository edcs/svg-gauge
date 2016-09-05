import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { gauge } from '../../api/client';
import { FETCH_GAUGE, FETCHED_GAUGE } from '../action-types';

const fetchGauge = function* () {
    try {
        const response = yield gauge.data().then((data) => {
            return data.body;
        }).catch((error) => {
            throw error;
        });

        yield put({ type: FETCHED_GAUGE, gauge: response });
    } catch (error) {
        console.log(error);
    }
};

/**
 * Watches for gauge fetch state change.
 */
export default function* () {
    yield* takeEvery(FETCH_GAUGE, fetchGauge);
}
