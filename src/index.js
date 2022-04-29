const { Pattern, Row, Container } = require('./pattern.js');

const ARMENIA = new Container([
        new Row([ new Pattern('████████████', 'red-160') ]),
        new Row([ new Pattern('████████████', 'blue-19') ]),
        new Row([ new Pattern('████████████', 'yellow-178') ]),
    ], 3);

const AUSTRIA = new Container([
        new Row([ new Pattern('█████████', 'red-124') ]),
        new Row([ new Pattern('█████████', 'white') ]),
        new Row([ new Pattern('█████████', 'red-124') ]),
    ], 3);

const BELGIUM = new Container([
        new Row([ new Pattern('█', 'black'), new Pattern('█', 'yellow-220'), new Pattern('█', 'red-160') ]),
    ], 10);

const BULGARIA = new Container([
        new Row([ new Pattern('██████████', 'white') ]),
        new Row([ new Pattern('██████████', 'green-29') ]),
        new Row([ new Pattern('██████████', 'red-124') ]),
    ], 3);

const DENMARK = new Container([
        new Row([ new Pattern('██████', 'red-124'), new Pattern('██', 'white'), new Pattern('███████████', 'red-124') ]),
        new Row([ new Pattern('██████', 'red-124'), new Pattern('██', 'white'), new Pattern('███████████', 'red-124') ]),
        new Row([ new Pattern('██████', 'red-124'), new Pattern('██', 'white'), new Pattern('███████████', 'red-124') ]),
        new Row([ new Pattern('███████████████████', 'white') ]),
        new Row([ new Pattern('██████', 'red-124'), new Pattern('██', 'white'), new Pattern('███████████', 'red-124') ]),
        new Row([ new Pattern('██████', 'red-124'), new Pattern('██', 'white'), new Pattern('███████████', 'red-124') ]),
        new Row([ new Pattern('██████', 'red-124'), new Pattern('██', 'white'), new Pattern('███████████', 'red-124') ]),
    ], 2);

const ENGLAND = new Container([
        new Row([ new Pattern('███████', 'white'), new Pattern('██', 'red-160'), new Pattern('███████', 'white') ]),
        new Row([ new Pattern('███████', 'white'), new Pattern('██', 'red-160'), new Pattern('███████', 'white') ]),
        new Row([ new Pattern('████████████████', 'red-160') ]),
        new Row([ new Pattern('███████', 'white'), new Pattern('██', 'red-160'), new Pattern('███████', 'white') ]),
        new Row([ new Pattern('███████', 'white'), new Pattern('██', 'red-160'), new Pattern('███████', 'white') ]),
    ], 2);

const ESTONIA = new Container([
        new Row([ new Pattern('█████████', 'blue-27') ]),
        new Row([ new Pattern('█████████', 'black') ]),
        new Row([ new Pattern('█████████', 'white') ]),
    ], 3);

const FINLAND = new Container([
        new Row([ new Pattern('██████████', 'white'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'white') ]),
        new Row([ new Pattern('██████████', 'white'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'white') ]),
        new Row([ new Pattern('██████████', 'white'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'white') ]),
        new Row([ new Pattern('██████████', 'white'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'white') ]),
        new Row([ new Pattern('██████████', 'blue-18'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'blue-18') ]),
        new Row([ new Pattern('██████████', 'blue-18'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'blue-18') ]),
        new Row([ new Pattern('██████████', 'blue-18'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'blue-18') ]),
        new Row([ new Pattern('██████████', 'white'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'white') ]),
        new Row([ new Pattern('██████████', 'white'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'white') ]),
        new Row([ new Pattern('██████████', 'white'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'white') ]),
        new Row([ new Pattern('██████████', 'white'), new Pattern('██████', 'blue-18'), new Pattern('████████████████████', 'white') ]),
    ], 1);

const FRANCE = new Container([
        new Row([ new Pattern('█', 'blue-18'), new Pattern('█', 'white'), new Pattern('█', 'red-160') ]),
    ], 10);

