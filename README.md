# euro-flags
Print the flags of 28 European countries to the console using unicode box characters and ANSI-256 colors!

## Usage
### Via `npx`:
Print all flags:
```
$ npx euro-flags
```
Print specific flags:
```
$ npx euro-flags <country-name>
$ npx euro-flags <country-name> --border
$ npx euro-flags <country-name> --scale=<scale-number>
$ npx euro-flags <country-name> --scale=full
```

### Via Global Install
```
$ npm install --global euro-flags
```
then:
```
$ euro-flags
$ euro-flags <country-name>
$ euro-flags <country-name> --border
$ euro-flags <country-name> --scale=<scale-number>
$ euro-flags <country-name> --scale=full
```

### Via Import
```
$ npm install euro_flags
```
then:
```
const euro_flags = require('euro-flags');
console.log(euro_flags['<country-name>'].create(<scale-number>, <border-boolean>));
```

### Supported Countries
Due to limitations of ASCII art, only flags that can be drawn using block characters are included:
`Armenia`, `Austria`, `Belgium`, `Bulgaria`, `Denmark`, `England`, `Estonia`, `Finland`, `France`, `Georgia`, `Germany`, `Greece`, `Hungary`, `Iceland`, `Ireland`, `Italy`, `Latvia`, `Lithuania`, `Luxembourg`, `Monaco`, `Netherlands`, `Norway`, `Poland`, `Romania`, `Russia`, `Sweden`, `Switzerland`, `Ukraine`