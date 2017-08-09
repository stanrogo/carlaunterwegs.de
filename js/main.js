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

const carlaBlog = {};

// Render all posts

carlaBlog.postsController = new PostsController();
carlaBlog.postsController.renderAllPosts();

// Enable language selection on the site

carlaBlog.languageSelection = new LanguageSelection();