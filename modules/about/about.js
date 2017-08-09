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

        super(document.querySelector(`.js-about-me`), `about`, `about`);
    }

    _fillTemplateObject(entry){

        return {
            title: entry.title,
            summary: entry.summary
        }
    }
}