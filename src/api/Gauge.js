import Api from './Api';

class Gauge extends Api {
    /**
     * A promise request for retrieving the patients available to the currently authenticated user.
     *
     * @return {Promise}
     */
    data(params = {}) {
        return this.get('challenge/frontend', params);
    }
}

export default Gauge;
