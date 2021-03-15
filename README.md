# rustikJS
Slides: https://docs.google.com/presentation/d/1sv6VfMCrSxMekGTw6xi3VEKL_n72p__7LhVViRK7T5s/edit?usp=sharing

Project Report: https://docs.google.com/document/d/1rvVG3k01v56KuD4kzmwLsLok31a77VybkTeWyGt0j6A/edit?usp=sharing

Video Demonstration: https://drive.google.com/file/d/13MwIxfsnG8eZ2kyiOpVm5U-lTW7-ERG8/view?usp=sharing

Project Design: https://docs.google.com/document/d/1igl44iRWeNCHrewDm-B5kRvG7u0oRzdRm62BrTqYkXo/edit?usp=sharing

Project Proposal: https://docs.google.com/document/d/1pD3j0hb6g5_DgrUphOGV3IGIOKakSHueTDi2AIMF05M/edit?usp=sharing

## a DSL and Interpreter for Cubers

### Installation and Usage
You can try out `rustikJS`, a `rustik` browser-based JavaScript interpreter in your browser (tested with Firefox and Chrome).
```
git clone git@github.com:ermako/rustik-js.git
cd rustik-js
npm install
npm run antlr4
npm run antlr4-java
firefox index.html
```
You can now enter a `rustikfile` into the text area in your browser for `rustikJS` to run. Sample programs are
provided in [examples](/examples).

### Cube Notation
- `R`: a 90-degree clockwise rotation of the right face
- `L`: a 90-degree clockwise rotation of the left face
- `D`: a 90-degree clockwise rotation of the bottom face
- `U`: a 90-degree clockwise rotation of the top face
- `F`: a 90-degree clockwise rotation of the front face
- `B`: a 90-degree clockwise rotation of the back face
- Any move that is followed by an apostrophe (e.g. `R'`) means a counter-clockwise rotation of that face.
- Any move that is followed by a 2 (e.g. `R2`) means a 180 degree rotation of that face.

### Syntax:
- `State` (...)`
   - Describes the beginning state of the cube given a state diagram. A cube state
    diagram consists of 54 characters that represent colors on the cube. a '`.`' 
    represents a wildcard and thus can be any color in solutions.
- `Only (...)`
   - Restricts the moves which can appear in a solution. Solutions that only include
     those moves will be searched for and reported by `rustik`
- `Moves (...)`
   - Restricts the number of moves which can appear in the solution.
- `State ( Scrambled )`
   - Set the cube state to a random state and display the scramble that will reach that point from a solved position.
- Anything that follows a `#` on the same line is a comment
- rustik reads programs from left-to-right, top-to-bottom thus ignores all whitespace.

### Writing Programs 
A `rustikfile` (extension `.rstk`) is a program that is written in the rustik DSL.
In a nutshell, a `rustikfile` is a series of `State`s. `rustik` will find solutions between
each pair of `State`s that are adjacent in the file. Restrictions such as `Moves` and `Only`
will change the possible solutions that `rustik` will find, but they only apply to the solutions
between the cube states that the restrictions appear in between.

### Example

```
# generate different Ua permutations
State (
    rrr
    rrr
    rrr
gyg yby bgb www
ggg yyy bbb www
ggg yyy bbb www
    ooo
    ooo
    ooo
)

Only (
   U U'
   R R'
)

Moves (12)

State (
    rrr
    rrr
    rrr
ggg yyy bbb www
ggg yyy bbb www
ggg yyy bbb www
    ooo
    ooo
    ooo
)
```

### Error Handling
Not all possible state diagrams are valid cube states (e.g. more than 6 colors, impossible arrangement). In its current form, `rustik` does not validate cube states. Please take care when writing out cube diagrams!
