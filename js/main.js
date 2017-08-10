/**
 * @name main.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * This is the main file that initialises our application
 *
 * We collate all of the sections of our website that we want to use and execute their functionality
 */

import router from './router.js';
import Posts from "../modules/posts/posts.js";
import About from '../modules/about/about.js';

const carlaBlog = {};
carlaBlog.renderPromises = [];

// Router set up

router.navigate();

router
    .add(/about/, function() {

    })
    .add(/products\/(.*)\/edit\/(.*)/, function() {

    })
    .add(function() {

    })
    .check('/products/12/edit/22').listen();


// Select a language based on the curent route

// Render all posts

carlaBlog.posts = new Posts();
carlaBlog.renderPromises.push(carlaBlog.posts.render());

// Render about section

carlaBlog.about = new About();
carlaBlog.renderPromises.push(carlaBlog.about.render());

Promise.all(carlaBlog.renderPromises).then(() => {
    document.getElementById(`spinner-container`).style.display = `none`;
});


