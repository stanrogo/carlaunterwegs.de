/**
 * @name about.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Handles fetching and rendering of content in about me section
 */

import apiRequest from "./APIRequest.js";
import HandleBars from '../vendor/handlebars-v4.0.10.js';
import templateRetriever from './templateRetriever.js';
import Helpers from "./helpers.js";

export default class About{

    constructor(){

        this.container = document.querySelector(`.js-about-me`);
    }

    render(){

        return new Promise((resolve, reject) => {

            apiRequest.getEntries().then((entries) => {

                entries.items.some((entry) => {

                    if(!Helpers.dataValid(entry, `about`)){

                        return false;
                    }

                    templateRetriever.retrieve(`about`).then((template) => {

                        const hbTemplate = HandleBars.compile(template);

                        this.container.innerHTML = hbTemplate({
                            title: entry.fields.title,
                            summary: entry.fields.summary
                        });

                        resolve();
                    });

                    return true;
                });
            });
        });
    }
}