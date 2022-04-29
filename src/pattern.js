const Row = class {

    constructor(children) {
        this.children = children;
    }

    create(scale) {
        if (!scale || scale < 1) {
            return '';
        }

        if (this.children) {
            return this.children.map(c => c.create(scale)).join('');
        }
        return '';
    }

    count(scale) {
        var count = 0;
        if (this.children) {
            for (let i = 0; i < this.children.length; i++) {
                count += this.children[i].count(scale);
            }
        }
        return count;
    }
}

const Container = class {

    BORDER = {
        side: '│',
        across: '─',
        topLeft: '┌',
        topRight: '┐',
        bottomLeft: '└',
        bottomRight: '┘',
    }

    constructor(children, defaultScale) {
        this.children = children;
        this.defaultScale = defaultScale;
    }

    getBorder(length, top) {
        var result = '';
        if (top) {
            result += ' ' + this.BORDER.topLeft;
            for (let i = 0; i < length; i++) {
                result += this.BORDER.across;
            }
            result += this.BORDER.topRight;
        } else {
            result += ' ' + this.BORDER.bottomLeft;
            for (let i = 0; i < length; i++) {
                result += this.BORDER.across;
            }
            result += this.BORDER.bottomRight;
        }
        return result + '\n';
    }

    getDefaultScale() {
        return this.getDefaultScale;
    }

    minWidth() {
        return this.children[0].count(1);
    }

    minHeight() {
        return this.children.length;
    }

    create(scale, border) {
        if (!scale || scale < 1) {
            scale = this.defaultScale;
        }

        if (this.children && this.children.length > 0) {
            var result = '';
            for (let i = 0; i < this.children.length; i++) {
                for (let j = 0; j < scale; j++) {
                    if (border) {
                        result += ' ' + this.BORDER.side + this.children[i].create(scale) + this.BORDER.side + '\n';
                    } else {
                        result += '  ' + this.children[i].create(scale) + '\n';
                    }
                }
            }
            if (border) {
                return this.getBorder(this.children[0].count(scale), true) + result + this.getBorder(this.children[0].count(scale), false);
            } else {
                return '\n' + result;
            }
            return result;
        }
        return '';
    }
}

const Pattern = class {

    COLOR_MAP = {
        'red-52': '\u001b[38;5;52m\u001b[48;5;52m',
        'red-124': '\u001b[38;5;124m\u001b[48;5;124m',
        'red-160': '\u001b[38;5;160m\u001b[48;5;160m',
        'red-196': '\u001b[38;5;196m\u001b[48;5;196m',
        'orange-208': '\u001b[38;5;208m\u001b[48;5;208m',
        'yellow-178': '\u001b[38;5;178m\u001b[48;5;178m',
        'yellow-220': '\u001b[38;5;220m\u001b[48;5;220m',
        'green-2': '\u001b[38;5;2m\u001b[48;5;2m',
        'green-22': '\u001b[38;5;22m\u001b[48;5;22m',
        'green-29': '\u001b[38;5;29m\u001b[48;5;29m',
        'blue-4': '\u001b[38;5;4m\u001b[48;5;4m',
        'blue-17': '\u001b[38;5;17m\u001b[48;5;17m',
        'blue-18': '\u001b[38;5;18m\u001b[48;5;18m',
        'blue-19': '\u001b[38;5;19m\u001b[48;5;19m',
        'blue-25': '\u001b[38;5;25m\u001b[48;5;25m',
        'blue-26': '\u001b[38;5;26m\u001b[48;5;26m',
        'blue-27': '\u001b[38;5;27m\u001b[48;5;27m',
        'blue-39': '\u001b[38;5;39m\u001b[48;5;39m',
        'white': '\u001b[38;5;231m\u001b[48;5;231m',
        'black': '\u001b[38;5;16m\u001b[48;5;16m',
        'off': '\u001b[0m',
    }

    constructor(value, color) {
        this.value = value;
        this.color = color;
    }

    create(scale) {
        if (!scale || scale < 1) {
            return '';
        }

        var result = '';
        for (let i = 0; i < scale; i++) {
            result += this.value;
        }

        if (this.color && this.COLOR_MAP[this.color]) {
            return this.COLOR_MAP[this.color] + result + this.COLOR_MAP['off'];
        }
        return result;
    }

    count(scale) {
        return this.value.length * scale;
    }

    setColor(color) {
        this.color = color;
    }
}


module.exports = {
    Pattern: Pattern,
    Row: Row,
    Container: Container,
}