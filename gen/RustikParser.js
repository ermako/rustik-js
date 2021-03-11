// Generated from RustikParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RustikParserListener = require('./RustikParserListener').RustikParserListener;
var grammarFileName = "RustikParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013t\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "$\n\u0003\u0003\u0003\u0005\u0003\'\n\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003+\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "6\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005@\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tU\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n[\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0002\u0002\r\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0002\u0003\u0003\u0002\u0011\u0012\u0002r\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0004*\u0003\u0002\u0002\u0002\u0006",
    "5\u0003\u0002\u0002\u0002\b?\u0003\u0002\u0002\u0002\nA\u0003\u0002",
    "\u0002\u0002\fF\u0003\u0002\u0002\u0002\u000eK\u0003\u0002\u0002\u0002",
    "\u0010T\u0003\u0002\u0002\u0002\u0012Z\u0003\u0002\u0002\u0002\u0014",
    "\\\u0003\u0002\u0002\u0002\u0016o\u0003\u0002\u0002\u0002\u0018\u001a",
    "\u0005\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d",
    "\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u0003\u0002\u0002\u0002\u001c\u001e\u0003\u0002\u0002\u0002\u001d\u001b",
    "\u0003\u0002\u0002\u0002\u001e\u001f\u0007\u0002\u0002\u0003\u001f\u0003",
    "\u0003\u0002\u0002\u0002 +\u0005\u0006\u0004\u0002!#\u0005\u0006\u0004",
    "\u0002\"$\u0005\b\u0005\u0002#\"\u0003\u0002\u0002\u0002#$\u0003\u0002",
    "\u0002\u0002$&\u0003\u0002\u0002\u0002%\'\u0005\n\u0006\u0002&%\u0003",
    "\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002",
    "()\u0005\u0004\u0003\u0002)+\u0003\u0002\u0002\u0002* \u0003\u0002\u0002",
    "\u0002*!\u0003\u0002\u0002\u0002+\u0005\u0003\u0002\u0002\u0002,-\u0007",
    "\u0005\u0002\u0002-.\u0007\n\u0002\u0002./\u0005\u0014\u000b\u0002/",
    "0\u0007\f\u0002\u000206\u0003\u0002\u0002\u000212\u0007\u0005\u0002",
    "\u000223\u0007\n\u0002\u000234\u0007\u0013\u0002\u000246\u0007\f\u0002",
    "\u00025,\u0003\u0002\u0002\u000251\u0003\u0002\u0002\u00026\u0007\u0003",
    "\u0002\u0002\u00027@\u0005\f\u0007\u00028@\u0005\u000e\b\u00029:\u0005",
    "\f\u0007\u0002:;\u0005\u000e\b\u0002;@\u0003\u0002\u0002\u0002<=\u0005",
    "\u000e\b\u0002=>\u0005\f\u0007\u0002>@\u0003\u0002\u0002\u0002?7\u0003",
    "\u0002\u0002\u0002?8\u0003\u0002\u0002\u0002?9\u0003\u0002\u0002\u0002",
    "?<\u0003\u0002\u0002\u0002@\t\u0003\u0002\u0002\u0002AB\u0007\b\u0002",
    "\u0002BC\u0007\n\u0002\u0002CD\u0007\u0010\u0002\u0002DE\u0007\f\u0002",
    "\u0002E\u000b\u0003\u0002\u0002\u0002FG\u0007\u0006\u0002\u0002GH\u0007",
    "\n\u0002\u0002HI\u0005\u0010\t\u0002IJ\u0007\f\u0002\u0002J\r\u0003",
    "\u0002\u0002\u0002KL\u0007\u0007\u0002\u0002LM\u0007\n\u0002\u0002M",
    "N\u0005\u0010\t\u0002NO\u0007\f\u0002\u0002O\u000f\u0003\u0002\u0002",
    "\u0002PQ\u0005\u0012\n\u0002QR\u0005\u0010\t\u0002RU\u0003\u0002\u0002",
    "\u0002SU\u0005\u0012\n\u0002TP\u0003\u0002\u0002\u0002TS\u0003\u0002",
    "\u0002\u0002U\u0011\u0003\u0002\u0002\u0002VW\u0007\u000e\u0002\u0002",
    "WX\u0007\u000f\u0002\u0002X[\u0007\u000e\u0002\u0002Y[\u0007\u000e\u0002",
    "\u0002ZV\u0003\u0002\u0002\u0002ZY\u0003\u0002\u0002\u0002[\u0013\u0003",
    "\u0002\u0002\u0002\\]\u0005\u0016\f\u0002]^\u0005\u0016\f\u0002^_\u0005",
    "\u0016\f\u0002_`\u0005\u0016\f\u0002`a\u0005\u0016\f\u0002ab\u0005\u0016",
    "\f\u0002bc\u0005\u0016\f\u0002cd\u0005\u0016\f\u0002de\u0005\u0016\f",
    "\u0002ef\u0005\u0016\f\u0002fg\u0005\u0016\f\u0002gh\u0005\u0016\f\u0002",
    "hi\u0005\u0016\f\u0002ij\u0005\u0016\f\u0002jk\u0005\u0016\f\u0002k",
    "l\u0005\u0016\f\u0002lm\u0005\u0016\f\u0002mn\u0005\u0016\f\u0002n\u0015",
    "\u0003\u0002\u0002\u0002op\t\u0002\u0002\u0002pq\t\u0002\u0002\u0002",
    "qr\t\u0002\u0002\u0002r\u0017\u0003\u0002\u0002\u0002\n\u001b#&*5?T",
    "Z"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'State'", "'Restrict'", "'Only'", 
                     "'Moves'", "'Or'", "'('", null, "')'", null, null, 
                     "'after'", null, null, "'.'", "'Scrambled'" ];

