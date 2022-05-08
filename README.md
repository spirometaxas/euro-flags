# euro-flags
Print the flags of 28 European countries to the console using unicode box characters and ANSI-256 colors!

![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/euro-flags-banner.png)

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

## Options
### Standard Flag
```
$ euro-flags <country-name>
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/italy-flag.png)

### Add a Border
To add a border, add the `--border` flag:
```
$ euro-flags <country-name> --border
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/euro-flags-border.png)

### Make it Bigger
To increase the scale, add the `--scale=<positive-number>` flag.  The value can be any integer greater than or equal to 1.  (Default scale is 1).  Can also use `--scale=full` to fit the flag to the closest terminal dimensions.  
```
$ euro-flags <country-name> --scale=<positive-number>
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/euro-flags-scale.png)

**Note:** Each flag has its own minimum dimensions (see below), and `scale` just multiplies those dimensions.  Therefore, the same scale will render different sizes for flags which have different minimum dimensions.

## Supported Countries (28)
Due to limitations of ASCII art, only flags that can be drawn using block characters are included.

#### Armenia
```
$ euro-flags Armenia
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/armenia-flag.png)

| Minimum Dimensions   | Target Ratio | Default Scale | Source |
| -------------------- | ------------ |-------------- | ------ |
| 3 rows x 12 columns  | (1:2)        | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Armenia)   |

#### Austria
```
$ euro-flags Austria
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/austria-flag.png)

| Minimum Dimensions   | Target Ratio | Default Scale | Source |
| -------------------- | ------------ |-------------- | ------ |
| 3 rows x 9 columns   | (2:3)        | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Austria)   |

#### Belgium
```
$ euro-flags Belgium
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/belgium-flag.png)

| Minimum Dimensions   | Target Ratio | Default Scale | Source |
| -------------------- | ------------ |-------------- | ------ |
| 1 row x 3 columns    | (2:3)        | 10            | [Link](https://en.wikipedia.org/wiki/Flag_of_Belgium)   |

#### Bulgaria
```
$ euro-flags Bulgaria
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/bulgaria-flag.png)

| Minimum Dimensions   | Target Ratio | Default Scale | Source |
| -------------------- | ------------ |-------------- | ------ |
| 3 rows x 10 columns  | (3:5)        | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Bulgaria)   |

#### Denmark
```
$ euro-flags Denmark
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/denmark-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 7 rows x 19 columns  | (28:37)        | 2             | [Link](https://en.wikipedia.org/wiki/Flag_of_Denmark)   |

#### England
```
$ euro-flags England
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/england-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 5 rows x 16 columns  | (3:5)          | 2             | [Link](https://en.wikipedia.org/wiki/Flag_of_England)   |

#### Estonia
```
$ euro-flags Estonia
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/estonia-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 3 rows x 9 columns   | (7:11)         | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Estonia)   |

#### Finland
```
$ euro-flags Finland
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/finland-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 11 rows x 36 columns | (11:18)        | 1             | [Link](https://en.wikipedia.org/wiki/Flag_of_Finland)   |

#### France
```
$ euro-flags France
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/france-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 1 row x 3 columns    | (2:3)          | 10            | [Link](https://en.wikipedia.org/wiki/Flag_of_France)   |

#### Georgia
```
$ euro-flags Georgia
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/georgia-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 12 rows x 36 columns | (2:3)          | 1             | [Link](https://en.wikipedia.org/wiki/Flag_of_Georgia_(country))   |

#### Germany
```
$ euro-flags Germany
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/germany-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 3 rows x 10 columns  | (3:5)          | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Germany)   |

#### Greece
```
$ euro-flags Greece
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/greece-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 9 rows x 27 columns  | (2:3)          | 1             | [Link](https://en.wikipedia.org/wiki/Flag_of_Greece)   |

#### Hungary
```
$ euro-flags Hungary
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/hungary-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ |
| 3 rows x 12 columns  | (1:2)          | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Hungary)   |

