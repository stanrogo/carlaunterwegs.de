/**
 * @name post.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Create a post object that can render itself to the DOM
 */

import Helpers from './helpers.js';
import HandleBars from '../vendor/handlebars-v4.0.10.js';
import templateRetriever from './templateRetriever.js';

export default class Post{

    constructor(data){

        this.title = data.fields.title;
        this.content = Helpers.customMarkedInstance(data.fields.content);
        this.tags = data.fields.tags || [];
        this.date = new Date(data.fields.date);
        this.timestamp = this.date.getTime();
        this.simpleDate =  Helpers.dateToSimpleDate(this.date);
    }

    /**
     * Fill out the post template and return as HTML
     *
     * @return {Promise} - a promise resolving the HTML that should be appended to the DOM
     */

    createNewPost(){

        return new Promise((resolve, reject) => {

            templateRetriever.retrieve(`post`).then((template) => {

                const hbTemplate = HandleBars.compile(template);

                resolve(hbTemplate({
                    title: this.title,
                    content: this.content,
                    date: this.simpleDate,
                    tags: this.tags
                }));
            });
        });
    }

    static hasContent(post){

        const isPost = post.sys.contentType.sys.id === `post`;

        return isPost && !!post.fields.content;
    }
}