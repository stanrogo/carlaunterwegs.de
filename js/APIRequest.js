/**
 * @name APIRequest.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Construct and execute a request based on defaults which can be overridden
 */

import Helpers from "./helpers.js";

export default class APIRequest{

    constructor(data = {}){

        // Set the parameters needed to construct a request to the server
        // I don't know why we would need to change these, but it helps to have these in here

        this.endPointBase = data.endPointBase || APIRequest.defaultParameters.endPointBase;
        this.spaceID = data.spaceID || APIRequest.defaultParameters.spaceID;
        this.accessToken = data.accessToken || APIRequest.defaultParameters.accessToken;
        this.locale = data.locale || APIRequest.defaultParameters.locale;
    }

    /**
     * Get some data from the server
     *
     * @param {String} endPoint
     * @return {Promise}
     */

    get(endPoint){

        return new Promise((resolve, reject) => {

            const URL = this.constructURL(endPoint);

            const request = new XMLHttpRequest();
            request.onreadystatechange = function() {

                if (this.readyState === 4 && this.status === 200) {

                    resolve(JSON.parse(this.responseText));
                }
            };

            request.open(`GET`, URL, true);
            request.send();
        });
    }

    constructURL(endPoint){

        return `${this.endPointBase}${this.spaceID}/${endPoint}?access_token=${this.accessToken}&locale=${this.locale}`;
    }

    static get defaultParameters(){

        return {
            endPointBase: `https://cdn.contentful.com/spaces/`,
            spaceID: `zb623ajubmgz`,
            accessToken: `1d7129a51099773a878425f241574944d855cedde56d822194b76a4a0e2632cd`,
            locale: Helpers.localeTable.english
        }
    }
}