/**
 * This class takes advantage of all other classes to control what happens on the page
 */

import apiRequest from './APIRequest.js';
import Post from './post.js';
import Helpers from "./helpers.js";

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

                    const postInstance = new Post(post);
                    posts.push(postInstance);
                });

                posts.sort((a, b) => {

                    return a.timestamp < b.timestamp;
                });

                posts.forEach((post) => {

                    post.createNewPost().then((renderedPost) => {

                        this.postsContainer.innerHTML += renderedPost;
                    });
                });

                resolve();
            });
        });
    }
}

