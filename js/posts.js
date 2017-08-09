/**
 * This class takes advantage of all other classes to control what happens on the page
 */

import apiRequest from './APIRequest.js';
import Helpers from "./helpers.js";
import HandleBars from '../vendor/handlebars-v4.0.10.js';
import templateRetriever from './templateRetriever.js';


export default class PostsController{

    constructor(){

        this.postsContainer = document.querySelector(`.js-posts-container`);
    }

    renderAllPosts(){

        return new Promise((resolve, reject) => {

            const posts = [];
            apiRequest.getEntries().then((data)=> {

                data.items.forEach((post) => {

                    if(!Helpers.dataValid(post, `post`)){

                        return;
                    }

                    const postInstance = this.extractPostData(post);
                    posts.push(postInstance);
                });

                posts.sort((a, b) => {

                    return a.timestamp < b.timestamp;
                });

                posts.forEach((post) => {

                    this.createNewPost(post).then((renderedPost) => {

                        this.postsContainer.innerHTML += renderedPost;
                    });
                });

                resolve();
            });
        });
    }

    extractPostData(data){

        const date = new Date(data.fields.date);

        return {
            title: data.fields.title,
            content: Helpers.customMarkedInstance(data.fields.content),
            tags: data.fields.tags || [],
            date: date,
            timestamp: date.getTime(),
            simpleDate: Helpers.dateToSimpleDate(date)
        };

    }

    /**
     * Fill out the post template and return as HTML
     *
     * @return {Promise} - a promise resolving the HTML that should be appended to the DOM
     */

    createNewPost(postData){

        return new Promise((resolve, reject) => {

            templateRetriever.retrieve(`post`).then((template) => {

                const hbTemplate = HandleBars.compile(template);

                resolve(hbTemplate({
                    title: postData.title,
                    content: postData.content,
                    date: postData.simpleDate,
                    tags: postData.tags
                }));
            });
        });
    }
}

