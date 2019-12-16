import { LSystem } from "./src/LSystem.js";
import { Encoder } from "./src/Encoder.js";
import { LSystemVisualizer } from "./src/LSystemVisualizer.js";
import { ITwitterRepository, FakeTwitter, RealTwitter, ITwitterMessage } from "./src/TwitterRepo.js";
/// <reference path="./lib/p5/p5.d.ts" />

const twitter : ITwitterRepository = new RealTwitter();

let script = (sk : p5) => {    
    

    //either this or just make it into a

    sk.setup = () =>{
        sk.frameRate(0.5);
        sk.draw();
    }

    sk.draw = () =>{
        console.log("running");
        const message = twitter.getLatestDirectedMessage(((reply : string, message : ITwitterMessage) => {
            console.log(reply);
            const enc = new Encoder(message.name);
            //const tweet = "An 'extremely credible source' has called my office and told me that @BarackObama 's birth certificate is a fraud.";
            const lsys = new LSystem(enc.encodeTweet(message.tweet));
            console.log(lsys);
            let angle = 15*(Math.round(message.tweet.length/15));
            //let angle = 15;
            //const viz = new LSystemVisualizer(lsys.getIteration(message.display.iteration), angle, message.display.size);
            console.log(message);
            const viz = new LSystemVisualizer(lsys.getIteration(message.display.iteration), angle, message.display.size);
            let c = sk.createGraphics(1200, 820);
            sk.createCanvas(1200, 820);
            // @ts-ignore-start
            viz.draw(c, message.display.offset);
            c.textAlign(sk.CENTER, sk.TOP);
            c.fill(sk.color(255));
            c.textSize(30);
            c.text("@"+message.author + ": " + message.tweet + "\n (" + message.display.iteration + " iterations)" , 50, 650, 1150, 1200);
            
            var test = c;
            //sk.saveCanvas(c, "latest", "png");
            //sk.image(c, 0, 0, 1200, 820);
            twitter.reply(reply, c.canvas.toDataURL('image/png').replace(/data:image\/png;base64,/, ''));
            //@ts-ignore-end

        }));

    }
}

let p5n = new p5(script);


    



// console.log();

// console.log("d", "Donald Trump");