/**
 * @name localisationHelper.js
 * @author Stanley Clark <me@stanrogo.com>
 * @version 1.0.0
 *
 * Enable language selection to be included in the site
 */

class LocalisationHelper{

    constructor(){

        this.localeTable = {
            german: `de`,
            english: `en-GB`
        };

        this.locale = 'english';
    }

    get locale(){

        return this._locale;
    }

    set locale(locale){

        if(this.checkValidLocale(locale) === true){

            this._locale = locale;
            return;
        }

        if(this.checkValidLanguage(locale) === true){

            this._locale = this.localeTable[locale];
        }
    }

    checkValidLocale(locale){

        let isValid = false;

        for(const language in this.localeTable){

            if(this.localeTable.hasOwnProperty(language)){

                if(this.localeTable[language] === locale){

                    isValid = true;
                }
            }
        }

        return isValid;
    }

    checkValidLanguage(language){

        return !!this.localeTable[language];
    }
}



export default new LocalisationHelper();