/**
 * @name APIRequest.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Construct and execute a request based on defaults which can be overridden
 */

import Helpers from "./helpers.js";

class APIRequest{

    constructor(){

        // Set the parameters needed to construct a request to the server

        this.endPointBase = this._defaultParameters.endPointBase;
        this.spaceID = this._defaultParameters.spaceID;
        this.accessToken = this._defaultParameters.accessToken;

        // The locale for the request is retrieved via the helpers only

        this.locale = Helpers.locale || Helpers.localeTable[this._defaultParameters.locale];

        // Set the cached data and running requests

        this.data = {};
        this.runningRequests = {};
    }

    setCustomOptions(data){

        this.endPointBase = data.endPointBase || this._defaultParameters.endPointBase;
        this.spaceID = data.spaceID || this._defaultParameters.spaceID;
        this.accessToken = data.accessToken || this._defaultParameters.accessToken;
    }

    /**
     * Get some data from the server
     *
     * @return {Promise}
     */

    getEntries(){

        return new Promise((resolve, reject) => {

            if(this.data.entries){

                resolve(this.data.entries);
            }
            else if(!this.runningRequests.entries){

                this.runningRequests.entries = this._get(`entries`);
            }

            this.runningRequests.entries.then((data) => {

                this.data.entries = data;
                this.runningRequests.entries = null;
                resolve(data);
            });
        });
    }

    _get(endPoint){

        return new Promise((resolve, reject) => {

            const URL = this._constructURL(endPoint);

            const request = new XMLHttpRequest();
            request.onreadystatechange = function() {

                if(this.readyState === XMLHttpRequest.DONE && this.status === 200){

                    resolve(JSON.parse(this.responseText));
                }
            };

            request.open(`GET`, URL, true);
            request.send();
        });
    }

    _constructURL(endPoint){

        return `${this.endPointBase}${this.spaceID}/${endPoint}?access_token=${this.accessToken}&locale=${this.locale}`;
    }

    get _defaultParameters(){

        return {
            endPointBase: `https://cdn.contentful.com/spaces/`,
            spaceID: `zb623ajubmgz`,
            accessToken: `1d7129a51099773a878425f241574944d855cedde56d822194b76a4a0e2632cd`,
            locale: 'english'
        }
    }
}

let apiRequest = new APIRequest();

export default apiRequest;