#### Iceland
```
$ euro-flags Iceland
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/iceland-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 18 rows x 50 columns | (18:25)        | 1             | [Link](https://en.wikipedia.org/wiki/Flag_of_Iceland)   |

#### Ireland
```
$ euro-flags Ireland
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/ireland-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 3 rows x 12 columns  | (1:2)          | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Ireland)   |

#### Italy
```
$ euro-flags Italy
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/italy-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 1 rows x 3 columns   | (2:3)          | 10            | [Link](https://en.wikipedia.org/wiki/Flag_of_Italy)   |

#### Latvia
```
$ euro-flags Latvia
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/latvia-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 5 rows x 20 columns  | (1:2)          | 2             | [Link](https://en.wikipedia.org/wiki/Flag_of_Latvia)   |

#### Lithuania
```
$ euro-flags Lithuania
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/lithuania-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 3 rows x 10 columns  | (3:5)          | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Lithuania)   |

#### Luxembourg
```
$ euro-flags Luxembourg
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/luxembourg-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 3 rows x 10 columns  | (3:5)          | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Luxembourg)   |

#### Monaco
```
$ euro-flags Monaco
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/monaco-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 2 rows x 5 columns   | (4:5)          | 5             | [Link](https://en.wikipedia.org/wiki/Flag_of_Monaco)   |

#### Netherlands
```
$ euro-flags Netherlands
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/netherlands-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 3 rows x 9 columns   | (2:3)          | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_the_Netherlands)   |

#### Norway
```
$ euro-flags Norway
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/norway-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 16 rows x 44 columns | (8:11)         | 1             | [Link](https://en.wikipedia.org/wiki/Flag_of_Norway)   |

#### Poland
```
$ euro-flags Poland
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/poland-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 10 rows x 32 columns | (5:8)          | 1             | [Link](https://en.wikipedia.org/wiki/Flag_of_Poland)   |

#### Romania
```
$ euro-flags Romania
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/romania-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 1 row x 3 columns    | (2:3)          | 10            | [Link](https://en.wikipedia.org/wiki/Flag_of_Romania)   |

#### Russia
```
$ euro-flags Russia
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/russia-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 3 rows x 9 columns   | (2:3)          | 3             | [Link](https://en.wikipedia.org/wiki/Flag_of_Russia)   |

#### Sweden
```
$ euro-flags Sweden
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/sweden-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 5 rows x 16 columns  | (5:8)          | 2             | [Link](https://en.wikipedia.org/wiki/Flag_of_Sweden)   |

#### Switzerland
```
$ euro-flags Switzerland
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/switzerland-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 5 rows x 10 columns  | (1:1)          | 2             | [Link](https://en.wikipedia.org/wiki/Flag_of_Switzerland)   |

#### Ukraine
```
$ euro-flags Ukraine
```
![What euro-flags prints to the console](https://raw.githubusercontent.com/spirometaxas/euro-flags/main/img/ukraine-flag.png)

| Minimum Dimensions   | Target Ratio   | Default Scale | Source |
| -------------------- | -------------- |-------------- | ------ | 
| 2 rows x 6 columns   | (2:3)          | 5             | [Link](https://en.wikipedia.org/wiki/Flag_of_Ukraine)   |

###### Notes
- `Minimum Dimensions` - The smallest possible dimensions used to render the flag (when `--scale=1`).    
- `Target Ratio` - The preferred ratio to use when rendering the flag.  Most flags match the target ratio exactly.  Some flags are within 1-2 columns of the target ratio, in an attempt to support smaller renderings.  Also assume 1 row height equals 2 column widths.
- `Default Scale` - The scale used to render the flag when the `--scale` flag is not included.

## Related
- [greek-flag](https://www.npmjs.com/package/greek-flag) - Print the Greek flag to the console!
- [usa-flag](https://www.npmjs.com/package/usa-flag) - Print the flag of the United States of America to the console!





