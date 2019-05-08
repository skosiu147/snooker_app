var app = new Vue({
    el: '#app',
    data: {
        player1FramesWon: 0,
        player1Points: 0,
        player1Break: 0,
        player2FramesWon: 0,
        player2Points: 0,
        player2Break: 0,
        whichPlayer: 0,
        isActive: true,
        pointsOnTable: 147,
        difference: 0,
        redsOnTable: 15,
        redsOnTableFlag: true,
        yellow: false,
        green: false,
        brown: false,
        blue: false,
        pink: false,
        black: false,
        lastColor: false,
        history1: ['0'],
        history2: ['0'],
        history: [{p1:'0',p2:'0'}],
        history1Break: [''],
        history2Break: [''],
    },
    methods: {
        changePlayer(){
            this.breakSaver();
            if(this.redsOnTableFlag){
            this.yellow = false;
            this.green = false;
            this.brown = false;
            this.blue = false;
            this.pink = false;
            this.black = false;
            }
            if(this.whichPlayer == 0) {
                this.whichPlayer = 1;
                this.isActive = false;
                this.player1Break = 0;
            }
            else if(this.whichPlayer == 1) {
                this.whichPlayer = 0;
                this.isActive = true;
                this.player2Break = 0;
            }
            if(this.redsOnTable == 0 && !this.lastColor){
                this.green = false;
                this.brown = false;
                this.blue = false;
                this.pink = false;
                this.black = false;
                this.lastColor = true;
            }
        },
        addFrame(){
            this.breakSaver();
            if(this.player1Points > this.player2Points) {
                this.player1FramesWon += 1;
                //var i = 1;
                //this.history1.push(this.player1Points);
                //this.history2.push(this.player2Points);
                //this.history[i].p1.push(this.player1Points);
                //this.history[i].p2.push(this.player2Points);
                //i++;
                this.history.push({p1: this.player1Points, p2: this.player2Points});
            }
            else if(this.player2Points > this.player1Points) {
                this.player2FramesWon += 1;
                //this.history1.push(this.player1Points);
                //this.history2.push(this.player2Points);
                //this.history[i].p1.push(this.player1Points);
                //this.history[i].p2.push(this.player2Points);
                this.history.push({p1: this.player1Points, p2: this.player2Points});
            }
            this.player1Points = 0;
            this.player1Break = 0;
            this.player2Points = 0;
            this.player2Break = 0;
            this.redsOnTable = 15;
            this.difference = 0;
            this.pointsOnTable = 147;
            this.redsOnTableFlag = true;
            this.yellow = false;
            this.green = false;
            this.brown = false;
            this.blue = false;
            this.pink = false;
            this.black = false;
            this.lastColor = false;
        },
        addPointsToBreak(i){
            if(this.whichPlayer == 0){
                this.player1Break += i;
                this.player1Points += i;
            }
            if(this.whichPlayer == 1){
                this.player2Break += i;
                this.player2Points += i;
            }

            if(!this.lastColor){
            if(i==1 && this.redsOnTable > 0){
                this.redsOnTable -= 1;
                this.pointsOnTable = this.redsOnTable * 8 + 27;
                this.yellow = true;
                this.green = true;
                this.brown = true;
                this.blue = true;
                this.pink = true;
                this.black = true;
            }
            //
            else if(i==2 && this.redsOnTable > 0){
                this.yellow = false;
                this.green = false;
                this.brown = false;
                this.blue = false;
                this.pink = false;
                this.black = false;
            }else if(i==3 && this.redsOnTable > 0){
                this.yellow = false;
                this.green = false;
                this.brown = false;
                this.blue = false;
                this.pink = false;
                this.black = false;
            }else if(i==4 && this.redsOnTable > 0){
                this.yellow = false;
                this.green = false;
                this.brown = false;
                this.blue = false;
                this.pink = false;
                this.black = false;
            }else if(i==5 && this.redsOnTable > 0){
                this.yellow = false;
                this.green = false;
                this.brown = false;
                this.blue = false;
                this.pink = false;
                this.black = false;
            }else if(i==6 && this.redsOnTable > 0){
                this.yellow = false;
                this.green = false;
                this.brown = false;
                this.blue = false;
                this.pink = false;
                this.black = false;
            }else if(i==7 && this.redsOnTable > 0){
                this.yellow = false;
                this.green = false;
                this.brown = false;
                this.blue = false;
                this.pink = false;
                this.black = false;
            }else if(i==2 || i==3 || i==4 || i==5 || i==6 || i==7 && this.redsOnTable == 0){
                this.lastColor = true;
                this.green = false;
                this.brown = false;
                this.blue = false;
                this.pink = false;
                this.black = false;
            }
        }
            //
            else if(this.lastColor){
            if(i==2 && this.redsOnTable == 0){
                this.pointsOnTable = 25;
                this.yellow = false;
                this.green = true;
            }else if(i==3 && this.redsOnTable == 0){
                this.pointsOnTable = 22;
                this.green = false;
                this.brown = true;
            }else if(i==4 && this.redsOnTable == 0){
                this.pointsOnTable = 18;
                this.brown = false;
                this.blue = true;
            }else if(i==5 && this.redsOnTable == 0){
                this.pointsOnTable = 13;
                this.blue = false;
                this.pink = true;
            }else if(i==6 && this.redsOnTable == 0){
                this.pointsOnTable = 7;
                this.pink = false;
                this.black = true;
            }else if(i==7 && this.redsOnTable == 0){
                this.pointsOnTable = 0;
                this.black = false;
            }
        }
            //
            if(this.redsOnTable == 0){this.redsOnTableFlag = false;}
            this.differenceCounter();
        },
        foul(i){
            if(this.redsOnTableFlag){
            this.yellow = false;
            this.green = false;
            this.brown = false;
            this.blue = false;
            this.pink = false;
            this.black = false;
            }
            if(this.whichPlayer == 0){
                this.player2Points += i;
                this.player1Break = 0;
            }else if(this.whichPlayer == 1){
                this.player1Points += i;
                this.player2Break = 0;
            }
            this.differenceCounter();
        },
        /*freeBall(){
            if(this.player1Break == 0){
                this.redsOnTable += 1;
                this.addPointsToBreak(1);
            }
        },*/
        differenceCounter(){
            var diff = this.player1Points - this.player2Points;
            this.difference = Math.abs(diff);
        },
        breakSaver(){
            if(this.player1Break >= 50){this.history1Break.push(this.player1Break);}
            if(this.player2Break >= 50){this.history2Break.push(this.player2Break);}
        },
        /*clear(){
            this.player1FramesWon = 0;
            this.player1Points = 0;
            this.player1Break = 0;
            this.player2FramesWon = 0;
            this.player2Points = 0;
            this.player2Break = 0;
            this.redsOnTable = 15;
            this.difference = 0;
            this.pointsOnTable = 147;
            this.redsOnTableFlag = true;
            this.yellow = true;
            this.green = true;
            this.brown = true;
            this.blue = true;
            this.pink = true;
            this.black = true;
        },*/
    },
    computed: {
        
    }
})