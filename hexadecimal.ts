function hexadecimal(hex: string): { r: number; g: number; b: number } {
    if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
    }
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }
    if (hex.length === 6) {
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return { r, g, b };
    } else {
        throw new Error('Invalid hex color');
    }
}

const hexColor = '#FFFFFF';
const rgbColor = hexadecimal(hexColor);
console.log(rgbColor);
