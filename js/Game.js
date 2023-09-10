export default class Game{
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }
    nextTurn(){
        this.turn = this.turn ==="X" ? "O" : "X";
    }
    makeMove(i) {
        if (!this.isInProgress()){
            return;

        }
       //this if statement makes it so that no array can be assigned multiple values
        if (this.board[i]){
        return;
        }

        
        this.board[i] = this.turn;
        
        //only toggle turn if there is no winner
        if (!this.findWinningCombination()){
            this.nextTurn
        }


        this.nextTurn();
        
    }
    findWinningCombination() {
        //All possible array combinations needed to win
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
         
        for(const combination of winningCombinations) {
            const [a,b,c] = combination; //array destruction

            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;


        }
    }
    return null;
}
    isInProgress() {
        return !this.findWinningCombination() && this.board.includes(null); // null statement comvers case where there are ties

    }
}