// Generated from RustikLexer.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0013\u00b9\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t",
    "\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004",
    "\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b",
    "\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004",
    "\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003",
    "\u0002\u0007\u0002)\n\u0002\f\u0002\u000e\u0002,\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0006\u00031\n\u0003\r\u0003\u000e\u00032\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0007\n`\n\n\f\n",
    "\u000e\nc\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0006\fl\n\f\r\f\u000e\fm\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u009d\n\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u00a7\n\u000f\f\u000f\u000e\u000f",
    "\u00aa\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0002\u0002\u0013\u0004\u0003",
    "\u0006\u0004\b\u0005\n\u0006\f\u0007\u000e\b\u0010\t\u0012\n\u0014\u000b",
    "\u0016\f\u0018\r\u001a\u000e\u001c\u000f\u001e\u0010 \u0011\"\u0012",
    "$\u0013\u0004\u0002\u0003\b\u0004\u0002\f\f\u000f\u000f\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\b\u0002DDFFHHNNTTWW\u0003\u00023;\u0003\u0002",
    "2;\u0004\u0002C\\c|\u0002\u00ce\u0002\u0004\u0003\u0002\u0002\u0002",
    "\u0002\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003\u0002\u0002\u0002",
    "\u0002\n\u0003\u0002\u0002\u0002\u0002\f\u0003\u0002\u0002\u0002\u0002",
    "\u000e\u0003\u0002\u0002\u0002\u0002\u0010\u0003\u0002\u0002\u0002\u0003",
    "\u0012\u0003\u0002\u0002\u0002\u0003\u0014\u0003\u0002\u0002\u0002\u0003",
    "\u0016\u0003\u0002\u0002\u0002\u0003\u0018\u0003\u0002\u0002\u0002\u0003",
    "\u001a\u0003\u0002\u0002\u0002\u0003\u001c\u0003\u0002\u0002\u0002\u0003",
    "\u001e\u0003\u0002\u0002\u0002\u0003 \u0003\u0002\u0002\u0002\u0003",
    "\"\u0003\u0002\u0002\u0002\u0003$\u0003\u0002\u0002\u0002\u0004&\u0003",
    "\u0002\u0002\u0002\u00060\u0003\u0002\u0002\u0002\b6\u0003\u0002\u0002",
    "\u0002\n>\u0003\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002\u000eP",
    "\u0003\u0002\u0002\u0002\u0010X\u0003\u0002\u0002\u0002\u0012[\u0003",
    "\u0002\u0002\u0002\u0014]\u0003\u0002\u0002\u0002\u0016f\u0003\u0002",
    "\u0002\u0002\u0018k\u0003\u0002\u0002\u0002\u001a\u009c\u0003\u0002",
    "\u0002\u0002\u001c\u009e\u0003\u0002\u0002\u0002\u001e\u00a4\u0003\u0002",
    "\u0002\u0002 \u00ab\u0003\u0002\u0002\u0002\"\u00ad\u0003\u0002\u0002",
    "\u0002$\u00af\u0003\u0002\u0002\u0002&*\u0007%\u0002\u0002\')\n\u0002",
    "\u0002\u0002(\'\u0003\u0002\u0002\u0002),\u0003\u0002\u0002\u0002*(",
    "\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+-\u0003\u0002\u0002",
    "\u0002,*\u0003\u0002\u0002\u0002-.\b\u0002\u0002\u0002.\u0005\u0003",
    "\u0002\u0002\u0002/1\t\u0003\u0002\u00020/\u0003\u0002\u0002\u00021",
    "2\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u000234\u0003\u0002\u0002\u000245\b\u0003\u0002\u00025\u0007\u0003",
    "\u0002\u0002\u000267\u0007U\u0002\u000278\u0007v\u0002\u000289\u0007",
    "c\u0002\u00029:\u0007v\u0002\u0002:;\u0007g\u0002\u0002;<\u0003\u0002",
    "\u0002\u0002<=\b\u0004\u0003\u0002=\t\u0003\u0002\u0002\u0002>?\u0007",
    "T\u0002\u0002?@\u0007g\u0002\u0002@A\u0007u\u0002\u0002AB\u0007v\u0002",
    "\u0002BC\u0007t\u0002\u0002CD\u0007k\u0002\u0002DE\u0007e\u0002\u0002",
    "EF\u0007v\u0002\u0002FG\u0003\u0002\u0002\u0002GH\b\u0005\u0003\u0002",
    "H\u000b\u0003\u0002\u0002\u0002IJ\u0007Q\u0002\u0002JK\u0007p\u0002",
    "\u0002KL\u0007n\u0002\u0002LM\u0007{\u0002\u0002MN\u0003\u0002\u0002",
    "\u0002NO\b\u0006\u0003\u0002O\r\u0003\u0002\u0002\u0002PQ\u0007O\u0002",
    "\u0002QR\u0007q\u0002\u0002RS\u0007x\u0002\u0002ST\u0007g\u0002\u0002",
    "TU\u0007u\u0002\u0002UV\u0003\u0002\u0002\u0002VW\b\u0007\u0003\u0002",
    "W\u000f\u0003\u0002\u0002\u0002XY\u0007Q\u0002\u0002YZ\u0007t\u0002",
    "\u0002Z\u0011\u0003\u0002\u0002\u0002[\\\u0007*\u0002\u0002\\\u0013",
    "\u0003\u0002\u0002\u0002]a\u0007%\u0002\u0002^`\n\u0002\u0002\u0002",
    "_^\u0003\u0002\u0002\u0002`c\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002",
    "\u0002ab\u0003\u0002\u0002\u0002bd\u0003\u0002\u0002\u0002ca\u0003\u0002",
    "\u0002\u0002de\b\n\u0002\u0002e\u0015\u0003\u0002\u0002\u0002fg\u0007",
    "+\u0002\u0002gh\u0003\u0002\u0002\u0002hi\b\u000b\u0004\u0002i\u0017",
    "\u0003\u0002\u0002\u0002jl\t\u0003\u0002\u0002kj\u0003\u0002\u0002\u0002",
    "lm\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002",
    "\u0002no\u0003\u0002\u0002\u0002op\b\f\u0002\u0002p\u0019\u0003\u0002",
    "\u0002\u0002q\u009d\t\u0004\u0002\u0002rs\u0007T\u0002\u0002s\u009d",
    "\u00074\u0002\u0002tu\u0007N\u0002\u0002u\u009d\u00074\u0002\u0002v",
    "w\u0007H\u0002\u0002w\u009d\u00074\u0002\u0002xy\u0007D\u0002\u0002",
    "y\u009d\u00074\u0002\u0002z{\u0007W\u0002\u0002{\u009d\u00074\u0002",
    "\u0002|}\u0007F\u0002\u0002}\u009d\u00074\u0002\u0002~\u007f\u0007T",
    "\u0002\u0002\u007f\u009d\u0007)\u0002\u0002\u0080\u0081\u0007N\u0002",
    "\u0002\u0081\u009d\u0007)\u0002\u0002\u0082\u0083\u0007H\u0002\u0002",
    "\u0083\u009d\u0007)\u0002\u0002\u0084\u0085\u0007D\u0002\u0002\u0085",
    "\u009d\u0007)\u0002\u0002\u0086\u0087\u0007W\u0002\u0002\u0087\u009d",
    "\u0007)\u0002\u0002\u0088\u0089\u0007F\u0002\u0002\u0089\u009d\u0007",
    ")\u0002\u0002\u008a\u008b\u0007T\u0002\u0002\u008b\u008c\u00074\u0002",
    "\u0002\u008c\u009d\u0007)\u0002\u0002\u008d\u008e\u0007N\u0002\u0002",
    "\u008e\u008f\u00074\u0002\u0002\u008f\u009d\u0007)\u0002\u0002\u0090",
    "\u0091\u0007H\u0002\u0002\u0091\u0092\u00074\u0002\u0002\u0092\u009d",
    "\u0007)\u0002\u0002\u0093\u0094\u0007D\u0002\u0002\u0094\u0095\u0007",
    "4\u0002\u0002\u0095\u009d\u0007)\u0002\u0002\u0096\u0097\u0007W\u0002",
    "\u0002\u0097\u0098\u00074\u0002\u0002\u0098\u009d\u0007)\u0002\u0002",
    "\u0099\u009a\u0007F\u0002\u0002\u009a\u009b\u00074\u0002\u0002\u009b",
    "\u009d\u0007)\u0002\u0002\u009cq\u0003\u0002\u0002\u0002\u009cr\u0003",
    "\u0002\u0002\u0002\u009ct\u0003\u0002\u0002\u0002\u009cv\u0003\u0002",
    "\u0002\u0002\u009cx\u0003\u0002\u0002\u0002\u009cz\u0003\u0002\u0002",
    "\u0002\u009c|\u0003\u0002\u0002\u0002\u009c~\u0003\u0002\u0002\u0002",
    "\u009c\u0080\u0003\u0002\u0002\u0002\u009c\u0082\u0003\u0002\u0002\u0002",
    "\u009c\u0084\u0003\u0002\u0002\u0002\u009c\u0086\u0003\u0002\u0002\u0002",
    "\u009c\u0088\u0003\u0002\u0002\u0002\u009c\u008a\u0003\u0002\u0002\u0002",
    "\u009c\u008d\u0003\u0002\u0002\u0002\u009c\u0090\u0003\u0002\u0002\u0002",
    "\u009c\u0093\u0003\u0002\u0002\u0002\u009c\u0096\u0003\u0002\u0002\u0002",
    "\u009c\u0099\u0003\u0002\u0002\u0002\u009d\u001b\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0007c\u0002\u0002\u009f\u00a0\u0007h\u0002\u0002\u00a0",
    "\u00a1\u0007v\u0002\u0002\u00a1\u00a2\u0007g\u0002\u0002\u00a2\u00a3",
    "\u0007t\u0002\u0002\u00a3\u001d\u0003\u0002\u0002\u0002\u00a4\u00a8",
    "\t\u0005\u0002\u0002\u00a5\u00a7\t\u0006\u0002\u0002\u00a6\u00a5\u0003",
    "\u0002\u0002\u0002\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u001f\u0003",
    "\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00ab\u00ac\t",
    "\u0007\u0002\u0002\u00ac!\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007",
    "0\u0002\u0002\u00ae#\u0003\u0002\u0002\u0002\u00af\u00b0\u0007U\u0002",
    "\u0002\u00b0\u00b1\u0007e\u0002\u0002\u00b1\u00b2\u0007t\u0002\u0002",
    "\u00b2\u00b3\u0007c\u0002\u0002\u00b3\u00b4\u0007o\u0002\u0002\u00b4",
    "\u00b5\u0007d\u0002\u0002\u00b5\u00b6\u0007n\u0002\u0002\u00b6\u00b7",
    "\u0007g\u0002\u0002\u00b7\u00b8\u0007f\u0002\u0002\u00b8%\u0003\u0002",
    "\u0002\u0002\n\u0002\u0003*2am\u009c\u00a8\u0005\u0002\u0003\u0002\u0004",
    "\u0003\u0002\u0004\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RustikLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RustikLexer.prototype = Object.create(antlr4.Lexer.prototype);
