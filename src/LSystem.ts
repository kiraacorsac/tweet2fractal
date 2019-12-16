import { LSystemRules, specials } from "./LSystemRules.js";

export class LSystem {
    
    
    private rulebook : Record<string, string>;
    private axiom : string;
    private alphabet : string;
    
    constructor(rulebook :  LSystemRules) {
        this.axiom = rulebook.axiom;
        this.alphabet = rulebook.alphabet; 
        this.rulebook = rulebook.rulebook;

    }



    private iterate(start : string) : string{
    
        let nextIteration = "";
        for(let letter of start){
            nextIteration += letter in this.rulebook ? this.rulebook[letter] : letter;
        }

        return nextIteration;

    }

    public getIteration(n: number) : string{
        let iteration = this.axiom;
        for (let i = 0; i < n; i++) {
            iteration = this.iterate(iteration);
        }
        return this.finalize(iteration);
    }

    private finalize(iteration : string) : string {
        let result = "";
        for(let letter of iteration) {
            if(specials.includes(letter)){
                result += letter;
            }else if(letter in this.rulebook && this.rulebook[letter].length == 1){
                result += this.rulebook[letter];
            }
        }

        return this.balanceBrackets(result);
    }

    private balanceBrackets(iteration : string) : string {
        let score = 0; 
        for (const letter of iteration) {
            if(letter == "["){
                score++;
            } else if(letter == "]" && score > 0){
                score--;
            }
        }
        for (let i = 0; i < score; i++) {
            iteration += "]"
        }
        score = 0; 
        for (const letter of iteration) {
            if(letter == "]"){
                score++;
            } else if (letter == "["){
                score--;
            }
        }

        for (let i = 0; i < score; i++) {
            iteration = "[" + iteration;
        }

        return iteration;
    }
}