const apiEndPoint = `https://cdn.contentful.com/spaces/zb623ajubmgz/entries?access_token=1d7129a51099773a878425f241574944d855cedde56d822194b76a4a0e2632cd`;
const posts = [];
const postsContainer = document.querySelector(`.js-posts-container`);
const months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, 'Dec'];

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {

    if (this.readyState === 4 && this.status === 200) {

        const data = JSON.parse(this.responseText).items;

        data.forEach((post) => {

            const postInstance = new Post(post.fields);
            postInstance.addPostToDOM();
            posts.push(postInstance);

        });
    }
};
xhttp.open(`GET`, apiEndPoint, true);
xhttp.send();

class Post{

    constructor(data){

        this.title = data.title;
        this.content = marked(data.content);

        const date = new Date(data.date);
        this.date =  `${date.getDate()} ${months[date.getMonth()]}`;
    }

    addPostToDOM(){

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

        postsContainer.appendChild(postBlock);
    }
}