RustikLexer.prototype.constructor = RustikLexer;

Object.defineProperty(RustikLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

RustikLexer.EOF = antlr4.Token.EOF;
RustikLexer.COMMENT = 1;
RustikLexer.WS = 2;
RustikLexer.START_STATE = 3;
RustikLexer.START_RESTRICT = 4;
RustikLexer.START_ONLY = 5;
RustikLexer.START_MOVES = 6;
RustikLexer.OR = 7;
RustikLexer.OPEN_BLOCK = 8;
RustikLexer.COMMENT_I = 9;
RustikLexer.CLOSE_BLOCK = 10;
RustikLexer.WS_I = 11;
RustikLexer.TURN = 12;
RustikLexer.AFTER = 13;
RustikLexer.INTEGER = 14;
RustikLexer.COLOR = 15;
RustikLexer.WILDCARD = 16;
RustikLexer.SCRAMBLED = 17;

RustikLexer.Island = 1;

RustikLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RustikLexer.prototype.modeNames = [ "DEFAULT_MODE", "Island" ];

RustikLexer.prototype.literalNames = [ null, null, null, "'State'", "'Restrict'", 
                                       "'Only'", "'Moves'", "'Or'", "'('", 
                                       null, "')'", null, null, "'after'", 
                                       null, null, "'.'", "'Scrambled'" ];

RustikLexer.prototype.symbolicNames = [ null, "COMMENT", "WS", "START_STATE", 
                                        "START_RESTRICT", "START_ONLY", 
                                        "START_MOVES", "OR", "OPEN_BLOCK", 
                                        "COMMENT_I", "CLOSE_BLOCK", "WS_I", 
                                        "TURN", "AFTER", "INTEGER", "COLOR", 
                                        "WILDCARD", "SCRAMBLED" ];

RustikLexer.prototype.ruleNames = [ "COMMENT", "WS", "START_STATE", "START_RESTRICT", 
                                    "START_ONLY", "START_MOVES", "OR", "OPEN_BLOCK", 
                                    "COMMENT_I", "CLOSE_BLOCK", "WS_I", 
                                    "TURN", "AFTER", "INTEGER", "COLOR", 
                                    "WILDCARD", "SCRAMBLED" ];

RustikLexer.prototype.grammarFileName = "RustikLexer.g4";


exports.RustikLexer = RustikLexer;
