/**
 * This class takes advantage of all other classes to control what happens on the page
 */

import APIRequest from './APIRequest.js';
import Post from './post.js';

export default class PostsController{

    constructor(){

        this.postsContainer = document.querySelector(`.js-posts-container`);
    }

    renderAllPosts(){

        const posts = [];
        const request = new APIRequest();
        request.get('entries').then((data)=> {

            data.items.forEach((post) => {

                if(!Post.hasContent(post)){

                    return;
                }

                const postInstance = new Post(post);
                posts.push(postInstance);
            });

            posts.sort((a, b) => {

                return a.timestamp < b.timestamp;
            });

            posts.forEach((post) => {

                const renderedPost = post.createNewPost();
                this.postsContainer.appendChild(renderedPost);
            });
        });
    }
}

