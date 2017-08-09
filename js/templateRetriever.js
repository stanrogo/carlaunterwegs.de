/**
 * @name templateRetriever.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Class to retrieve templates from the server and store in memory for easy duplicate access
 * TODO: Implement proper error handling for the requests
 */

class TemplateRetriever{

    constructor(){

        this.storedTemplates = {};
        this.runningRequests = {};
    }

    retrieve(templateName){

        return new Promise((resolve, reject) => {

            if(this.storedTemplates[templateName]){

                resolve(this.storedTemplates[templateName]);
            }
            else if(!this.runningRequests[templateName]){

                this.runningRequests[templateName] = this._doRequest(templateName);
            }

            this.runningRequests[templateName].then((data) => {

                this.storedTemplates[templateName] = data;
                this.runningRequests[templateName] = null;
                resolve(data);
            });
        });
    }

    _doRequest(templateName){

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){

                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){

                    resolve(xhr.responseText);
                }
            };

            xhr.open(`GET`, `modules/${templateName}/${templateName}.hbs`, true);
            xhr.send();
        });
    }
}

let templateRetriever = new TemplateRetriever();

export default templateRetriever;