// Generated from RustikLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RustikLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMMENT=1, WS=2, START_STATE=3, START_RESTRICT=4, START_ONLY=5, START_MOVES=6, 
		OR=7, OPEN_BLOCK=8, COMMENT_I=9, CLOSE_BLOCK=10, WS_I=11, TURN=12, AFTER=13, 
		INTEGER=14, COLOR=15, WILDCARD=16, SCRAMBLED=17;
	public static final int
		Island=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "Island"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COMMENT", "WS", "START_STATE", "START_RESTRICT", "START_ONLY", "START_MOVES", 
			"OR", "OPEN_BLOCK", "COMMENT_I", "CLOSE_BLOCK", "WS_I", "TURN", "AFTER", 
			"INTEGER", "COLOR", "WILDCARD", "SCRAMBLED"
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


	public RustikLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "RustikLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\23\u00b9\b\1\b\1"+
		"\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t"+
		"\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4"+
		"\22\t\22\3\2\3\2\7\2)\n\2\f\2\16\2,\13\2\3\2\3\2\3\3\6\3\61\n\3\r\3\16"+
		"\3\62\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\n\3\n\7\n`\n\n\f\n\16\nc\13\n\3\n\3\n"+
		"\3\13\3\13\3\13\3\13\3\f\6\fl\n\f\r\f\16\fm\3\f\3\f\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\5\r\u009d\n\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\7"+
		"\17\u00a7\n\17\f\17\16\17\u00aa\13\17\3\20\3\20\3\21\3\21\3\22\3\22\3"+
		"\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\2\2\23\4\3\6\4\b\5\n\6\f\7\16\b"+
		"\20\t\22\n\24\13\26\f\30\r\32\16\34\17\36\20 \21\"\22$\23\4\2\3\b\4\2"+
		"\f\f\17\17\5\2\13\f\17\17\"\"\b\2DDFFHHNNTTWW\3\2\63;\3\2\62;\4\2C\\c"+
		"|\2\u00ce\2\4\3\2\2\2\2\6\3\2\2\2\2\b\3\2\2\2\2\n\3\2\2\2\2\f\3\2\2\2"+
		"\2\16\3\2\2\2\2\20\3\2\2\2\3\22\3\2\2\2\3\24\3\2\2\2\3\26\3\2\2\2\3\30"+
		"\3\2\2\2\3\32\3\2\2\2\3\34\3\2\2\2\3\36\3\2\2\2\3 \3\2\2\2\3\"\3\2\2\2"+
		"\3$\3\2\2\2\4&\3\2\2\2\6\60\3\2\2\2\b\66\3\2\2\2\n>\3\2\2\2\fI\3\2\2\2"+
		"\16P\3\2\2\2\20X\3\2\2\2\22[\3\2\2\2\24]\3\2\2\2\26f\3\2\2\2\30k\3\2\2"+
		"\2\32\u009c\3\2\2\2\34\u009e\3\2\2\2\36\u00a4\3\2\2\2 \u00ab\3\2\2\2\""+
		"\u00ad\3\2\2\2$\u00af\3\2\2\2&*\7%\2\2\')\n\2\2\2(\'\3\2\2\2),\3\2\2\2"+
		"*(\3\2\2\2*+\3\2\2\2+-\3\2\2\2,*\3\2\2\2-.\b\2\2\2.\5\3\2\2\2/\61\t\3"+
		"\2\2\60/\3\2\2\2\61\62\3\2\2\2\62\60\3\2\2\2\62\63\3\2\2\2\63\64\3\2\2"+
		"\2\64\65\b\3\2\2\65\7\3\2\2\2\66\67\7U\2\2\678\7v\2\289\7c\2\29:\7v\2"+
		"\2:;\7g\2\2;<\3\2\2\2<=\b\4\3\2=\t\3\2\2\2>?\7T\2\2?@\7g\2\2@A\7u\2\2"+
		"AB\7v\2\2BC\7t\2\2CD\7k\2\2DE\7e\2\2EF\7v\2\2FG\3\2\2\2GH\b\5\3\2H\13"+
		"\3\2\2\2IJ\7Q\2\2JK\7p\2\2KL\7n\2\2LM\7{\2\2MN\3\2\2\2NO\b\6\3\2O\r\3"+
		"\2\2\2PQ\7O\2\2QR\7q\2\2RS\7x\2\2ST\7g\2\2TU\7u\2\2UV\3\2\2\2VW\b\7\3"+
		"\2W\17\3\2\2\2XY\7Q\2\2YZ\7t\2\2Z\21\3\2\2\2[\\\7*\2\2\\\23\3\2\2\2]a"+
		"\7%\2\2^`\n\2\2\2_^\3\2\2\2`c\3\2\2\2a_\3\2\2\2ab\3\2\2\2bd\3\2\2\2ca"+
		"\3\2\2\2de\b\n\2\2e\25\3\2\2\2fg\7+\2\2gh\3\2\2\2hi\b\13\4\2i\27\3\2\2"+
		"\2jl\t\3\2\2kj\3\2\2\2lm\3\2\2\2mk\3\2\2\2mn\3\2\2\2no\3\2\2\2op\b\f\2"+
		"\2p\31\3\2\2\2q\u009d\t\4\2\2rs\7T\2\2s\u009d\7\64\2\2tu\7N\2\2u\u009d"+
		"\7\64\2\2vw\7H\2\2w\u009d\7\64\2\2xy\7D\2\2y\u009d\7\64\2\2z{\7W\2\2{"+
		"\u009d\7\64\2\2|}\7F\2\2}\u009d\7\64\2\2~\177\7T\2\2\177\u009d\7)\2\2"+
		"\u0080\u0081\7N\2\2\u0081\u009d\7)\2\2\u0082\u0083\7H\2\2\u0083\u009d"+
		"\7)\2\2\u0084\u0085\7D\2\2\u0085\u009d\7)\2\2\u0086\u0087\7W\2\2\u0087"+
		"\u009d\7)\2\2\u0088\u0089\7F\2\2\u0089\u009d\7)\2\2\u008a\u008b\7T\2\2"+
		"\u008b\u008c\7\64\2\2\u008c\u009d\7)\2\2\u008d\u008e\7N\2\2\u008e\u008f"+
		"\7\64\2\2\u008f\u009d\7)\2\2\u0090\u0091\7H\2\2\u0091\u0092\7\64\2\2\u0092"+
		"\u009d\7)\2\2\u0093\u0094\7D\2\2\u0094\u0095\7\64\2\2\u0095\u009d\7)\2"+
		"\2\u0096\u0097\7W\2\2\u0097\u0098\7\64\2\2\u0098\u009d\7)\2\2\u0099\u009a"+
		"\7F\2\2\u009a\u009b\7\64\2\2\u009b\u009d\7)\2\2\u009cq\3\2\2\2\u009cr"+
		"\3\2\2\2\u009ct\3\2\2\2\u009cv\3\2\2\2\u009cx\3\2\2\2\u009cz\3\2\2\2\u009c"+
		"|\3\2\2\2\u009c~\3\2\2\2\u009c\u0080\3\2\2\2\u009c\u0082\3\2\2\2\u009c"+
		"\u0084\3\2\2\2\u009c\u0086\3\2\2\2\u009c\u0088\3\2\2\2\u009c\u008a\3\2"+
		"\2\2\u009c\u008d\3\2\2\2\u009c\u0090\3\2\2\2\u009c\u0093\3\2\2\2\u009c"+
		"\u0096\3\2\2\2\u009c\u0099\3\2\2\2\u009d\33\3\2\2\2\u009e\u009f\7c\2\2"+
		"\u009f\u00a0\7h\2\2\u00a0\u00a1\7v\2\2\u00a1\u00a2\7g\2\2\u00a2\u00a3"+
		"\7t\2\2\u00a3\35\3\2\2\2\u00a4\u00a8\t\5\2\2\u00a5\u00a7\t\6\2\2\u00a6"+
		"\u00a5\3\2\2\2\u00a7\u00aa\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2"+
		"\2\2\u00a9\37\3\2\2\2\u00aa\u00a8\3\2\2\2\u00ab\u00ac\t\7\2\2\u00ac!\3"+
		"\2\2\2\u00ad\u00ae\7\60\2\2\u00ae#\3\2\2\2\u00af\u00b0\7U\2\2\u00b0\u00b1"+
		"\7e\2\2\u00b1\u00b2\7t\2\2\u00b2\u00b3\7c\2\2\u00b3\u00b4\7o\2\2\u00b4"+
		"\u00b5\7d\2\2\u00b5\u00b6\7n\2\2\u00b6\u00b7\7g\2\2\u00b7\u00b8\7f\2\2"+
		"\u00b8%\3\2\2\2\n\2\3*\62am\u009c\u00a8\5\2\3\2\4\3\2\4\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}