class TurtleState {
    constructor(angle, stroke, x, y) {
        this.angle = angle;
        this.stroke = stroke;
        this.x = x;
        this.y = y;
    }
    copy() {
        return new TurtleState(this.angle, this.stroke, this.x, this.y);
    }
}
class Turtle {
    constructor(c, angle, stroke, x, y) {
        this.minX = 0;
        this.minY = 0;
        this.maxX = 0;
        this.maxY = 0;
        this.c = c;
        this.state = new TurtleState(angle, stroke, x, y);
        this.history = [];
    }
    forward(length) {
        let newX = this.state.x + length * Math.sin(this.c.radians(this.state.angle));
        let newY = this.state.y + length * Math.cos(this.c.radians(this.state.angle));
        let stroke = this.state.stroke;
        this.stroke(this.c.color(220));
        this.c.strokeWeight(6);
        this.c.line(this.state.x, this.state.y, newX, newY);
        this.stroke(stroke);
        this.c.strokeWeight(5);
        this.c.line(this.state.x, this.state.y, newX, newY);
        this.state.x = newX;
        this.state.y = newY;
        this.remakeBorders();
    }
    remakeBorders() {
        if (this.state.x < this.minX) {
            this.minX = this.state.x;
        }
        if (this.state.y < this.minY) {
            this.minY = this.state.y;
        }
        if (this.state.x > this.maxX) {
            this.maxX = this.state.x;
        }
        if (this.state.y > this.maxY) {
            this.maxY = this.state.y;
        }
    }
    rotate(angle) {
        this.state.angle += angle;
    }
    push() {
        this.history.push(this.state);
        this.state = this.state.copy();
    }
    pop() {
        this.state = this.history.pop();
    }
    stroke(color) {
        this.state.stroke = color;
        this.c.stroke(this.state.stroke);
    }
    telemetry() {
        return {
            minX: this.minX,
            minY: this.minY,
            maxX: this.maxX,
            maxY: this.maxY
        };
    }
}
export class LSystemVisualizer {
    constructor(sentence, angle, size) {
        this.sentence = sentence;
        this.angle = angle;
        this.size = size;
    }
    draw(p5, offset) {
        p5.angleMode(p5.DEGREES);
        p5.background(32);
        //p5.stroke(p5.color("#8E6B88"));
        let colors = [
            p5.color("#C7DEE4"),
            p5.color("#7FA4BF"),
            p5.color("#8E6B88"),
            p5.color("#CCBFA7")
        ];
        //let colors = [p5.color(247, 193, 187), p5.color(136, 90, 90), p5.color(53, 58, 71), p5.color(132, 176, 130), p5.color(220, 19, 108)];
        let turtle = this.renderDrawing(p5, colors, 1);
        let tel = turtle.telemetry();
        let maxX = p5.max(tel.maxX, Math.abs(tel.minX));
        let maxY = p5.max(tel.maxY, Math.abs(tel.minY));
        p5.background(32);
        this.renderDrawing(p5, colors, maxX > maxY ? (p5.height / 2) / maxX : (p5.width / 2) / maxY);
        p5.resetMatrix();
        return;
    }
    renderDrawing(p5, colors, multiplyer) {
        p5.resetMatrix();
        p5.translate(p5.width / 2, p5.height / 2);
        let currentStroke = p5.color("#8E6B88");
        let turtle = new Turtle(p5, 0, currentStroke, 0, 0);
        for (var i = 0; i < this.sentence.length; i++) {
            var current = this.sentence.charAt(i);
            if (current == ".") {
                turtle.forward(this.size * multiplyer);
            }
            else if (current == "+") {
                turtle.rotate(this.angle);
            }
            else if (current == "-") {
                turtle.rotate(-this.angle);
            }
            else if (current == "[") {
                turtle.push();
            }
            else if (current == "]") {
                turtle.pop();
            }
            else if (parseInt(current) in colors) {
                turtle.stroke(colors[parseInt(current)]);
            }
        }
        return turtle;
    }
}
