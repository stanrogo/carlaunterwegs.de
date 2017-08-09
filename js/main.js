/**
 * This class takes advantage of all other classes to control what happens on the page
 */

class Main{

    constructor(APIRequest, Post, Helpers){

        this.APIRequest = APIRequest;
        this.Post = Post;
        this.Helpers = Helpers;

        this.postsContainer = document.querySelector(`.js-posts-container`);

        document.querySelectorAll(`.js-btn-language`).forEach(button => {

            button.addEventListener(`click`, () => {this.selectLanguage(button)});
        });
    }

    renderAllPosts(){

        const posts = [];
        const request = new this.APIRequest();
        request.get('entries').then((data)=> {

            data.items.forEach((post) => {

                if(!this.Post.hasContent(post)){

                    return;
                }

                const postInstance = new this.Post(this.Helpers, post);
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

    selectLanguage(button){

        localStorage.setItem('locale', button.dataset.locale);
        window.location.reload();
    }
}

