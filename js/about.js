/**
 * @name about.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Handles fetching and rendering of content in about me section
 */

import APIRequest from "./APIRequest.js";

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

                    this.container.innerHTML = `
                    <h1 class="about-me--heading teal white-text">${data.fields.title}</h1>
                    <div class="about-me--text">${data.fields.summary}</div>
                `;

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