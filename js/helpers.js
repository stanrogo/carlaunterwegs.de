/**
 * Class providing helper functions usable everywhere
 */

class Helpers{

    /**
     * Translates a date to Day Month format
     * @param {String} date
     */

    static dateToSimpleDate(date){

        const dateInstance = new Date(date);
        return `${dateInstance.getDate()} ${Helpers.months[dateInstance.getMonth()]}`;
    }

    static get months(){

        return [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, 'Dec'];
    }
}