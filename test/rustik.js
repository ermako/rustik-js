const expect = require('chai').expect;
const Interpreter = require('../src/interpreter').RustikInterpreter;
const Cube = require('../src/cube').Cube;
const Solver = require('../src/solver').Solver;

describe("Cube", function () {
   it("Cube constructor and toStrings", function () {
      var c1 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      expect(c1.toString()).to.equal("Cube(ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr)");
      expect(c1.toPrettyString()).to.equal(
      "Cube(\n" +
      "    ooo\n" +
      "    ooo\n" +
      "    ooo\n" +
      "bbb yyy ggg www \n" +
      "bbb yyy ggg www \n" +
      "bbb yyy ggg www \n" +
      "    rrr\n" +
      "    rrr\n" +
      "    rrr\n" +
      ")");
   });

   it("equals", function () {
      var c1 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      var c2 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      var c3 = new Cube("yoooooooobbbyyogggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      expect(c1.equals(c2)).to.be.true;
      expect(c2.equals(c3)).to.be.false;
      expect(c1.equals(c3)).to.be.false;
   });

   it("_cycle", function () {
      var c1 = new Cube("1234..................................................");
      var c2 = new Cube("4123..................................................");
      var c3 = new Cube("1234..................................................");
      c1._cycle(0, 1, 2, 3);
      expect(c1.equals(c2)).to.be.true;
      c1._cycle(3, 2, 1, 0);
      expect(c1.equals(c3)).to.be.true;
   });

   it("U turns", function () {
      var c1 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      var c2 = new Cube("oooooooooyyygggwwwbbbbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      const original = c1.toString();
      c1.U();
      expect(c1.equals(c2)).to.be.true;
      c1.Ui();
      expect(c1.toString()).to.be.equal(original);
   });

   it("D turns", function () {
      var c1 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      var c2 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwwwwbbbyyygggrrrrrrrrr");
      const original = c1.toString();
      c1.D();
      expect(c1.equals(c2)).to.be.true;
      c1.Di();
      expect(c1.toString()).to.be.equal(original);
   });

   it("F turns", function () {
      var c1 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      var c2 = new Cube("oooooobbbbbryyyoggwwwbbryyyoggwwwbbryyyoggwwwgggrrrrrr");
      const original = c1.toString();
      c1.F();
      expect(c1.equals(c2)).to.be.true;
      c1.Fi();
      expect(c1.toString()).to.be.equal(original);
   });

   it("B turns", function () {
      var c1 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      var c2 = new Cube("gggooooooobbyyyggrwwwobbyyyggrwwwobbyyyggrwwwrrrrrrbbb");
      const original = c1.toString();
      c1.B();
         expect(c1.equals(c2)).to.be.true;
      c1.Bi();
      expect(c1.toString()).to.be.equal(original);
   });

   it("R turns", function () {
      var c1 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      var c2 = new Cube("ooyooyooybbbyyrgggowwbbbyyrgggowwbbbyyrgggowwrrwrrwrrw");
      const original = c1.toString();
      c1.R();
      expect(c1.equals(c2)).to.be.true;
      c1.Ri();
      expect(c1.toString()).to.be.equal(original);
   });

   it("L turns", function () {
      var c1 = new Cube("ooooooooobbbyyygggwwwbbbyyygggwwwbbbyyygggwwwrrrrrrrrr");
      var c2 = new Cube("woowoowoobbboyygggwwrbbboyygggwwrbbboyygggwwryrryrryrr");
      const original = c1.toString();
      c1.L();
      expect(c1.equals(c2)).to.be.true;
      c1.Li();
      expect(c1.toString()).to.be.equal(original);
   });

   it("long algorithms", function () {
      var c1 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      var c2 = new Cube("bbbbbbbbbwywrryowryoowwwrrryyyooowwwrrryyyoooggggggggg");
      c1.R().U().Ri().Ui().Ri()
        .F().R2().Ui().Ri()
        .Ui().R().U().Ri()
        .Fi()
      expect(c1.equals(c2)).to.be.true;
      var c3 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      var c4 = new Cube("wwrobwbbrbyryywgggyrrowgyrgryyrogoboyogobbwwybwwrgogbo");
      c3.R().D().Ri().B().L().U2().L()
        .B().Di().Li().R2().F().Ui();
      expect(c3.equals(c4)).to.be.true;
      var c5 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      var c6 = new Cube("ywbbboorggywbbwogwrbrrwryrboyowowbgoyggyygwwrbyorgoygr");
      var c7 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      c5.U().R().L().D().F().B().Ri().Bi().Ui().Li().Fi().Di().U2().R2().D2().L2()
        .B2().F2().R().L().Li().Di().R().B().F().L().F().Di().U2().B().Di().U2();
      c7.alg("U R L D F B R' B' U' L' F' D' U2 R2 D2 L2 B2 F2 R L L' D' R B F L F D' U2 B D' U2");
      expect(c5.equals(c6)).to.be.true;
      expect(c7.equals(c6)).to.be.true;
   });

   it("test scramble", function () {
      var c1 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      const original = c1.toString();
      const scramble = Cube.scramble(10);
      c1.alg(scramble);
      expect(c1.toString() === original).to.be.false;
   });
});


describe("Solver", function () {
   it("one move solve", function () {
      var c1 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      var c2 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      c2.U();
      var solver = new Solver();
      const solutions = solver.startState(c1)
            .onlyAllowMoves(["U"])
            .setMaxMoves(2)
            .solve(c2);
      expect(solutions.includes("U")).to.be.true;
   });

   it("short solves", function () {
      var c1 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      var c2 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      const orig = c1.toString();
      c2.alg("R U R' U'");

      var solver = new Solver();
      var solutions = solver.startState(c1)
            .onlyAllowMoves(["R", "R'", "U", "U'"])
            .setMaxMoves(4)
            .solve(c2);
      expect(solutions.includes("R U R' U'")).to.be.true;
      expect(orig).to.be.equal(c1.toString());

      solutions = solver.startState(c2)
            .onlyAllowMoves(["R", "R'", "U", "U'"])
            .setMaxMoves(4)
            .solve(c1);
      expect(solutions.includes("U R U' R'")).to.be.true;
   });

   it("7 move solves", function () {
      var c1 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      var c2 = new Cube("bbbbbbbbbwwwrrryyyooowwwrrryyyooowwwrrryyyoooggggggggg");
      const orig = c1.toString();
      c2.alg("R U R' U' F U D");

      var solver = new Solver();
      const solutions = solver.startState(c1)
            .onlyAllowMoves(["R", "R'", "U", "U'", "F", "F'", "D", "D'"])
            .setMaxMoves(7)
            .solve(c2);

      expect(solutions.includes("R U R' U' F U D")).to.be.true;
      expect(c1.toString()).to.be.equal(orig);
   });

   // scramble F B D R L R' F' R' U D B L R F B
   it("7 move solves with wildcards", function () {
      var c1 = new Cube("wwwwwwwwwooogggrrrbbbooogggrrrbbbooogggrrrbbbyyyyyyyyy");
      c1.alg("U U F R F' R' U R U' F D U D' R' U' D F' D R L' D' L");
      // solved yellow cross
      var c2 = new Cube("......................o..g..r..b..o..g..r..b..y.yyy.y.");
      const orig = c1.toString();

      var solver = new Solver();
      const solutions = solver.startState(c1)
            .onlyAllowMoves(["R", "R'", "U", "U'", "F", "F'", "D", "D'", "L", "L'"])
            .setMaxMoves(8)
            .setNumSolutions(1)
            .solve(c2);

      // we should be able to find a solution
      expect(solutions.length > 0).to.be.true;
      expect(c1.toString()).to.be.equal(orig);
   });
});
