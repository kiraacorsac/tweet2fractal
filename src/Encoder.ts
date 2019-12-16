import { LSystemRules, specials, colors } from "./LSystemRules.js";

export class Encoder{
    private alphabet : string;
    private axiom : string;

    constructor(name: string) {
        this.axiom = name.toUpperCase();
        this.alphabet = name
            .toUpperCase()
            .split("")
            .filter((v, i, a) => a.indexOf(v) === i) // unique
            .filter((v, i, a) => this.isAlpha(v))
            .join("");
    }

    private isAlpha(ch : string) : boolean{
        return /^[A-Z]$/.test(ch);
    }

    private encode(letter: string) : string {
        letter = letter.toUpperCase();
        if(!this.isAlpha(letter)){
            return "";
        }

        if(this.alphabet.includes(letter)){
            return letter;
        }

        let maxVal = this.alphabet.length;
        let asInt = letter.charCodeAt(0) - 65;
        let newInt = (asInt % maxVal);
        return this.alphabet[newInt];
    }

    public encodeSentence(sentence : string) : string {
        let result = "";
        for(let letter of sentence) {
            result += this.encode(letter);
        }
        return result;
    }
    
    public encodeTweet(tweet : string) : LSystemRules {
        let sentences = tweet.split(/[!.,?]/);
        let result : string[] = [] ;
        for(let sentence of sentences){
            result.push(this.encodeSentence(sentence));
        }
        result = result.filter((v) => v !== "");
        return {
            axiom: this.axiom, 
            alphabet: this.alphabet, 
            rulebook: this.makeRulebook(result)
        };
    }

    public makeRulebook(rules : string[]) : Record<string, string>{ 
        rules = specials.concat(rules).concat(colors);
        let zipped : Record<string, string>=  {};
        
        for (let i = 0; i < Math.min(rules.length, this.alphabet.length); i++) {
            zipped[this.alphabet[i]] = rules[i] ;
        }
        return zipped;
    }
}