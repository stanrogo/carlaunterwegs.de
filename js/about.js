/**
 * @name about.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Handles fetching and rendering of content in about me section
 */

import APIRequest from "./APIRequest.js";
import HandleBars from '../vendor/handlebars-v4.0.10.js';
import templateRetriever from './templateRetriever.js';

export default class About{

    constructor(){

        this.container = document.querySelector(`.js-about-me`);
    }

    render(){

        return new Promise((resolve, reject) => {

            const request = new APIRequest();
            request.get('entries').then((data)=> {

                data.items.some((data) => {

                    if(!About.hasContent(data)){

                        return false;
                    }

                    templateRetriever.retrieve(`about`).then((template) => {

                        const hbTemplate = HandleBars.compile(template);

                        this.container.innerHTML = hbTemplate({
                            title: data.fields.title,
                            summary: data.fields.summary
                        });
                    });

                    return true;
                });

                resolve();
            });
        });
    }

    static hasContent(data){

        const isAboutSection = data.sys.contentType.sys.id === 'about';
        return isAboutSection && !!data.fields.summary;
    }
}