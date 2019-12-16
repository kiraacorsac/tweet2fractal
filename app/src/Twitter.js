export class RealTwitter {
    available() {
        throw new Error("Method not implemented.");
    }
    getMessages(author) {
        return;
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
                    size: 2,
                    offset: {
                        x: 0,
                        y: -100
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
                    size: 10,
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
                    size: 10,
                    offset: {
                        x: 800,
                        y: 200
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
