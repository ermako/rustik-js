// Generated from RustikParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RustikParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMMENT=1, WS=2, START_STATE=3, START_RESTRICT=4, START_ONLY=5, START_MOVES=6, 
		OR=7, OPEN_BLOCK=8, COMMENT_I=9, CLOSE_BLOCK=10, WS_I=11, TURN=12, AFTER=13, 
		INTEGER=14, COLOR=15, WILDCARD=16, SCRAMBLED=17;
	public static final int
		RULE_rustikfile = 0, RULE_stateList = 1, RULE_cubeState = 2, RULE_solutionModifier = 3, 
		RULE_moves = 4, RULE_restriction = 5, RULE_only = 6, RULE_qualifierList = 7, 
		RULE_qualifierListElement = 8, RULE_stateDiagram = 9, RULE_line = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"rustikfile", "stateList", "cubeState", "solutionModifier", "moves", 
			"restriction", "only", "qualifierList", "qualifierListElement", "stateDiagram", 
			"line"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'State'", "'Restrict'", "'Only'", "'Moves'", "'Or'", 
			"'('", null, "')'", null, null, "'after'", null, null, "'.'", "'Scrambled'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMMENT", "WS", "START_STATE", "START_RESTRICT", "START_ONLY", 
			"START_MOVES", "OR", "OPEN_BLOCK", "COMMENT_I", "CLOSE_BLOCK", "WS_I", 
			"TURN", "AFTER", "INTEGER", "COLOR", "WILDCARD", "SCRAMBLED"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "RustikParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RustikParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class RustikfileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(RustikParser.EOF, 0); }
		public List<StateListContext> stateList() {
			return getRuleContexts(StateListContext.class);
		}
		public StateListContext stateList(int i) {
			return getRuleContext(StateListContext.class,i);
		}
		public RustikfileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rustikfile; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterRustikfile(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitRustikfile(this);
		}
	}

	public final RustikfileContext rustikfile() throws RecognitionException {
		RustikfileContext _localctx = new RustikfileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_rustikfile);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==START_STATE) {
				{
				{
				setState(22);
				stateList();
				}
				}
				setState(27);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(28);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateListContext extends ParserRuleContext {
		public CubeStateContext cubeState() {
			return getRuleContext(CubeStateContext.class,0);
		}
		public StateListContext stateList() {
			return getRuleContext(StateListContext.class,0);
		}
		public SolutionModifierContext solutionModifier() {
			return getRuleContext(SolutionModifierContext.class,0);
		}
		public MovesContext moves() {
			return getRuleContext(MovesContext.class,0);
		}
		public StateListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterStateList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitStateList(this);
		}
	}

	public final StateListContext stateList() throws RecognitionException {
		StateListContext _localctx = new StateListContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stateList);
		int _la;
		try {
			setState(40);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(30);
				cubeState();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				cubeState();
				setState(33);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==START_RESTRICT || _la==START_ONLY) {
					{
					setState(32);
					solutionModifier();
					}
				}

				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==START_MOVES) {
					{
					setState(35);
					moves();
					}
				}

				setState(38);
				stateList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CubeStateContext extends ParserRuleContext {
		public CubeStateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cubeState; }
	 
		public CubeStateContext() { }
		public void copyFrom(CubeStateContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SpecifiedStateContext extends CubeStateContext {
		public TerminalNode START_STATE() { return getToken(RustikParser.START_STATE, 0); }
		public TerminalNode OPEN_BLOCK() { return getToken(RustikParser.OPEN_BLOCK, 0); }
		public StateDiagramContext stateDiagram() {
			return getRuleContext(StateDiagramContext.class,0);
		}
		public TerminalNode CLOSE_BLOCK() { return getToken(RustikParser.CLOSE_BLOCK, 0); }
		public SpecifiedStateContext(CubeStateContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterSpecifiedState(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitSpecifiedState(this);
		}
	}
	public static class ScrambledStateContext extends CubeStateContext {
		public TerminalNode START_STATE() { return getToken(RustikParser.START_STATE, 0); }
		public TerminalNode OPEN_BLOCK() { return getToken(RustikParser.OPEN_BLOCK, 0); }
		public TerminalNode SCRAMBLED() { return getToken(RustikParser.SCRAMBLED, 0); }
		public TerminalNode CLOSE_BLOCK() { return getToken(RustikParser.CLOSE_BLOCK, 0); }
		public ScrambledStateContext(CubeStateContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterScrambledState(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitScrambledState(this);
		}
	}

	public final CubeStateContext cubeState() throws RecognitionException {
		CubeStateContext _localctx = new CubeStateContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_cubeState);
		try {
			setState(51);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new SpecifiedStateContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				match(START_STATE);
				setState(43);
				match(OPEN_BLOCK);
				setState(44);
				stateDiagram();
				setState(45);
				match(CLOSE_BLOCK);
				}
				break;
			case 2:
				_localctx = new ScrambledStateContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				match(START_STATE);
				setState(48);
				match(OPEN_BLOCK);
				setState(49);
				match(SCRAMBLED);
				setState(50);
				match(CLOSE_BLOCK);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SolutionModifierContext extends ParserRuleContext {
		public RestrictionContext restriction() {
			return getRuleContext(RestrictionContext.class,0);
		}
		public OnlyContext only() {
			return getRuleContext(OnlyContext.class,0);
		}
		public SolutionModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_solutionModifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterSolutionModifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitSolutionModifier(this);
		}
	}

	public final SolutionModifierContext solutionModifier() throws RecognitionException {
		SolutionModifierContext _localctx = new SolutionModifierContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_solutionModifier);
		try {
			setState(61);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				restriction();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(54);
				only();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(55);
				restriction();
				setState(56);
				only();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(58);
				only();
				setState(59);
				restriction();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MovesContext extends ParserRuleContext {
		public TerminalNode START_MOVES() { return getToken(RustikParser.START_MOVES, 0); }
		public TerminalNode OPEN_BLOCK() { return getToken(RustikParser.OPEN_BLOCK, 0); }
		public TerminalNode INTEGER() { return getToken(RustikParser.INTEGER, 0); }
		public TerminalNode CLOSE_BLOCK() { return getToken(RustikParser.CLOSE_BLOCK, 0); }
		public MovesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moves; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterMoves(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitMoves(this);
		}
	}

	public final MovesContext moves() throws RecognitionException {
		MovesContext _localctx = new MovesContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_moves);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(START_MOVES);
			setState(64);
			match(OPEN_BLOCK);
			setState(65);
			match(INTEGER);
			setState(66);
			match(CLOSE_BLOCK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RestrictionContext extends ParserRuleContext {
		public TerminalNode START_RESTRICT() { return getToken(RustikParser.START_RESTRICT, 0); }
		public TerminalNode OPEN_BLOCK() { return getToken(RustikParser.OPEN_BLOCK, 0); }
		public QualifierListContext qualifierList() {
			return getRuleContext(QualifierListContext.class,0);
		}
		public TerminalNode CLOSE_BLOCK() { return getToken(RustikParser.CLOSE_BLOCK, 0); }
		public RestrictionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_restriction; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterRestriction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitRestriction(this);
		}
	}

	public final RestrictionContext restriction() throws RecognitionException {
		RestrictionContext _localctx = new RestrictionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_restriction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(START_RESTRICT);
			setState(69);
			match(OPEN_BLOCK);
			setState(70);
			qualifierList();
			setState(71);
			match(CLOSE_BLOCK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OnlyContext extends ParserRuleContext {
		public TerminalNode START_ONLY() { return getToken(RustikParser.START_ONLY, 0); }
		public TerminalNode OPEN_BLOCK() { return getToken(RustikParser.OPEN_BLOCK, 0); }
		public QualifierListContext qualifierList() {
			return getRuleContext(QualifierListContext.class,0);
		}
		public TerminalNode CLOSE_BLOCK() { return getToken(RustikParser.CLOSE_BLOCK, 0); }
		public OnlyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_only; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterOnly(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitOnly(this);
		}
	}

	public final OnlyContext only() throws RecognitionException {
		OnlyContext _localctx = new OnlyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_only);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(START_ONLY);
			setState(74);
			match(OPEN_BLOCK);
			setState(75);
			qualifierList();
			setState(76);
			match(CLOSE_BLOCK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifierListContext extends ParserRuleContext {
		public QualifierListElementContext qualifierListElement() {
			return getRuleContext(QualifierListElementContext.class,0);
		}
		public QualifierListContext qualifierList() {
			return getRuleContext(QualifierListContext.class,0);
		}
		public QualifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifierList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterQualifierList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitQualifierList(this);
		}
	}

	public final QualifierListContext qualifierList() throws RecognitionException {
		QualifierListContext _localctx = new QualifierListContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_qualifierList);
		try {
			setState(82);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(78);
				qualifierListElement();
				setState(79);
				qualifierList();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(81);
				qualifierListElement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifierListElementContext extends ParserRuleContext {
		public QualifierListElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifierListElement; }
	 
		public QualifierListElementContext() { }
		public void copyFrom(QualifierListElementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TurnQualifierContext extends QualifierListElementContext {
		public TerminalNode TURN() { return getToken(RustikParser.TURN, 0); }
		public TurnQualifierContext(QualifierListElementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterTurnQualifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitTurnQualifier(this);
		}
	}
	public static class AfterQualifierContext extends QualifierListElementContext {
		public List<TerminalNode> TURN() { return getTokens(RustikParser.TURN); }
		public TerminalNode TURN(int i) {
			return getToken(RustikParser.TURN, i);
		}
		public TerminalNode AFTER() { return getToken(RustikParser.AFTER, 0); }
		public AfterQualifierContext(QualifierListElementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterAfterQualifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitAfterQualifier(this);
		}
	}

	public final QualifierListElementContext qualifierListElement() throws RecognitionException {
		QualifierListElementContext _localctx = new QualifierListElementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_qualifierListElement);
		try {
			setState(88);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				_localctx = new AfterQualifierContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(84);
				match(TURN);
				setState(85);
				match(AFTER);
				setState(86);
				match(TURN);
				}
				break;
			case 2:
				_localctx = new TurnQualifierContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(87);
				match(TURN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateDiagramContext extends ParserRuleContext {
		public List<LineContext> line() {
			return getRuleContexts(LineContext.class);
		}
		public LineContext line(int i) {
			return getRuleContext(LineContext.class,i);
		}
		public StateDiagramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDiagram; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterStateDiagram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitStateDiagram(this);
		}
	}

	public final StateDiagramContext stateDiagram() throws RecognitionException {
		StateDiagramContext _localctx = new StateDiagramContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_stateDiagram);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			line();
			setState(91);
			line();
			setState(92);
			line();
			setState(93);
			line();
			setState(94);
			line();
			setState(95);
			line();
			setState(96);
			line();
			setState(97);
			line();
			setState(98);
			line();
			setState(99);
			line();
			setState(100);
			line();
			setState(101);
			line();
			setState(102);
			line();
			setState(103);
			line();
			setState(104);
			line();
			setState(105);
			line();
			setState(106);
			line();
			setState(107);
			line();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LineContext extends ParserRuleContext {
		public List<TerminalNode> COLOR() { return getTokens(RustikParser.COLOR); }
		public TerminalNode COLOR(int i) {
			return getToken(RustikParser.COLOR, i);
		}
		public List<TerminalNode> WILDCARD() { return getTokens(RustikParser.WILDCARD); }
		public TerminalNode WILDCARD(int i) {
			return getToken(RustikParser.WILDCARD, i);
		}
		public LineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_line; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).enterLine(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RustikParserListener ) ((RustikParserListener)listener).exitLine(this);
		}
	}

	public final LineContext line() throws RecognitionException {
		LineContext _localctx = new LineContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_line);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			_la = _input.LA(1);
			if ( !(_la==COLOR || _la==WILDCARD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(110);
			_la = _input.LA(1);
			if ( !(_la==COLOR || _la==WILDCARD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(111);
			_la = _input.LA(1);
			if ( !(_la==COLOR || _la==WILDCARD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\23t\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\3\2\7\2\32\n\2\f\2\16\2\35\13\2\3\2\3\2\3\3\3\3\3\3\5\3$\n\3\3"+
		"\3\5\3\'\n\3\3\3\3\3\5\3+\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4"+
		"\66\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5@\n\5\3\6\3\6\3\6\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\5\tU\n\t\3\n\3"+
		"\n\3\n\3\n\5\n[\n\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\2\2"+
		"\r\2\4\6\b\n\f\16\20\22\24\26\2\3\3\2\21\22\2r\2\33\3\2\2\2\4*\3\2\2\2"+
		"\6\65\3\2\2\2\b?\3\2\2\2\nA\3\2\2\2\fF\3\2\2\2\16K\3\2\2\2\20T\3\2\2\2"+
		"\22Z\3\2\2\2\24\\\3\2\2\2\26o\3\2\2\2\30\32\5\4\3\2\31\30\3\2\2\2\32\35"+
		"\3\2\2\2\33\31\3\2\2\2\33\34\3\2\2\2\34\36\3\2\2\2\35\33\3\2\2\2\36\37"+
		"\7\2\2\3\37\3\3\2\2\2 +\5\6\4\2!#\5\6\4\2\"$\5\b\5\2#\"\3\2\2\2#$\3\2"+
		"\2\2$&\3\2\2\2%\'\5\n\6\2&%\3\2\2\2&\'\3\2\2\2\'(\3\2\2\2()\5\4\3\2)+"+
		"\3\2\2\2* \3\2\2\2*!\3\2\2\2+\5\3\2\2\2,-\7\5\2\2-.\7\n\2\2./\5\24\13"+
		"\2/\60\7\f\2\2\60\66\3\2\2\2\61\62\7\5\2\2\62\63\7\n\2\2\63\64\7\23\2"+
		"\2\64\66\7\f\2\2\65,\3\2\2\2\65\61\3\2\2\2\66\7\3\2\2\2\67@\5\f\7\28@"+
		"\5\16\b\29:\5\f\7\2:;\5\16\b\2;@\3\2\2\2<=\5\16\b\2=>\5\f\7\2>@\3\2\2"+
		"\2?\67\3\2\2\2?8\3\2\2\2?9\3\2\2\2?<\3\2\2\2@\t\3\2\2\2AB\7\b\2\2BC\7"+
		"\n\2\2CD\7\20\2\2DE\7\f\2\2E\13\3\2\2\2FG\7\6\2\2GH\7\n\2\2HI\5\20\t\2"+
		"IJ\7\f\2\2J\r\3\2\2\2KL\7\7\2\2LM\7\n\2\2MN\5\20\t\2NO\7\f\2\2O\17\3\2"+
		"\2\2PQ\5\22\n\2QR\5\20\t\2RU\3\2\2\2SU\5\22\n\2TP\3\2\2\2TS\3\2\2\2U\21"+
		"\3\2\2\2VW\7\16\2\2WX\7\17\2\2X[\7\16\2\2Y[\7\16\2\2ZV\3\2\2\2ZY\3\2\2"+
		"\2[\23\3\2\2\2\\]\5\26\f\2]^\5\26\f\2^_\5\26\f\2_`\5\26\f\2`a\5\26\f\2"+
		"ab\5\26\f\2bc\5\26\f\2cd\5\26\f\2de\5\26\f\2ef\5\26\f\2fg\5\26\f\2gh\5"+
		"\26\f\2hi\5\26\f\2ij\5\26\f\2jk\5\26\f\2kl\5\26\f\2lm\5\26\f\2mn\5\26"+
		"\f\2n\25\3\2\2\2op\t\2\2\2pq\t\2\2\2qr\t\2\2\2r\27\3\2\2\2\n\33#&*\65"+
		"?TZ";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}