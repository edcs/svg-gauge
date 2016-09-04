import gaugeFetch from './sagas/gauge-fetch';

export default function* rootSaga() {
    yield [
        gaugeFetch(),
    ];
}
