class Cube {
   // construct Cube with given stateDiagram. if stateDiagram is
   // not given, constructs a randomly scrambled cube with colors
   // o,y,b,g,r,w
   constructor(stateDiagram) {
      this.NUM_STICKERS = 54;
      this.SCRAMBLE_LENGTH = 20;
      if (stateDiagram == undefined) {
         return;
      }

      if (stateDiagram.length !== this.NUM_STICKERS) {
         console.error("incorrect stateDiagram. must have length " + this.NUM_STICKERS);
      }
      this.stickers = [];
      for (let i = 0; i < stateDiagram.length; i++) {
         this.stickers[i] = stateDiagram[i];
      }
   }

   // note: not an official WCA scramble
   static scramble(length) {
      const turns = ["R", "L", "F", "B", "D", "U",
               "R'", "L'", "F'", "B'", "D'", "U'",
               "R2", "L2", "F2", "B2", "D2", "U2"];
      var alg = "";
      for (let i = 0; i < length; i++) {
         const choice = Math.floor(Math.random() * turns.length);
         alg += turns[choice] + " ";
      }
      return alg.trim();
   }

   // cycles the given four stickers.
   // s1 -> s2, s2 -> s3, s3 -> s4, s4 -> s1
   _cycle(s1, s2, s3, s4) {
      const temp = this.stickers[s1];
      this.stickers[s1] = this.stickers[s4];
      this.stickers[s4] = this.stickers[s3];
      this.stickers[s3] = this.stickers[s2];
      this.stickers[s2] = temp;
   }

   equals(other) {
      if (typeof(other) !== "object" || other.constructor.name !== "Cube") {
         return false;
      }
      for (let i = 0; i < this.stickers.length; i++) {
         if (this.stickers[i] !== "." &&
             other.stickers[i] !== "." &&
             this.stickers[i] !== other.stickers[i]) {
            return false;
         }
      }
      return true;
   }

   toString() {
      return "Cube(" + this.stickerString() + ")";
   }

   stickerString() {
      let result = "";
      this.stickers.forEach((c) => result += c);
      return result;
   }

