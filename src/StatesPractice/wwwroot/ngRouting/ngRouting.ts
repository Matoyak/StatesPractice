namespace NGRouting {
    angular.module("NGRouting", ["ui.router"])
        .config(($stateProvider: ng.ui.IStateProvider,
            $locationProvider: ng.ILocationProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
            $stateProvider
                .state("Home", {
                    url: "/",
                    templateUrl: "/ngRouting/home.html"
                }).state("Contact Us", {
                    url: "/contact",
                    templateUrl: "/ngRouting/contact.html"
                }).state("About Me", {
                    url: "/about",
                    templateUrl: "/ngRouting/about.html"
                }).state("Eric Quotes", {
                    url: "/eric",
                    templateUrl: "/ngRouting/ericQuotes.html",
                    controller: QuoteController,
                    controllerAs: "qtc"
                }).state("Fortunes", {
                    url: "/fortunes",
                    templateUrl: "/ngRouting/fortunes.html",
                    controller: QuoteController,
                    controllerAs: "qtc"
                });
            $urlRouterProvider.otherwise("/");
            $locationProvider.html5Mode(true);
        });

    class QuoteService {
        public ericQuotes = [
            '"You Firefox users just have so many problems..."',
            '"Go character by character..."',
            '"Oh God, oh God, shit, come back! ... Your track-pad is very sensitive..."',
            '"How did we fix this last time again?"',
            '"So I wrote a game engine in Groovy..."',
            '"One time I wrote an assembly code generator..."',
            '"Tattoo it to your ... the back of your hand. I would\'ve said forehead, but you couldn\'t exactly see it there."',
            '"What are you doing? Something crazy, no doubt."',
            '"Make sure they\'re strings...not variable references. ~ahem~"',
            '"It\'s the Heisenbug. The bug only exists when you\'re not looking for it."',
            '"Sweet!"',
            '"Craft your burrito to contain all the data you need to know."',
            '"But I\'m weird, so ... y\'know."',
            '"It\'s like the DMV ... it just doesn\'t work."',
            '"REPONSE!"',
            '"Oh come ON!"',
            '"Very disappointing."',
            '"It\'s gonna look like crap anyways, \'cause my CSS is about ... here."',
            '"What the fuck is haaaappening..."',
            '"Modal modal modal modal modal modal modal."'
        ]

        public fortunes = [
            '"Your future contains murder."',
            '"Your program will not compile."',
            '"Help, I am trapped in a fortune cookie factory."',
            '"Your future contains syntax errors. Everywhere."',
            '" Abort, Retry, Fail?"',
            '"The program will compile, but show nothing."',
            '"Be careful of Off by One errors."',
            '"Double check your typings."',
            '"Git Repo Disaster."',
            '"Your future contains Ruby."',
            '"Your future contains ridiculous documentation."',
            '"Your future contains JavaScript."',
            '"I foresee Runtime Errors in your future."',
            '"Be careful when coding arrays this time."',
            '"RegEx..."',
            '"Your future contains C#."',
            '"Beware when handling error messages..."',
            '"Watch out for Internet Explorer."',
            '"TILT"',
            '"You have been banished to the wastelands of PHP."'
        ]

        public randomQuote(arr: string[]): string {
            let rand = Math.floor(Math.random() * arr.length);
            return arr[rand];
        }
    }
    angular.module("NGRouting").service("quoteService", QuoteService);

    class QuoteController {
        public quote: string;
        public fortune: string;

        constructor(private quoteService: QuoteService) {
            //add button that grabs a random, rather than on refresh.
            //store which ones we've already seen, if it's going to pop it up, flip a coin about whether or not to show it.
            this.quote = quoteService.randomQuote(quoteService.ericQuotes);
            this.fortune = quoteService.randomQuote(quoteService.fortunes);
        }

        public newFortune() {
            this.fortune = this.quoteService.randomQuote(this.quoteService.fortunes);
        }

        public newQuote() {
            this.quote = this.quoteService.randomQuote(this.quoteService.ericQuotes);
        }
    }
    angular.module("NGRouting").controller("quoteController", QuoteController);
}