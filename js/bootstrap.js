/**
 * This is the main file that initialises our application
 *
 * We get the posts and append them to the DOM
 *
 */

const carlaBlog = {};

// We kick off our application and define the steps that should be performed here in a functional way
// We make sure to pass all our dependencies through already

carlaBlog.main = new Main(APIRequest, Post, Helpers);
carlaBlog.main.renderAllPosts();