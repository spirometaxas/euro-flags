#!/usr/bin/env node
const euro_flags = require('./index.js');

const getScale = function(params, country, border) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] && params[i].startsWith('--scale=')) {
            const scaleString = params[i].replace('--scale=', '').trim();
            if (scaleString.toLowerCase() === 'full') {
                if (!process.stdout.isTTY) {
                    console.log('\nError: --scale=full only works in a terminal.  Using default scale.');
                    return -1;
                }
                const countryData = euro_flags[country];
                if (countryData) {
                    const flagW = euro_flags[country].minWidth();
                    const flagH = euro_flags[country].minHeight();
                    const terminalW = process.stdout.columns - 4 - (border ? 2 : 0);
                    const terminalH = process.stdout.rows - 2 - (border ? 2 : 0);
                    if (terminalW < flagW || terminalH < flagH) {
                        return 1;
                    }
                    return Math.min(parseInt(terminalW / flagW), parseInt(terminalH / flagH));
                }
            } else if (scaleString.length > 0 && !isNaN(scaleString)) {
                const scale = parseInt(scaleString);
                return scale >= 1 ? scale : 1;
            }
        }
    }
    return -1;
}

const getBorder = function(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] && params[i].toLowerCase() === ('--border')) {
            return true;
        }
    }
    return false;
}

const printAll = function() {
    const flags = '\n' +
    ' Armenia:\n' + euro_flags['armenia'].create(undefined, false) + '\n\n' +
    ' Austria:\n' + euro_flags['austria'].create(undefined, false) + '\n\n' +
    ' Belgium:\n' + euro_flags['belgium'].create(undefined, false) + '\n\n' +
    ' Bulgaria:\n' + euro_flags['bulgaria'].create(undefined, false) + '\n\n' +
    ' Denmark:\n' + euro_flags['denmark'].create(undefined, false) + '\n\n' +
    ' England:\n' + euro_flags['england'].create(undefined, false) + '\n\n' +
    ' Estonia:\n' + euro_flags['estonia'].create(undefined, false) + '\n\n' +
    ' Finland:\n' + euro_flags['finland'].create(undefined, false) + '\n\n' +
    ' France:\n' + euro_flags['france'].create(undefined, false) + '\n\n' +
    ' Georgia:\n' + euro_flags['georgia'].create(undefined, false) + '\n\n' +
    ' Germany:\n' + euro_flags['germany'].create(undefined, false) + '\n\n' +
    ' Greece:\n' + euro_flags['greece'].create(undefined, false) + '\n\n' +
    ' Hungary:\n' + euro_flags['hungary'].create(undefined, false) + '\n\n' +
    ' Iceland:\n' + euro_flags['iceland'].create(undefined, false) + '\n\n' +
    ' Ireland:\n' + euro_flags['ireland'].create(undefined, false) + '\n\n' +
    ' Italy:\n' + euro_flags['italy'].create(undefined, false) + '\n\n' +
    ' Latvia:\n' + euro_flags['latvia'].create(undefined, false) + '\n\n' +
    ' Lithuania:\n' + euro_flags['lithuania'].create(undefined, false) + '\n\n' +
    ' Luxembourg:\n' + euro_flags['luxembourg'].create(undefined, false) + '\n\n' +
    ' Monaco:\n' + euro_flags['monaco'].create(undefined, false) + '\n\n' +
    ' Netherlands:\n' + euro_flags['netherlands'].create(undefined, false) + '\n\n' +
    ' Norway:\n' + euro_flags['norway'].create(undefined, false) + '\n\n' +
    ' Poland:\n' + euro_flags['poland'].create(undefined, false) + '\n\n' +
    ' Romania:\n' + euro_flags['romania'].create(undefined, false) + '\n\n' +
    ' Russia:\n' + euro_flags['russia'].create(undefined, false) + '\n\n' +
    ' Sweden:\n' + euro_flags['sweden'].create(undefined, false) + '\n\n' +
    ' Switzerland:\n' + euro_flags['switzerland'].create(undefined, false) + '\n\n' +
    ' Ukraine:\n' + euro_flags['ukraine'].create(undefined, false);
    console.log(flags);
}

const printUsage = function(includeCountryNames) {
    console.log('\nUsage:');
    console.log('  $ euro-flags <country-name>');
    console.log('  $ euro-flags <country-name> --border');
    console.log('  $ euro-flags <country-name> --scale=<scale-number>');
    console.log('  $ euro-flags <country-name> --scale=full');

    if (includeCountryNames) {
        console.log('\nSupported Countries:');
        console.log('  Armenia, Austria, Belgium, Bulgaria, Denmark, England, Estonia,');
        console.log('  Finland, France, Georgia, Germany, Greece, Hungary, Iceland,');
        console.log('  Ireland, Italy, Latvia, Lithuania, Luxembourg, Monaco, Netherlands,');
        console.log('  Norway, Poland, Romania, Russia, Sweden, Switzerland, Ukraine');
    }
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    const country = params[0].toLowerCase();
    const border = getBorder(params);
    const scale = getScale(params, country, border);
    if (euro_flags[country]) {
        console.log(euro_flags[country].create(scale, border));
    } else {
        printUsage(true);
    }
} else {
    printAll();
    printUsage(false);
}