const GEORGIA = new Container([
        new Row([ new Pattern('████████████████', 'white'), new Pattern('████', 'red-196'), new Pattern('████████████████', 'white') ]),
        new Row([ new Pattern('███████', 'white'), new Pattern('██', 'red-196'), new Pattern('███████', 'white'), new Pattern('████', 'red-196'), new Pattern('███████', 'white'), new Pattern('██', 'red-196'), new Pattern('███████', 'white') ]),
        new Row([ new Pattern('█████', 'white'), new Pattern('██████', 'red-196'), new Pattern('█████', 'white'), new Pattern('████', 'red-196'), new Pattern('█████', 'white'), new Pattern('██████', 'red-196'), new Pattern('█████', 'white') ]),
        new Row([ new Pattern('███████', 'white'), new Pattern('██', 'red-196'), new Pattern('███████', 'white'), new Pattern('████', 'red-196'), new Pattern('███████', 'white'), new Pattern('██', 'red-196'), new Pattern('███████', 'white') ]),
        new Row([ new Pattern('████████████████', 'white'), new Pattern('████', 'red-196'), new Pattern('████████████████', 'white') ]),
        new Row([ new Pattern('████████████████████████████████████', 'red-196') ]),
        new Row([ new Pattern('████████████████████████████████████', 'red-196') ]),
        new Row([ new Pattern('████████████████', 'white'), new Pattern('████', 'red-196'), new Pattern('████████████████', 'white') ]),
        new Row([ new Pattern('███████', 'white'), new Pattern('██', 'red-196'), new Pattern('███████', 'white'), new Pattern('████', 'red-196'), new Pattern('███████', 'white'), new Pattern('██', 'red-196'), new Pattern('███████', 'white') ]),
        new Row([ new Pattern('█████', 'white'), new Pattern('██████', 'red-196'), new Pattern('█████', 'white'), new Pattern('████', 'red-196'), new Pattern('█████', 'white'), new Pattern('██████', 'red-196'), new Pattern('█████', 'white') ]),
        new Row([ new Pattern('███████', 'white'), new Pattern('██', 'red-196'), new Pattern('███████', 'white'), new Pattern('████', 'red-196'), new Pattern('███████', 'white'), new Pattern('██', 'red-196'), new Pattern('███████', 'white') ]),
        new Row([ new Pattern('████████████████', 'white'), new Pattern('████', 'red-196'), new Pattern('████████████████', 'white') ]),
    ], 1);

const GERMANY = new Container([
        new Row([ new Pattern('██████████', 'black') ]),
        new Row([ new Pattern('██████████', 'red-160') ]),
        new Row([ new Pattern('██████████', 'yellow-220') ]),
    ], 3);

