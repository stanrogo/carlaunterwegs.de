/**
 * @name header.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * This little script simply allows us to have a fancy header with fading opacity
 */

const header = {

    body: null,
    container: null,
    cover: null,
    navContainer: null,

    coverHeight: 0,
    navContainerHeight: 0,

    prevScroll: window.scrollY,

    init(){

        const wrapper = document.getElementsByClassName(`js-header`)[0];
        this.setProperties();
        document.addEventListener(`scroll`, () => this.onScroll());
    },

    setProperties(){

        this.body = document.getElementsByTagName('body')[0];

        this.container = document.getElementById('header');
        this.cover = this.container.getElementsByClassName('js-header--cover')[0];
        this.navContainer = this.container.getElementsByClassName('js-header--nav-bar--container')[0];

        this.coverHeight = this.cover.getBoundingClientRect().height;
        this.navContainerHeight = this.navContainer.getBoundingClientRect().height;
    },

    onScroll(){

        // Get the new scroll position

        const scroll = window.scrollY;

        // Calculate the opacity that the filter should currently have

        const opacity = 1 - (Math.min(scroll, (this.coverHeight - this.navContainerHeight)) / this.coverHeight);
        this.cover.style.filter = `opacity(${opacity})`;

        if(scroll > this.prevScroll){

            /**
             * If we have scrolled down so that the top of the nav bar is at the top of the screen,
             * and it has not been fixed yet, then fix it to the top of the screen
             */

            if(this.navContainer.getBoundingClientRect().top <= 0 && !this.container.classList.contains(`fixed-nav`)){

                this.container.classList.add(`fixed-nav`);
                this.container.style.top = `-${this.coverHeight - this.navContainerHeight}px`;
                this.body.style.marginTop = `${this.coverHeight + 16}px`;
            }
        }

        if(scroll < this.prevScroll){

            if(scroll < this.coverHeight - this.navContainerHeight && this.container.classList.contains(`fixed-nav`)){

                this.container.classList.remove(`fixed-nav`);
                this.container.style.top = `0`;
                this.body.style.marginTop = `0`;
            }
        }

        // Remember the new scroll position as the now previous scroll position

        this.prevScroll = scroll;
    }
};

export default header;