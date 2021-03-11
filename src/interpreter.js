const antlr4 = require("antlr4");
const RustikLexer = require("../gen/RustikLexer").RustikLexer;
const RustikParser = require("../gen/RustikParser").RustikParser;
const RustikParserListener = require("../gen/RustikParserListener").RustikParserListener;
const Cube = require('./cube').Cube;
const Solver = require('../src/solver').Solver;

class RustikInterpreter extends RustikParserListener {
   constructor() {
      super();
      this._inputVar = "_$ctx";
      this._outputVar = "_$result";
   }

   interpret(rustikfile) {
      this.output = "";
      this.solver = new Solver();

      const chars = new antlr4.InputStream(rustikfile);
      const lexer = new RustikLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new RustikParser(tokens);
      parser.buildParseTrees = true;
      const tree = parser.rustikfile();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, tree);

      return this.output;
   }

   exitScrambledState(ctx) {
      const scramble = Cube.scramble(17);
      const cube = new Cube("wwwwwwwwwooogggrrrbbbooogggrrrbbbooogggrrrbbbyyyyyyyyy");
      cube.alg(scramble);
      this.output += "Cube(\n  " + cube.stickerString() + "\n  [" + scramble + "]\n)\n";
      if (this.solver.initialized()) {
         console.error("currently does not support reaching scrambled states");
      } else {
         this.solver.startState(cube);
      }
   }

   enterSpecifiedState(ctx) {
      this.stateDiagram = "";
      console.log("enterSpecifiedState");
   }

   exitSpecifiedState(ctx) {
      const cube = new Cube(this.stateDiagram);
      console.log("exitSpecifiedState");
      if (this.solver.initialized()) {
         if (this.onlyTurns) {
            this.solver.onlyAllowMoves(this.onlyTurns);
         }
         const solutions = this.solver.solve(cube);
         console.log(solutions);
         this.output += "[\n";
         for (let i = 0; i < solutions.length; i++) {
            console.log(solutions[i]);
            this.output += "  " + solutions[i] + "\n";
         }

         this.output += "]\n";

         // set us up for another solution sequence
         this.onlyTurns = null;
         this.solver.startState(cube);
         this.output += "Cube(\n  " + cube.stickerString() + "\n)\n";
      } else {
         this.output += "Cube(\n  " + cube.stickerString() + "\n)\n";
         this.solver.startState(cube);
      }
   }

   enterLine(ctx) {
      this.stateDiagram += ctx.getText();
   }

   // allow solutions that only have these traits
   enterOnly(ctx) {
      console.log("enterOnly");
      this.onlyTurns = [];
   }

   // don't allow solutions that have these traits
   enterRestriction(ctx) {
      this.restrictSequences = [];
   }

   enterTurnQualifier(ctx) {
      this.onlyTurns.push(ctx.getText());
   }

   enterAfterQualifier(ctx) {
      this.restrictSequences = ctx.getText();
   }

   enterMoves(ctx) {
      this.solver.setMaxMoves(ctx.getChild(2).getText());
   }
}

// This is the magic incantation to set up the interpreter pipeline
// and run both the parser and the tree walk. We export the just the
// compile function (which takes a regexp string as input and returns
// the labeled html spans and the registration script which needs to be run).
// index.html knows what to do with this once you do "npm build" to run browserify.
function lexAndParse(input) {
   const chars = new antlr4.InputStream(input);
   const lexer = new RustikLexer(chars);
   const tokens = new antlr4.CommonTokenStream(lexer);
   const parser = new RustikParser(tokens);
   parser.buildParseTrees = true;
   const tree = parser.rustikfile();
   return tree;
}

function interpret(input) {
   //const tree = lexAndParse(input);
   //const interpreter = new RustikParserListener();
   //antlr4.tree.ParseTreeWalker.DEFAULT.walk(interpreter, tree);
   //return [interpreter.result, interpreter.script];
   const interpreter = new RustikInterpreter();
   return interpreter.interpret(input);
}

module.exports = interpret;

exports.RustikInterpreter = RustikInterpreter;