const GREECE = new Container([
        new Row([ new Pattern('████', 'blue-26'), new Pattern('██', 'white'), new Pattern('█████████████████████', 'blue-26') ]),
        new Row([ new Pattern('████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'blue-26'), new Pattern('█████████████████', 'white') ]),
        new Row([ new Pattern('██████████', 'white'), new Pattern('█████████████████', 'blue-26') ]),
        new Row([ new Pattern('████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'blue-26'), new Pattern('█████████████████', 'white') ]),
        new Row([ new Pattern('████', 'blue-26'), new Pattern('██', 'white'), new Pattern('█████████████████████', 'blue-26') ]),
        new Row([ new Pattern('███████████████████████████', 'white') ]),
        new Row([ new Pattern('███████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('███████████████████████████', 'white') ]),
        new Row([ new Pattern('███████████████████████████', 'blue-26') ]),
    ], 1);

const HUNGARY = new Container([
        new Row([ new Pattern('████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'white') ]),
        new Row([ new Pattern('████████████', 'green-22') ]),
    ], 3);

const ICELAND = new Container([
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('████████████████', 'white'), new Pattern('████', 'red-160'), new Pattern('██████████████████████████████', 'white') ]),
        new Row([ new Pattern('██████████████████████████████████████████████████', 'red-160') ]),
        new Row([ new Pattern('██████████████████████████████████████████████████', 'red-160') ]),
        new Row([ new Pattern('████████████████', 'white'), new Pattern('████', 'red-160'), new Pattern('██████████████████████████████', 'white') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
        new Row([ new Pattern('██████████████', 'blue-26'), new Pattern('██', 'white'), new Pattern('████', 'red-160'), new Pattern('██', 'white'), new Pattern('████████████████████████████', 'blue-26') ]),
    ], 1);

const IRELAND = new Container([
        new Row([ new Pattern('████', 'green-2'), new Pattern('████', 'white'), new Pattern('████', 'orange-208') ]),
        new Row([ new Pattern('████', 'green-2'), new Pattern('████', 'white'), new Pattern('████', 'orange-208') ]),
        new Row([ new Pattern('████', 'green-2'), new Pattern('████', 'white'), new Pattern('████', 'orange-208') ]),
    ], 3);

const ITALY = new Container([
        new Row([ new Pattern('█', 'green-2'), new Pattern('█', 'white'), new Pattern('█', 'red-160') ]),
    ], 10);

const LATVIA = new Container([
        new Row([ new Pattern('████████████████████', 'red-52') ]),
        new Row([ new Pattern('████████████████████', 'red-52') ]),
        new Row([ new Pattern('████████████████████', 'white') ]),
        new Row([ new Pattern('████████████████████', 'red-52') ]),
        new Row([ new Pattern('████████████████████', 'red-52') ]),
    ], 2);

const LITHUANIA = new Container([
        new Row([ new Pattern('██████████', 'yellow-178') ]),
        new Row([ new Pattern('██████████', 'green-29') ]),
        new Row([ new Pattern('██████████', 'red-124') ]),
    ], 3);

const LUXEMBOURG = new Container([
        new Row([ new Pattern('██████████', 'red-160') ]),
        new Row([ new Pattern('██████████', 'white') ]),
        new Row([ new Pattern('██████████', 'blue-39') ]),
    ], 3);

const MONACO = new Container([
        new Row([ new Pattern('█████', 'red-160') ]),
        new Row([ new Pattern('█████', 'white') ]),
    ], 5);

const NETHERLANDS = new Container([
        new Row([ new Pattern('█████████', 'red-124') ]),
        new Row([ new Pattern('█████████', 'white') ]),
        new Row([ new Pattern('█████████', 'blue-25') ]),
    ], 3);

const NORWAY = new Container([
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('██████████████', 'white'), new Pattern('████', 'blue-17'), new Pattern('██████████████████████████', 'white') ]),
        new Row([ new Pattern('████████████████████████████████████████████', 'blue-17') ]),
        new Row([ new Pattern('████████████████████████████████████████████', 'blue-17') ]),
        new Row([ new Pattern('██████████████', 'white'), new Pattern('████', 'blue-17'), new Pattern('██████████████████████████', 'white') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
        new Row([ new Pattern('████████████', 'red-124'), new Pattern('██', 'white'), new Pattern('████', 'blue-17'), new Pattern('██', 'white'), new Pattern('████████████████████████', 'red-124') ]),
    ], 1);

const POLAND = new Container([
        new Row([ new Pattern('████████████████████████████████', 'white') ]),
        new Row([ new Pattern('████████████████████████████████', 'white') ]),
        new Row([ new Pattern('████████████████████████████████', 'white') ]),
        new Row([ new Pattern('████████████████████████████████', 'white') ]),
        new Row([ new Pattern('████████████████████████████████', 'white') ]),
        new Row([ new Pattern('████████████████████████████████', 'red-160') ]),
        new Row([ new Pattern('████████████████████████████████', 'red-160') ]),
        new Row([ new Pattern('████████████████████████████████', 'red-160') ]),
        new Row([ new Pattern('████████████████████████████████', 'red-160') ]),
        new Row([ new Pattern('████████████████████████████████', 'red-160') ]),
    ], 1);

const ROMANIA = new Container([
        new Row([ new Pattern('█', 'blue-19'), new Pattern('█', 'yellow-220'), new Pattern('█', 'red-160') ]),
    ], 10);

const RUSSIA = new Container([
        new Row([ new Pattern('█████████', 'white') ]),
        new Row([ new Pattern('█████████', 'blue-19') ]),
        new Row([ new Pattern('█████████', 'red-160') ]),
    ], 3);

const SWEDEN = new Container([
        new Row([ new Pattern('█████', 'blue-25'), new Pattern('██', 'yellow-220'), new Pattern('█████████', 'blue-25') ]),
        new Row([ new Pattern('█████', 'blue-25'), new Pattern('██', 'yellow-220'), new Pattern('█████████', 'blue-25') ]),
        new Row([ new Pattern('████████████████', 'yellow-220') ]),
        new Row([ new Pattern('█████', 'blue-25'), new Pattern('██', 'yellow-220'), new Pattern('█████████', 'blue-25') ]),
        new Row([ new Pattern('█████', 'blue-25'), new Pattern('██', 'yellow-220'), new Pattern('█████████', 'blue-25') ]),
    ], 2);

const SWITZERLAND = new Container([
        new Row([ new Pattern('██████████', 'red-196') ]),
        new Row([ new Pattern('████', 'red-196'), new Pattern('██', 'white'), new Pattern('████', 'red-196') ]),
        new Row([ new Pattern('██', 'red-196'), new Pattern('██████', 'white'), new Pattern('██', 'red-196') ]),
        new Row([ new Pattern('████', 'red-196'), new Pattern('██', 'white'), new Pattern('████', 'red-196') ]),
        new Row([ new Pattern('██████████', 'red-196') ]),
    ], 2);

const UKRAINE = new Container([
        new Row([ new Pattern('██████', 'blue-27') ]),
        new Row([ new Pattern('██████', 'yellow-220') ]),
    ], 5);

module.exports = {
    armenia: ARMENIA,
    austria: AUSTRIA,
    belgium: BELGIUM,
    bulgaria: BULGARIA,
    denmark: DENMARK,
    england: ENGLAND,
    estonia: ESTONIA,
    finland: FINLAND,
    france: FRANCE,
    georgia: GEORGIA,
    germany: GERMANY,
    greece: GREECE,
    hungary: HUNGARY,
    iceland: ICELAND,
    ireland: IRELAND,
    italy: ITALY,
    latvia: LATVIA,
    lithuania: LITHUANIA,
    luxembourg: LUXEMBOURG,
    monaco: MONACO,
    netherlands: NETHERLANDS,
    norway: NORWAY,
    poland: POLAND,
    romania: ROMANIA,
    russia: RUSSIA,
    sweden: SWEDEN,
    switzerland: SWITZERLAND,
    ukraine: UKRAINE, 
};