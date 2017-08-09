/**
 * @name router.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * The routing for our website
 */

export default class Router{

    constructor(options){

        this.routes = [];
        this.mode = null;
        this.root = '/';

        if(options) this.config(options);
    }

    config(options){

        this.mode = options && options.mode && options.mode === 'history' && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';

        return this;
    }

    getFragment(){

        let fragment = '';

        if(this.mode === 'history'){

            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
        }
        else{

            const match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }

        return this.clearSlashes(fragment);
    }

    clearSlashes(path){

        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    add(re, handler){

        if(typeof re === 'function'){

            handler = re;
            re = '';
        }

        this.routes.push({ re: re, handler: handler});
        return this;
    }

    remove(param){

        for(let i = 0, r; i < this.routes.length, r = this.routes[i]; i++){

            if(r.handler === param || r.re.toString() === param.toString()){

                this.routes.splice(i, 1);
                return this;
            }
        }

        return this;
    }

    flush(){

        this.routes = [];
        this.mode = null;
        this.root = '/';
        return this;
    }

    check(f){

        const fragment = f || this.getFragment();

        for(let i = 0; i < this.routes.length; i++){

            const match = fragment.match(this.routes[i].re);

            if(match){

                match.shift();
                this.routes[i].handler.apply({}, match);
                return this;
            }
        }
        return this;
    }

    listen(){

        let current = this.getFragment();

        const fn = () => {

            if(current !== this.getFragment()){

                current = this.getFragment();
                this.check(current);
            }
        };

        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);

        return this;
    }

    navigate(path){

        path = path ? path : '';

        if(this.mode === 'history'){

            history.pushState(null, null, this.root + this.clearSlashes(path));
        }
        else{

            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        }

        return this;
    }
}