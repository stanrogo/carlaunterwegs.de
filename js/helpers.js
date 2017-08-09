/**
 * @name helpers.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Class providing helper functions usable everywhere
 */

import marked from '../vendor/marked.js';

export default class Helpers{

    /**
     * Translates a date to Day Month format
     * @param {Date} date
     * @return {String}
     */

    static dateToSimpleDate(date){

        const weekDay = Helpers.weekDay[date.getDay()];
        const month = Helpers.months[date.getMonth()];
        const dateNumber = date.getDate();
        const year = date.getFullYear();

        return `${weekDay}, ${month} ${dateNumber}, ${year}`;
    }

    static get customMarkedInstance(){

        const renderer = new marked.Renderer();

        renderer.heading = function (text, level) {

            const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

            const newLevel = level + 1;

            return '<h' + newLevel + ' id="' + escapedText + '">' + text + '</h' + newLevel + '>';
        };

        marked.setOptions({
            renderer
        });

        return marked;
    }

    /**
     * Gets the locale of the user, based on the local storage
     */

    static get locale(){

        const storedLocale = localStorage.getItem(`locale`);

        if(typeof storedLocale === `undefined` || typeof Helpers.localeTable[storedLocale] === `undefined`){

            console.warn(`No valid locale detected`);
            return null;
        }
        else{

            return Helpers.localeTable[storedLocale];
        }
    }

    static set locale(localeName){

        localStorage.setItem(`locale`, localeName);
    }

    static get localeTable(){

        return {
            german: `de`,
            english: `en-GB`
        }
    }

    static get months(){

        return [
            `January`,
            `February`,
            `March`,
            `April`,
            `May`,
            `June`,
            `July`,
            `August`,
            `September`,
            `October`,
            `November`,
            `December`
        ];
    }

    static get weekDay(){

        return [
            `Monday`,
            `Tuesday`,
            `Wednesday`,
            `Thursday`,
            `Friday`,
            `Saturday`,
            `Sunday`
        ];
    }
}