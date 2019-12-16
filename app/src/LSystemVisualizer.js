export class LSystemVisualizer {
    constructor(sentence, angle, size) {
        this.sentence = sentence;
        this.angle = angle;
        this.size = size;
    }
    draw(p5, offset) {
        p5.angleMode(p5.DEGREES);
        p5.background(32);
        p5.resetMatrix();
        p5.translate(p5.width / 2 + offset.x, p5.height / 2 + offset.y);
        //p5.stroke(p5.color("#8E6B88"));
        let colors = [
            p5.color("#C7DEE4"),
            p5.color("#7FA4BF"),
            p5.color("#8E6B88"),
            p5.color("#CCBFA7")
        ];
        //let colors = [p5.color(247, 193, 187), p5.color(136, 90, 90), p5.color(53, 58, 71), p5.color(132, 176, 130), p5.color(220, 19, 108)];
        let currentStroke = p5.color("#8E6B88");
        for (var i = 0; i < this.sentence.length; i++) {
            var current = this.sentence.charAt(i);
            if (current == ".") {
                p5.stroke(p5.color(220));
                p5.strokeWeight(6);
                p5.line(0, 0, 0, this.size);
                p5.stroke(currentStroke);
                p5.strokeWeight(5);
                p5.line(0, 0, 0, this.size);
                p5.translate(0, this.size);
            }
            else if (current == "+") {
                p5.rotate(this.angle);
            }
            else if (current == "-") {
                p5.rotate(-this.angle);
            }
            else if (current == "[") {
                p5.push();
            }
            else if (current == "]") {
                p5.pop();
            }
            else if (parseInt(current) in colors) {
                currentStroke = (colors[parseInt(current)]);
            }
        }
        p5.resetMatrix();
        return;
    }
}
