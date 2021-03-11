lexer grammar RustikLexer;

COMMENT : '#' ~( '\r' | '\n' )* -> channel(HIDDEN) ;

WS : [ \t\n\r]+ -> channel(HIDDEN) ;
START_STATE : 'State' -> mode(Island) ;
START_RESTRICT : 'Restrict' -> mode(Island) ;
START_ONLY : 'Only' -> mode(Island) ;
START_MOVES : 'Moves' -> mode(Island) ;
OR : 'Or' ;
mode Island ; 
OPEN_BLOCK : '(' ;
COMMENT_I : '#' ~( '\r' | '\n' )* -> channel(HIDDEN) ;
CLOSE_BLOCK : ')' -> mode(DEFAULT_MODE) ;
WS_I : [ \t\n\r]+ -> channel(HIDDEN) ;
TURN : 'R' | 'L' | 'F' | 'B' | 'U' | 'D' |
       'R2' | 'L2' | 'F2' | 'B2' | 'U2' | 'D2' |
       'R\'' | 'L\'' | 'F\'' | 'B\'' | 'U\'' | 'D\'' |
       'R2\'' | 'L2\'' | 'F2\'' | 'B2\'' | 'U2\'' | 'D2\'' ;
       // don't support wide moves and slices since they change the orientation
       // of the centers
       //'r' | 'l' | 'f' | 'b' | 'u' | 'd' |
       //'r2' | 'l2' | 'f2' | 'b2' | 'u2' | 'd2' |
       //'M' | 'S' | 'E' | 'M2' | 'S2' | 'E2' ;
AFTER : 'after' ;
INTEGER : [1-9] [0-9]* ; // no leading zeros

COLOR : [a-zA-Z];
WILDCARD : '.' ;
SCRAMBLED : 'Scrambled' ;
