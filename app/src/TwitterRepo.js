/// <reference types="node" />
import Codebird from '../node_modules/codebird/codebird.js';
export class RealTwitter {
    constructor() {
        this.client = new Codebird();
        this.client.setConsumerKey("pUpfcGX2XtZx72pNYRp7eD0vG", "BbLs6KRfKH4GLJUYUDMMwetQ1aYDPL7sbr19PGxcct4S6ypVtK");
        this.client.setToken("1205364812932366338-YOaUH16uc82VBpDLLnD6MZXgaZijSX", "LStrMbvzeCRAroIya1j00Yd3x8jd7bemlbr9p1VyfzFcR");
    }
    available() {
        throw new Error("Method not implemented.");
    }
    reply(at, data) {
        this.client.__call("media_upload", {
            "media_data": data
        }, (reply, rate, err) => {
            this.client.__call("statuses_update", {
                "media_ids": reply.media_id_string,
                "status": "Hey, @" + at + ", here's your fractal. Pretty, isn't it?",
            }, (r, rate, err) => {
                console.log("did a thing");
            });
        });
    }
    represent(data) {
        return {
            author: data.user.name,
            name: data.user.screen_name,
            tweet: data.text,
            display: {
                iteration: 4,
                angle: 33,
                size: 25,
                offset: {
                    x: 0,
                    y: 0
                }
            }
        };
    }
    getMessage(id, cb) {
        this.client.__call("statuses_show_ID", 'id=267286471172562944', data => {
            console.log(data);
            return cb(this.represent(data));
        });
    }
    getLatestDirectedMessage(cb) {
        this.client.__call("statuses_mentionsTimeline", data => {
            let last = data[0];
            console.log(last.id, this.latestId);
            let notAgain = this.latestId;
            this.latestId = last.id;
            if (last.id != notAgain) {
                cb(last.user.screen_name, this.represent(last.quoted_status));
            }
        });
    }
    getMessages(author) {
        this;
        return null;
    }
}
export class FakeTwitter {
    constructor() {
        this.messages = [
            {
                author: "realDonaldTrump",
                name: "Donald Trump",
                tweet: "Snowing in Texas and Louisiana, record setting freezing temperatures throughout the country and beyond. Global warming is an expensive hoax!",
                display: {
                    iteration: 4,
                    angle: 90,
                    size: 7,
                    offset: {
                        x: 400,
                        y: 0
                    }
                }
            },
            {
                author: "realDonaldTrump",
                name: "Donald Trump",
                tweet: "Despite the constant negative press covfefe",
                display: {
                    iteration: 10,
                    angle: 10,
                    size: 10,
                    offset: {
                        x: 200,
                        y: -1000
                    }
                }
            },
            {
                author: "realDonaldTrump",
                name: "Donald Trump",
                tweet: "Thanks- many are saying I'm the best 140 character writer in the world. It's easy when it's fun.",
                display: {
                    iteration: 4,
                    angle: 33,
                    size: 6,
                    offset: {
                        x: -50,
                        y: -200
                    }
                }
            },
            {
                author: "realDonaldTrump",
                name: "Donald Trump",
                tweet: "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault",
                display: {
                    iteration: 7,
                    angle: 33,
                    size: 100,
                    offset: {
                        x: -50,
                        y: -100
                    }
                }
            },
            {
                author: "elonmusk",
                name: "Elon Musk",
                tweet: "Am considering taking Tesla private at $420. Funding secured.",
                display: {
                    iteration: 5,
                    angle: 90,
                    size: 100,
                    offset: {
                        x: 0,
                        y: 0
                    }
                }
            },
            {
                author: "elonmusk",
                name: "Elon Musk",
                tweet: "When the zombie apocalypse happens, you’ll be glad you bought a flamethrower. Works against hordes of the undead or your money back!",
                display: {
                    iteration: 5,
                    angle: 0,
                    size: 100,
                    offset: {
                        x: 0,
                        y: 0
                    }
                }
            },
            {
                author: "elonmusk",
                name: "Elon Musk",
                tweet: "Reason Cybertruck is so planar is that you can’t stamp ultra-hard 30X steel, because it breaks the stamping press",
                display: {
                    iteration: 5,
                    angle: 0,
                    size: 100,
                    offset: {
                        x: 0,
                        y: 0
                    }
                }
            },
            {
                author: "SpaceX",
                name: "SpaceX",
                tweet: "11 years ago today, we launched our first successful mission. To date, we’ve completed 78 launches and have developed the world’s only operational reusable orbital class rockets and spacecraft—capable of launching to space, returning to Earth, and flying again"
            },
            {
                author: "Chai_Foxpup",
                name: "Chai Fox @ PDFC 🔞+💄💦",
                tweet: "How about I rub that bulge with some soft beans?",
                display: {
                    iteration: 15,
                    angle: 0,
                    size: 70,
                    offset: {
                        x: 0,
                        y: 0
                    }
                }
            },
            {
                author: "jack",
                name: "Jack",
                tweet: "just setting up my twttr",
            },
            {
                author: "TayandYou",
                name: "TayTweets",
                tweet: "@TheBigBrebowski ricky gervais learned totalitarianism from adolf hitler, the inventor of atheism"
            },
            {
                author: "McDonaldsCorp",
                name: "McDonald's",
                tweet: "Black Friday **** Need copy and link ****",
                display: {
                    iteration: 10,
                    angle: 0,
                    size: 70,
                    offset: {
                        x: 1900,
                        y: -200
                    }
                }
            }, {
                author: "Lyro_Raines",
                name: "Lyro Raines",
                tweet: "I have this habit of shaking my feet, when I'm sitting. Today I sat a lot x3 point is, now that I'm laying, the muscles starts to hurt xD anyone available for massage? x3 can return the favour! ;p",
                display: {
                    iteration: 6,
                    angle: 0,
                    size: 75,
                    offset: {
                        x: 0,
                        y: 0
                    }
                }
            }
        ];
    }
    reply(at, data) {
        throw new Error("Method not implemented.");
    }
    getMessage(id) {
        throw new Error("Method not implemented.");
    }
    getRandomMessage() {
        throw new Error("Method not implemented.");
    }
    getLatestDirectedMessage() {
        throw new Error("Method not implemented.");
    }
    getMessages(author) {
        return this.messages
            .filter(m => m.author == author)
            .map(m => {
            return {
                author: m.author,
                name: m.name,
                tweet: m.tweet,
                display: m.display != null
                    ? m.display
                    : {
                        iteration: 4,
                        angle: 33,
                        size: 5,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    }
            };
        });
    }
    available() {
        return true;
    }
}
