const Cube = require('./cube').Cube;


class Solver {
   constructor() {
      this.init = false;
   }

   initialized() {
      return this.init;
   }

   startState(startingState) {
      this.start = startingState;
      var possibleMoves = [];
      Solver.ALL_TURNS.forEach((move) => possibleMoves.push(move));
      this.possibleMoves = possibleMoves;
      this.maxMoves = Solver.DEFAULT_MAX_MOVES;
      this.init = true;
      this.numSolutions = Solver.DEFAULT_NUM_SOLUTIONS;
      return this;
   }

   setMaxMoves(numMoves) {
      this.maxMoves = numMoves;
      return this;
   }

   onlyAllowMoves(moves) {
      this.possibleMoves = moves;
      return this;
   }

   setNumSolutions(numSolutions) {
      this.numSolutions = numSolutions;
      return this;
   }

   // when ready. solve
   solve(endingState) {
      if (!this.init) {
         console.error("must init before solving");
         return;
      }
      this.end = endingState;
      var solutions = [];
      Solver._solve(this.start, this.end, solutions, "",
                    ["", ""], this.possibleMoves, 0, this.maxMoves,
                    this.numSolutions);
      this.init = false;
      
      return solutions;
   }

   static _solve(state, goal, solutions, path, prev,
                 possibleMoves, numMoves, maxMoves,
                 numSolutions) {
      if (state.equals(goal)) {
         solutions.push(path.trim());
      } else if (numMoves < maxMoves && solutions.length < numSolutions) {
         const mostRecent = prev[0];
         const secondMostRecent = prev[1];
         prev[1] = mostRecent;
         for (let i = 0; i < possibleMoves.length; i++) {
            // don't undo the move that we just made or don't do 3 of the same
            // in a row
            if (mostRecent === Cube.inverse(possibleMoves[i]) ||
                (mostRecent === secondMostRecent &&
                 mostRecent === possibleMoves[i])) {
               continue;
            }
            // choose
            state.alg(possibleMoves[i]);
            prev[0] = possibleMoves[i];
            // explore
            Solver._solve(state, goal, solutions,
                          path + possibleMoves[i] + " ", prev,
                          possibleMoves, numMoves + 1, maxMoves,
                          numSolutions);
            // unchoose
            state.undo(possibleMoves[i]);
         }
         prev[0] = mostRecent;
         prev[1] = secondMostRecent;
      }
   }
}

Solver.DEFAULT_MAX_MOVES = 4;
Solver.DEFAULT_NUM_SOLUTIONS = 15;
Solver.ALL_TURNS = ["R", "L", "F", "B", "D", "U",
      "R'", "L'", "F'", "B'", "D'", "U'"];

exports.Solver = Solver;
