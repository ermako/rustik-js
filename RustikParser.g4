parser grammar RustikParser;

options { tokenVocab=RustikLexer; }

rustikfile : stateList* EOF ;

stateList
   : cubeState
   | cubeState solutionModifier? moves? stateList
   ;

cubeState
   : START_STATE OPEN_BLOCK stateDiagram CLOSE_BLOCK # SpecifiedState
   | START_STATE OPEN_BLOCK SCRAMBLED CLOSE_BLOCK    # ScrambledState
   ;

solutionModifier
   : restriction
   | only
   | restriction only
   | only restriction
   ;

moves
   : START_MOVES OPEN_BLOCK INTEGER CLOSE_BLOCK
   ;

restriction
   : START_RESTRICT OPEN_BLOCK qualifierList CLOSE_BLOCK
   ;

only
   : START_ONLY OPEN_BLOCK qualifierList CLOSE_BLOCK
   ;

qualifierList
   : qualifierListElement qualifierList
   | qualifierListElement
   ;

qualifierListElement
   : TURN AFTER TURN  # AfterQualifier
   | TURN             # TurnQualifier
   ;

stateDiagram // represents a cube
   :     line
         line
         line
    line line line line
    line line line line
    line line line line
         line
         line
         line
   ;

line : (COLOR | WILDCARD) (COLOR | WILDCARD) (COLOR | WILDCARD) ;
