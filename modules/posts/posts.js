/**
 * @name posts.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Fills out the posts template when given data to do so
 */

import Helpers from "../../js/helpers.js";
import DataModule from "../../js/dataModule.js";

export default class Posts extends DataModule{

    constructor(){

        super(document.getElementsByClassName(`js-posts`)[0], `post`, `posts`);
    }

    _sortEntries(a, b){

        if(a.fields.date && b.fields.date){

            return new Date(a.fields.date).getTime() < new Date(a.fields.date).getTime();
        }

        return true;
    }

    _fillTemplateObject(entries){

        const genObject = {
            Posts: []
        };

        entries.forEach((entry) => {

            const date = new Date(entry.fields.date);

            genObject.Posts.push({
                title: entry.fields.title,
                content:  Helpers.customMarkedInstance(entry.fields.content),
                date: Helpers.dateToSimpleDate(date),
                tags: entry.fields.tags
            });
        });

        return genObject;
    }
}

