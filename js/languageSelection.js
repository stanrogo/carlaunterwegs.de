/**
 * @name languageSelection.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Enable language selection to be included in the site
 */

import Helpers from "./helpers.js";

export default class LanguageSelection{

    constructor(){

        this.languageButtons = document.querySelectorAll(`.js-btn-language`);

        this.languageButtons.forEach((button) => {

            const language = button.dataset.locale;
            button.addEventListener(`click`, () => {this.selectLanguage(language)});
        });
    }

    static selectLanguage(locale){

        Helpers.locale = locale;
        window.location.reload();
    }
}