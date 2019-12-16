import { specials, colors } from "./LSystemRules.js";
export class Encoder {
    constructor(name) {
        this.axiom = name.toUpperCase();
        this.alphabet = name
            .toUpperCase()
            .split("")
            .filter((v, i, a) => a.indexOf(v) === i) // unique
            .filter((v, i, a) => this.isAlpha(v))
            .join("");
    }
    isAlpha(ch) {
        return /^[A-Z]$/.test(ch);
    }
    encode(letter) {
        letter = letter.toUpperCase();
        if (!this.isAlpha(letter)) {
            return "";
        }
        if (this.alphabet.includes(letter)) {
            return letter;
        }
        let maxVal = this.alphabet.length;
        let asInt = letter.charCodeAt(0) - 65;
        let newInt = (asInt % maxVal);
        return this.alphabet[newInt];
    }
    encodeSentence(sentence) {
        let result = "";
        for (let letter of sentence) {
            result += this.encode(letter);
        }
        return result;
    }
    encodeTweet(tweet) {
        let sentences = tweet.split(/[!.,?]/);
        let result = [];
        for (let sentence of sentences) {
            result.push(this.encodeSentence(sentence));
        }
        result = result.filter((v) => v !== "");
        return {
            axiom: this.axiom,
            alphabet: this.alphabet,
            rulebook: this.makeRulebook(result)
        };
    }
    makeRulebook(rules) {
        rules = specials.concat(rules).concat(colors);
        let zipped = {};
        for (let i = 0; i < Math.min(rules.length, this.alphabet.length); i++) {
            zipped[this.alphabet[i]] = rules[i];
        }
        return zipped;
    }
}
