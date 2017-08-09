/**
 * @name about.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Handles fetching and rendering of content in about me section
 */

import DataModule from '../../js/dataModule.js';

export default class About extends DataModule{

    constructor(){

        super(document.getElementsByClassName(`js-about-me`)[0], `about`, `about`);
    }

    _fillTemplateObject(entries){

        const genObject = {};

        if(entries.length > 0){

            genObject.title = entries[0].fields.title;
            genObject.summary = entries[0].fields.summary;
        }

        return genObject;
    }
}