var symbolicNames = [ null, "COMMENT", "WS", "START_STATE", "START_RESTRICT", 
                      "START_ONLY", "START_MOVES", "OR", "OPEN_BLOCK", "COMMENT_I", 
                      "CLOSE_BLOCK", "WS_I", "TURN", "AFTER", "INTEGER", 
                      "COLOR", "WILDCARD", "SCRAMBLED" ];

var ruleNames =  [ "rustikfile", "stateList", "cubeState", "solutionModifier", 
                   "moves", "restriction", "only", "qualifierList", "qualifierListElement", 
                   "stateDiagram", "line" ];

function RustikParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RustikParser.prototype = Object.create(antlr4.Parser.prototype);
RustikParser.prototype.constructor = RustikParser;

Object.defineProperty(RustikParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RustikParser.EOF = antlr4.Token.EOF;
RustikParser.COMMENT = 1;
RustikParser.WS = 2;
RustikParser.START_STATE = 3;
RustikParser.START_RESTRICT = 4;
RustikParser.START_ONLY = 5;
RustikParser.START_MOVES = 6;
RustikParser.OR = 7;
RustikParser.OPEN_BLOCK = 8;
RustikParser.COMMENT_I = 9;
RustikParser.CLOSE_BLOCK = 10;
RustikParser.WS_I = 11;
RustikParser.TURN = 12;
RustikParser.AFTER = 13;
RustikParser.INTEGER = 14;
RustikParser.COLOR = 15;
RustikParser.WILDCARD = 16;
RustikParser.SCRAMBLED = 17;

RustikParser.RULE_rustikfile = 0;
RustikParser.RULE_stateList = 1;
RustikParser.RULE_cubeState = 2;
RustikParser.RULE_solutionModifier = 3;
RustikParser.RULE_moves = 4;
RustikParser.RULE_restriction = 5;
RustikParser.RULE_only = 6;
RustikParser.RULE_qualifierList = 7;
RustikParser.RULE_qualifierListElement = 8;
RustikParser.RULE_stateDiagram = 9;
RustikParser.RULE_line = 10;


function RustikfileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_rustikfile;
    return this;
}

RustikfileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RustikfileContext.prototype.constructor = RustikfileContext;

RustikfileContext.prototype.EOF = function() {
    return this.getToken(RustikParser.EOF, 0);
};

RustikfileContext.prototype.stateList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StateListContext);
    } else {
        return this.getTypedRuleContext(StateListContext,i);
    }
};

RustikfileContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterRustikfile(this);
	}
};

RustikfileContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitRustikfile(this);
	}
};




RustikParser.RustikfileContext = RustikfileContext;

RustikParser.prototype.rustikfile = function() {

    var localctx = new RustikfileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RustikParser.RULE_rustikfile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RustikParser.START_STATE) {
            this.state = 22;
            this.stateList();
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 28;
        this.match(RustikParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StateListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_stateList;
    return this;
}

StateListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StateListContext.prototype.constructor = StateListContext;

StateListContext.prototype.cubeState = function() {
    return this.getTypedRuleContext(CubeStateContext,0);
};

StateListContext.prototype.stateList = function() {
    return this.getTypedRuleContext(StateListContext,0);
};

StateListContext.prototype.solutionModifier = function() {
    return this.getTypedRuleContext(SolutionModifierContext,0);
};

StateListContext.prototype.moves = function() {
    return this.getTypedRuleContext(MovesContext,0);
};

StateListContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterStateList(this);
	}
};

StateListContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitStateList(this);
	}
};




RustikParser.StateListContext = StateListContext;

RustikParser.prototype.stateList = function() {

    var localctx = new StateListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RustikParser.RULE_stateList);
    var _la = 0; // Token type
    try {
        this.state = 40;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 30;
            this.cubeState();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.cubeState();
            this.state = 33;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RustikParser.START_RESTRICT || _la===RustikParser.START_ONLY) {
                this.state = 32;
                this.solutionModifier();
            }

            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RustikParser.START_MOVES) {
                this.state = 35;
                this.moves();
            }

            this.state = 38;
            this.stateList();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CubeStateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_cubeState;
    return this;
}

CubeStateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CubeStateContext.prototype.constructor = CubeStateContext;


 
CubeStateContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SpecifiedStateContext(parser, ctx) {
	CubeStateContext.call(this, parser);
    CubeStateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SpecifiedStateContext.prototype = Object.create(CubeStateContext.prototype);
SpecifiedStateContext.prototype.constructor = SpecifiedStateContext;

RustikParser.SpecifiedStateContext = SpecifiedStateContext;

SpecifiedStateContext.prototype.START_STATE = function() {
    return this.getToken(RustikParser.START_STATE, 0);
};

SpecifiedStateContext.prototype.OPEN_BLOCK = function() {
    return this.getToken(RustikParser.OPEN_BLOCK, 0);
};

SpecifiedStateContext.prototype.stateDiagram = function() {
    return this.getTypedRuleContext(StateDiagramContext,0);
};

SpecifiedStateContext.prototype.CLOSE_BLOCK = function() {
    return this.getToken(RustikParser.CLOSE_BLOCK, 0);
};
SpecifiedStateContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterSpecifiedState(this);
	}
};

SpecifiedStateContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitSpecifiedState(this);
	}
};


function ScrambledStateContext(parser, ctx) {
	CubeStateContext.call(this, parser);
    CubeStateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ScrambledStateContext.prototype = Object.create(CubeStateContext.prototype);
ScrambledStateContext.prototype.constructor = ScrambledStateContext;

RustikParser.ScrambledStateContext = ScrambledStateContext;

ScrambledStateContext.prototype.START_STATE = function() {
    return this.getToken(RustikParser.START_STATE, 0);
};

ScrambledStateContext.prototype.OPEN_BLOCK = function() {
    return this.getToken(RustikParser.OPEN_BLOCK, 0);
};

ScrambledStateContext.prototype.SCRAMBLED = function() {
    return this.getToken(RustikParser.SCRAMBLED, 0);
};

ScrambledStateContext.prototype.CLOSE_BLOCK = function() {
    return this.getToken(RustikParser.CLOSE_BLOCK, 0);
};
ScrambledStateContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterScrambledState(this);
	}
};

ScrambledStateContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitScrambledState(this);
	}
};



RustikParser.CubeStateContext = CubeStateContext;

RustikParser.prototype.cubeState = function() {

    var localctx = new CubeStateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RustikParser.RULE_cubeState);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SpecifiedStateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 42;
            this.match(RustikParser.START_STATE);
            this.state = 43;
            this.match(RustikParser.OPEN_BLOCK);
            this.state = 44;
            this.stateDiagram();
            this.state = 45;
            this.match(RustikParser.CLOSE_BLOCK);
            break;

        case 2:
            localctx = new ScrambledStateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 47;
            this.match(RustikParser.START_STATE);
            this.state = 48;
            this.match(RustikParser.OPEN_BLOCK);
            this.state = 49;
            this.match(RustikParser.SCRAMBLED);
            this.state = 50;
            this.match(RustikParser.CLOSE_BLOCK);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SolutionModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_solutionModifier;
    return this;
}

SolutionModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SolutionModifierContext.prototype.constructor = SolutionModifierContext;

SolutionModifierContext.prototype.restriction = function() {
    return this.getTypedRuleContext(RestrictionContext,0);
};

SolutionModifierContext.prototype.only = function() {
    return this.getTypedRuleContext(OnlyContext,0);
};

SolutionModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterSolutionModifier(this);
	}
};

SolutionModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitSolutionModifier(this);
	}
};




RustikParser.SolutionModifierContext = SolutionModifierContext;

RustikParser.prototype.solutionModifier = function() {

    var localctx = new SolutionModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RustikParser.RULE_solutionModifier);
    try {
        this.state = 61;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 53;
            this.restriction();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.only();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 55;
            this.restriction();
            this.state = 56;
            this.only();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 58;
            this.only();
            this.state = 59;
            this.restriction();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MovesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_moves;
    return this;
}

MovesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MovesContext.prototype.constructor = MovesContext;

MovesContext.prototype.START_MOVES = function() {
    return this.getToken(RustikParser.START_MOVES, 0);
};

MovesContext.prototype.OPEN_BLOCK = function() {
    return this.getToken(RustikParser.OPEN_BLOCK, 0);
};

MovesContext.prototype.INTEGER = function() {
    return this.getToken(RustikParser.INTEGER, 0);
};

MovesContext.prototype.CLOSE_BLOCK = function() {
    return this.getToken(RustikParser.CLOSE_BLOCK, 0);
};

MovesContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterMoves(this);
	}
};

MovesContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitMoves(this);
	}
};




RustikParser.MovesContext = MovesContext;

RustikParser.prototype.moves = function() {

    var localctx = new MovesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RustikParser.RULE_moves);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(RustikParser.START_MOVES);
        this.state = 64;
        this.match(RustikParser.OPEN_BLOCK);
        this.state = 65;
        this.match(RustikParser.INTEGER);
        this.state = 66;
        this.match(RustikParser.CLOSE_BLOCK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RestrictionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_restriction;
    return this;
}

RestrictionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RestrictionContext.prototype.constructor = RestrictionContext;

RestrictionContext.prototype.START_RESTRICT = function() {
    return this.getToken(RustikParser.START_RESTRICT, 0);
};

RestrictionContext.prototype.OPEN_BLOCK = function() {
    return this.getToken(RustikParser.OPEN_BLOCK, 0);
};

RestrictionContext.prototype.qualifierList = function() {
    return this.getTypedRuleContext(QualifierListContext,0);
};

RestrictionContext.prototype.CLOSE_BLOCK = function() {
    return this.getToken(RustikParser.CLOSE_BLOCK, 0);
};

RestrictionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterRestriction(this);
	}
};

RestrictionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitRestriction(this);
	}
};




RustikParser.RestrictionContext = RestrictionContext;

RustikParser.prototype.restriction = function() {

    var localctx = new RestrictionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RustikParser.RULE_restriction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(RustikParser.START_RESTRICT);
        this.state = 69;
        this.match(RustikParser.OPEN_BLOCK);
        this.state = 70;
        this.qualifierList();
        this.state = 71;
        this.match(RustikParser.CLOSE_BLOCK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OnlyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_only;
    return this;
}

OnlyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OnlyContext.prototype.constructor = OnlyContext;

OnlyContext.prototype.START_ONLY = function() {
    return this.getToken(RustikParser.START_ONLY, 0);
};

OnlyContext.prototype.OPEN_BLOCK = function() {
    return this.getToken(RustikParser.OPEN_BLOCK, 0);
};

OnlyContext.prototype.qualifierList = function() {
    return this.getTypedRuleContext(QualifierListContext,0);
};

OnlyContext.prototype.CLOSE_BLOCK = function() {
    return this.getToken(RustikParser.CLOSE_BLOCK, 0);
};

OnlyContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterOnly(this);
	}
};

OnlyContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitOnly(this);
	}
};




RustikParser.OnlyContext = OnlyContext;

RustikParser.prototype.only = function() {

    var localctx = new OnlyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RustikParser.RULE_only);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(RustikParser.START_ONLY);
        this.state = 74;
        this.match(RustikParser.OPEN_BLOCK);
        this.state = 75;
        this.qualifierList();
        this.state = 76;
        this.match(RustikParser.CLOSE_BLOCK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QualifierListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_qualifierList;
    return this;
}

QualifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifierListContext.prototype.constructor = QualifierListContext;

QualifierListContext.prototype.qualifierListElement = function() {
    return this.getTypedRuleContext(QualifierListElementContext,0);
};

QualifierListContext.prototype.qualifierList = function() {
    return this.getTypedRuleContext(QualifierListContext,0);
};

QualifierListContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterQualifierList(this);
	}
};

QualifierListContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitQualifierList(this);
	}
};




RustikParser.QualifierListContext = QualifierListContext;

RustikParser.prototype.qualifierList = function() {

    var localctx = new QualifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RustikParser.RULE_qualifierList);
    try {
        this.state = 82;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.qualifierListElement();
            this.state = 79;
            this.qualifierList();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 81;
            this.qualifierListElement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QualifierListElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_qualifierListElement;
    return this;
}

QualifierListElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifierListElementContext.prototype.constructor = QualifierListElementContext;


 
QualifierListElementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TurnQualifierContext(parser, ctx) {
	QualifierListElementContext.call(this, parser);
    QualifierListElementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TurnQualifierContext.prototype = Object.create(QualifierListElementContext.prototype);
TurnQualifierContext.prototype.constructor = TurnQualifierContext;

RustikParser.TurnQualifierContext = TurnQualifierContext;

TurnQualifierContext.prototype.TURN = function() {
    return this.getToken(RustikParser.TURN, 0);
};
TurnQualifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterTurnQualifier(this);
	}
};

TurnQualifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitTurnQualifier(this);
	}
};


function AfterQualifierContext(parser, ctx) {
	QualifierListElementContext.call(this, parser);
    QualifierListElementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AfterQualifierContext.prototype = Object.create(QualifierListElementContext.prototype);
AfterQualifierContext.prototype.constructor = AfterQualifierContext;

RustikParser.AfterQualifierContext = AfterQualifierContext;

AfterQualifierContext.prototype.TURN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RustikParser.TURN);
    } else {
        return this.getToken(RustikParser.TURN, i);
    }
};


AfterQualifierContext.prototype.AFTER = function() {
    return this.getToken(RustikParser.AFTER, 0);
};
AfterQualifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterAfterQualifier(this);
	}
};

AfterQualifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitAfterQualifier(this);
	}
};



RustikParser.QualifierListElementContext = QualifierListElementContext;

RustikParser.prototype.qualifierListElement = function() {

    var localctx = new QualifierListElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RustikParser.RULE_qualifierListElement);
    try {
        this.state = 88;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AfterQualifierContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 84;
            this.match(RustikParser.TURN);
            this.state = 85;
            this.match(RustikParser.AFTER);
            this.state = 86;
            this.match(RustikParser.TURN);
            break;

        case 2:
            localctx = new TurnQualifierContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this.match(RustikParser.TURN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StateDiagramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_stateDiagram;
    return this;
}

StateDiagramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StateDiagramContext.prototype.constructor = StateDiagramContext;

StateDiagramContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
    }
};

StateDiagramContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterStateDiagram(this);
	}
};

StateDiagramContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitStateDiagram(this);
	}
};




RustikParser.StateDiagramContext = StateDiagramContext;

RustikParser.prototype.stateDiagram = function() {

    var localctx = new StateDiagramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RustikParser.RULE_stateDiagram);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.line();
        this.state = 91;
        this.line();
        this.state = 92;
        this.line();
        this.state = 93;
        this.line();
        this.state = 94;
        this.line();
        this.state = 95;
        this.line();
        this.state = 96;
        this.line();
        this.state = 97;
        this.line();
        this.state = 98;
        this.line();
        this.state = 99;
        this.line();
        this.state = 100;
        this.line();
        this.state = 101;
        this.line();
        this.state = 102;
        this.line();
        this.state = 103;
        this.line();
        this.state = 104;
        this.line();
        this.state = 105;
        this.line();
        this.state = 106;
        this.line();
        this.state = 107;
        this.line();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RustikParser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.COLOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RustikParser.COLOR);
    } else {
        return this.getToken(RustikParser.COLOR, i);
    }
};


LineContext.prototype.WILDCARD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RustikParser.WILDCARD);
    } else {
        return this.getToken(RustikParser.WILDCARD, i);
    }
};


LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof RustikParserListener ) {
        listener.exitLine(this);
	}
};




RustikParser.LineContext = LineContext;

RustikParser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RustikParser.RULE_line);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        _la = this._input.LA(1);
        if(!(_la===RustikParser.COLOR || _la===RustikParser.WILDCARD)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 110;
        _la = this._input.LA(1);
        if(!(_la===RustikParser.COLOR || _la===RustikParser.WILDCARD)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 111;
        _la = this._input.LA(1);
        if(!(_la===RustikParser.COLOR || _la===RustikParser.WILDCARD)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RustikParser = RustikParser;
