/**
 * @name dataModule.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Handles fetching and rendering of content in about me section
 */

import apiRequest from "./APIRequest.js";
import HandleBars from '../vendor/handlebars-v4.0.10.js';
import templateRetriever from './templateRetriever.js';

export default class DataModule{

    constructor(container, contentType, moduleName){

        this.container = container;
        this.contentType = contentType;
        this.moduleName = moduleName;
    }

    render(){

        return new Promise((resolve, reject) => {

            apiRequest.getEntries().then((entries) => {

                entries.items.sort(this._sortEntries);

                entries.items.forEach((entry) => {

                    if(this._dataInvalid(entry, this.contentType)) return;

                    templateRetriever.retrieve(this.moduleName).then((template) => {

                        const hbTemplate = HandleBars.compile(template);
                        const generatedObject = this._fillTemplateObject(entry.fields);
                        this.container.innerHTML += hbTemplate(generatedObject);
                    });
                });

                resolve();
            });
        });
    }

    _sortEntries(a, b){

        return a === b;
    }

    _fillTemplateObject(entry){

        return {};
    }

    _dataInvalid(data, contentType){

        const isCorrectContent = data.sys.contentType.sys.id === contentType;
        let hasRequiredField = false;

        switch(contentType){
            case `about`:
                hasRequiredField = !!data.fields.summary;
                break;

            case `post`:
                hasRequiredField = !!data.fields.content;
                break;
        }

        return !isCorrectContent || !hasRequiredField;
    }
}