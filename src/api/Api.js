import client from 'superagent';
import promises from 'superagent-promise-plugin';

const URL = 'https://widgister.herokuapp.com/';

class Api {
    /**
     * API wrapper constructor.
     */
    constructor() {
        this.client = client;
    }

    /**
     * Creates a promise for a get request.
     *
     * @param {string} uri
     * @param {*} query
     * @param {*} headers
     * @return {Promise}
     */
    get(uri, query = {}, headers = {}) {
        return this.client.get(URL + uri)
                          .use(promises)
                          .set({ ...headers, ...this.headers })
                          .query(query);
    }
}

export default Api;
