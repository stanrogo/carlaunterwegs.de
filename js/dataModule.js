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

                const clonedEntries = JSON.parse(JSON.stringify(entries));

                // Filter the entries on only the current content type

                clonedEntries.items = clonedEntries.items.filter(entry => this._dataValid(entry));

                // Sort the entries

                clonedEntries.items.sort(this._sortEntries);

                // Finally, render the entries to the template

                templateRetriever.retrieve(this.moduleName).then((template) => {

                    const hbTemplate = HandleBars.compile(template);
                    const generatedObject = this._fillTemplateObject(clonedEntries.items);
                    this.container.innerHTML = hbTemplate(generatedObject);
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

    _dataValid(data){

        const isCorrectContent = data.sys.contentType.sys.id === this.contentType;
        let hasRequiredField = false;

        switch(this.contentType){
            case `about`:
                hasRequiredField = !!data.fields.summary;
                break;

            case `post`:
                hasRequiredField = !!data.fields.content;
                break;
        }

        return isCorrectContent && hasRequiredField;
    }
}