   toPrettyString() {
      let result = "";
      for (let i = 0; i < 3; i++) {
         result += "    " +
            this.stickers[i * 3] +
            this.stickers[i * 3 + 1] +
            this.stickers[i * 3 + 2] + "\n";
      }
      for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 4; j++) {
            result += this.stickers[9 + i * 12 + j * 3] +
               this.stickers[9 + i * 12 + j * 3 + 1] +
               this.stickers[9 + i * 12 + j * 3 + 2] + " ";
         }
         result += "\n";
      }
      for (let i = 0; i < 3; i++) {
         result += "    " +
            this.stickers[45 + i * 3] +
            this.stickers[45 + i * 3 + 1] +
            this.stickers[45 + i * 3 + 2] + "\n";
      }
      return "Cube(\n" + result + ")";
   }

   alg(alg) {
      if (typeof(alg) === "string") {
         alg = alg.trim().split(/[ ,]+/);
      }
      for (let i = 0; i < alg.length; i++) {
         if (alg[i] === "R") {
            this.R();
         } else if (alg[i] === "L") {
            this.L();
         } else if (alg[i] === "F") {
            this.F();
         } else if (alg[i] === "B") {
            this.B();
         } else if (alg[i] === "U") {
            this.U();
         } else if (alg[i] === "D") {
            this.D();
         } else if (alg[i] === "R'") {
            this.Ri();
         } else if (alg[i] === "L'") {
            this.Li();
         } else if (alg[i] === "F'") {
            this.Fi();
         } else if (alg[i] === "B'") {
            this.Bi();
         } else if (alg[i] === "U'") {
            this.Ui();
         } else if (alg[i] === "D'") {
            this.Di();
         } else if (alg[i] === "R2") {
            this.R2();
         } else if (alg[i] === "L2") {
            this.L2();
         } else if (alg[i] === "F2") {
            this.F2();
         } else if (alg[i] === "B2") {
            this.B2();
         } else if (alg[i] === "U2") {
            this.U2();
         } else if (alg[i] === "D2") {
            this.D2();
         } else {
            console.error("unkown turn " + alg[i]);
         }
      }
      return this;
   }

   undo(alg) {
      if (typeof(alg) === "string") {
         alg = alg.trim().split(/[ ,]+/);
      }
      for (let i = alg.length - 1; i >= 0; i--) {
         if (alg[i] === "R") {
            this.Ri();
         } else if (alg[i] === "L") {
            this.Li();
         } else if (alg[i] === "F") {
            this.Fi();
         } else if (alg[i] === "B") {
            this.Bi();
         } else if (alg[i] === "U") {
            this.Ui();
         } else if (alg[i] === "D") {
            this.Di();
         } else if (alg[i] === "R'") {
            this.R();
         } else if (alg[i] === "L'") {
            this.L();
         } else if (alg[i] === "F'") {
            this.F();
         } else if (alg[i] === "B'") {
            this.B();
         } else if (alg[i] === "U'") {
            this.U();
         } else if (alg[i] === "D'") {
            this.D();
         } else if (alg[i] === "R2") {
            this.R2();
         } else if (alg[i] === "L2") {
            this.L2();
         } else if (alg[i] === "F2") {
            this.F2();
         } else if (alg[i] === "B2") {
            this.B2();
         } else if (alg[i] === "U2") {
            this.U2();
         } else if (alg[i] === "D2") {
            this.D2();
         } else {
            console.error("unkown turn " + alg[i]);
         }
      }
      return this;
   }

   static inverse(turn) {
      if (turn.length === 1) {
         return turn + "'";
      } else if (turn.length === 2 && turn[1] == "2") {
         return turn;
      } else if (turn.length === 2 && turn[1] == "'") {
         return turn[0];
      } else {
         console.error("unkown turn " + turn);
      }
   }

   U() {
      // corners of the U face
      this._cycle(0, 2, 8, 6);
      // edges of the U face
      this._cycle(1, 5, 7, 3);
      // corners of the top layer
      this._cycle(9, 18, 15, 12);
      this._cycle(11, 20, 17, 14);
      // edges of the top layer
      this._cycle(10, 19, 16, 13);
      return this;
   }

   Ui() {
      // corners of the U face
      this._cycle(6, 8, 2, 0);
      // edges of the U face
      this._cycle(3, 7, 5, 1);
      // corners of the top layer
      this._cycle(12, 15, 18, 9);
      this._cycle(14, 17, 20, 11);
      // edges of the top layer
      this._cycle(13, 16, 19, 10);
      return this;
   }

   D() {
      // corners of the D face
      this._cycle(45, 47, 53, 51);
      // edges of the D face
      this._cycle(46, 50, 52, 48);
      // corners of the bottom layer
      this._cycle(33, 36, 39, 42);
      this._cycle(35, 38, 41, 44);
      // edges of the bottom layer
      this._cycle(34, 37, 40, 43);
      return this;
   }

   Di() {
      // corners of the D face
      this._cycle(51, 53, 47, 45);
      // edges of the D face
      this._cycle(48, 52, 50, 46);
      // corners of the bottom layer
      this._cycle(42, 39, 36, 33);
      this._cycle(44, 41, 38, 35);
      // edges of the bottom layer
      this._cycle(43, 40, 37, 34);
      return this;
   }

   F() {
      // corners of the F face
      this._cycle(12, 14, 38, 36);
      // edges of the F face
      this._cycle(13, 26, 37, 24);
      // corners of the front layer
      this._cycle(8, 39, 45, 11);
      this._cycle(6, 15, 47, 35);
      // edges of the front layer
      this._cycle(7, 27, 46, 23);
      return this;
   }

   Fi() {
      // corners of the F face
      this._cycle(36, 38, 14, 12);
      // edges of the F face
      this._cycle(24, 37, 26, 13);
      // corners of the front layer
      this._cycle(11, 45, 39, 8);
      this._cycle(35, 47, 15, 6);
      // edges of the front layer
      this._cycle(23, 46, 27, 7);
      return this;
   }

   B() {
      // corners of the B face
      this._cycle(18, 20, 44, 42);
      // edges of the B face
      this._cycle(19, 32, 43, 30);
      // corners of the back layer
      this._cycle(2, 9, 51, 41);
      this._cycle(0, 33, 53, 17);
      // edges of the back layer
      this._cycle(1, 21, 52, 29);
      return this;
   }

   Bi() {
      // corners of the B face
      this._cycle(42, 44, 20, 18);
      // edges of the B face
      this._cycle(30, 43, 32, 19);
      // corners of the back layer
      this._cycle(41, 51, 9, 2);
      this._cycle(17, 53, 33, 0);
      // edges of the back layer
      this._cycle(29, 52, 21, 1);
      return this;
   }
   
   R() {
      // corners of the R face
      this._cycle(15, 17, 41, 39);
      // edges of the R face
      this._cycle(16, 29, 40, 27);
      // corners of the right layer
      this._cycle(2, 42, 47, 14);
      this._cycle(8, 18, 53, 38);
      // edges of the right layer
      this._cycle(5, 30, 50, 26);
      return this;
   }

   Ri() {
      // corners of the R face
      this._cycle(39, 41, 17, 15);
      // edges of the R face
      this._cycle(27, 40, 29, 16);
      // corners of the right layer
      this._cycle(14, 47, 42, 2);
      this._cycle(38, 53, 18, 8);
      // edges of the right layer
      this._cycle(26, 50, 30, 5);
      return this;
   }

   L() {
      // corners of the L face
      this._cycle(11, 35, 33, 9);
      // edges of the L face
      this._cycle(10, 23, 34, 21);
      // corners of the left layer
      this._cycle(0, 12, 45, 44);
      this._cycle(6, 36, 51, 20);
      // edges of the left layer
      this._cycle(3, 24, 48, 32);
      return this;
   }

   Li() {
      // corners of the L face
      this._cycle(9, 33, 35, 11);
      // edges of the L face
      this._cycle(21, 34, 23, 10);
      // corners of the left layer
      this._cycle(44, 45, 12, 0);
      this._cycle(20, 51, 36, 6);
      // edges of the left layer
      this._cycle(32, 48, 24, 3);
      return this;
   }

   U2() {
      this.U();
      this.U();
      return this;
   }

   D2() {
      this.D();
      this.D();
      return this;
   }

   R2() {
      this.R();
      this.R();
      return this;
   }

   L2() {
      this.L();
      this.L();
      return this;
   }

   F2() {
      this.F();
      this.F();
      return this;
   }

   B2() {
      this.B();
      this.B();
      return this;
   }
}

exports.Cube = Cube;
