/**
 * Create a post object that can render itself to the DOM
 */

class Post{

    constructor(Helpers, data){

        this.title = data.title;
        this.content = marked(data.content);
        this.date =  Helpers.dateToSimpleDate(data.date);
    }

    /**
     * Create the post template and append it to the DOM
     */

    createNewPost(){

        const html = `
            <div class="ribbon-container">
                <span>${this.date}</span>
            </div>
            <article class="post-block--article">
                
                <h1 class="post-block--title">${this.title}</h1>
                <div class="post-block--content light">${this.content}</div>
            </article>
        `;

        const postBlock = document.createElement('div');
        postBlock.className = `col s12 m8 offset-m2 z-depth-2 post-block`;
        postBlock.innerHTML = html;

        return postBlock;
    }
}