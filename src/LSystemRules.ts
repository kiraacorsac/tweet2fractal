export interface LSystemRules {
    axiom : string;
    alphabet : string;
    rulebook : Record<string, string>;
}

export let specials =  ["+", "-", "[", "]", ".", ","];

export let colors = ["1", "2", "3", "4", "5"];