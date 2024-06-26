class ReverseEncoder {
    encode(str) {
        return this.transform(str).split(' ').reverse().join(' ');
    }

    decode(str) {
        return this.transform(str.split(' ').reverse().join(' '));
    }

    transform(str) {
        return str.split('').map(char => {
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
            } else if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode('Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0)));
            } else {
                return char;
            }
        }).join('');
    }
}
let reverseEncoder = new ReverseEncoder();
let encoded = reverseEncoder.encode("dliow svool");
let decoded = reverseEncoder.decode(encoded);

console.log(`Encoded: ${encoded}`);
console.log(`Decoded: ${decoded}`);