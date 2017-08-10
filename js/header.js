
const header = {

    cover: document.getElementsByClassName('js-site-header--cover')[0],
    coverHeight: document.getElementsByClassName('js-cover-wrapper')[0].getBoundingClientRect().height,
    navContainer: document.getElementsByClassName('js-nav-container')[0],
    navContainerHeight: document.getElementsByClassName('js-nav-container')[0].getBoundingClientRect().height,
    headerContentHeight: document.getElementsByClassName('js-container-header')[0].getBoundingClientRect().height,
    prevScroll: window.scrollY,
    header: document.getElementById('site-header'),

    init(){

        document.addEventListener('scroll', () => {

            const scroll = window.scrollY;
            const opacity = 1 - (Math.min(scroll, this.coverHeight - this.navContainerHeight) / this.coverHeight);
            this.cover.style.filter = `blur(5px) opacity(${opacity})`;

            if(scroll > this.prevScroll){

                // Scrolling down

                if(this.navContainer.getBoundingClientRect().top <= 0 && !this.header.classList.contains('fixed-nav')){

                    this.header.classList.add('fixed-nav');
                    this.header.style.top = `-${this.headerContentHeight}px`;
                    document.getElementsByTagName('body')[0].style.marginTop = `calc(${this.coverHeight}px + 1rem)`;
                }
            }

            if(scroll < this.prevScroll){

                if(scroll < this.coverHeight - this.navContainerHeight && this.header.classList.contains('fixed-nav')){

                    this.header.classList.remove('fixed-nav');
                    this.header.style.top = `0`;
                    document.getElementsByTagName('body')[0].style.marginTop = `0`;
                }
            }

            this.prevScroll = scroll;
        });
    }
};

export default header;




