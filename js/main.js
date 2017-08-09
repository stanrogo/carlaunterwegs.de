/**
 * @name main.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * This is the main file that initialises our application
 *
 * We collate all of the sections of our website that we want to use and execute their functionality
 */

import PostsController from "./postsController.js";
import LanguageSelection from "./languageSelection.js";
import About from './about.js';

const carlaBlog = {};
carlaBlog.renderPromises = [];

// Render all posts

carlaBlog.postsController = new PostsController();
carlaBlog.renderPromises.push(carlaBlog.postsController.renderAllPosts());

// Render about section

carlaBlog.about = new About();
carlaBlog.renderPromises.push(carlaBlog.about.render());

// Enable language selection on the site

carlaBlog.languageSelection = new LanguageSelection();

Promise.all(carlaBlog.renderPromises).then(() => {
    document.getElementById(`spinner-container`).style.display = `none`;
});

