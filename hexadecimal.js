function hexadecimal(hex) {
    if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
    }
    if (hex.length === 3) {
        hex = hex.split('').map(function (char) { return char + char; }).join('');
    }
    if (hex.length === 6) {
        var r = parseInt(hex.substr(0, 2), 16);
        var g = parseInt(hex.substr(2, 2), 16);
        var b = parseInt(hex.substr(4, 2), 16);
        return { r: r, g: g, b: b };
    }
    else {
        throw new Error('Invalid hex color');
    }
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter color code: ', (input) => {
    var rgbColor = hexadecimal(input);
    console.log(rgbColor);
    rl.close();
});
