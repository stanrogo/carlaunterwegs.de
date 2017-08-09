/**
 * This class takes advantage of all other classes to control what happens on the page
 */

class Main{

    constructor(APIRequest, Post, Helpers){

        this.APIRequest = APIRequest;
        this.Post = Post;
        this.Helpers = Helpers;

        this.postsContainer = document.querySelector(`.js-posts-container`);
    }

    renderAllPosts(){

        const request = new this.APIRequest();
        request.get('entries').then((data)=> {

            data.items.forEach((post) => {

                const postInstance = new this.Post(this.Helpers, post.fields);
                this.postsContainer.appendChild(postInstance.createNewPost());
            });
        });
    }
}

