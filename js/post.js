/**
 * @name post.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Create a post object that can render itself to the DOM
 */

import Helpers from './helpers.js';

export default class Post{

    constructor(data){

        this.title = data.fields.title;
        this.content = Helpers.customMarkedInstance(data.fields.content);
        this.date = new Date(data.fields.date);
        this.timestamp = this.date.getTime();
        this.simpleDate =  Helpers.dateToSimpleDate(this.date);
    }

    /**
     * Create the post template and append it to the DOM
     */

    createNewPost(){

        const html = `
            <div class="date-container black">
                <i class="material-icons white-text">date_range</i>
                <span class="date-container--date white-text">${this.simpleDate}</span>
            </div>
            <article class="post-block--article z-depth-1 white">
                
                <h1 class="post-block--title">${this.title}</h1>
                <div class="post-block--content light">${this.content}</div>
            </article>
        `;

        const postBlock = document.createElement('div');
        postBlock.className = `col s12 post-block`;
        postBlock.innerHTML = html;

        return postBlock;
    }

    static hasContent(post){

        const isPost = post.sys.contentType.sys.id === 'post';

        return isPost && !!post.fields.content;
    }
}