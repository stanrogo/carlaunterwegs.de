/**
 * Construct and execute a request based on defaults which can be overridden
 */

class APIRequest{

    constructor(data = {}){

        this.endPointBase = data.endPointBase ||`https://cdn.contentful.com/spaces/`;
        this.spaceID = data.spaceID || `zb623ajubmgz`;
        this.accessToken = data.accessToken || `1d7129a51099773a878425f241574944d855cedde56d822194b76a4a0e2632cd`;
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

        return `${this.endPointBase}${this.spaceID}/${endPoint}?access_token=${this.accessToken}`;
    }
}