/**
 * Class providing helper functions usable everywhere
 */

class Helpers{

    /**
     * Translates a date to Day Month format
     * @param {Date} date
     */

    static dateToSimpleDate(date){

        const weekDay = Helpers.weekDay[date.getDay()];
        const month = Helpers.months[date.getMonth()];
        const dateNumber = date.getDate();
        const year = date.getFullYear();

        return `${weekDay}, ${month} ${dateNumber}, ${year}`;
    }

    static constructRenderer(){

        const renderer = new marked.Renderer();

        renderer.heading = function (text, level) {

            const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

            const newLevel = level + 1;

            return '<h' + newLevel + ' id="' + escapedText + '">' + text + '</h' + newLevel + '>';
        };

        return renderer;
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