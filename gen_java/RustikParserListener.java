// Generated from RustikParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RustikParser}.
 */
public interface RustikParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RustikParser#rustikfile}.
	 * @param ctx the parse tree
	 */
	void enterRustikfile(RustikParser.RustikfileContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#rustikfile}.
	 * @param ctx the parse tree
	 */
	void exitRustikfile(RustikParser.RustikfileContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustikParser#stateList}.
	 * @param ctx the parse tree
	 */
	void enterStateList(RustikParser.StateListContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#stateList}.
	 * @param ctx the parse tree
	 */
	void exitStateList(RustikParser.StateListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code SpecifiedState}
	 * labeled alternative in {@link RustikParser#cubeState}.
	 * @param ctx the parse tree
	 */
	void enterSpecifiedState(RustikParser.SpecifiedStateContext ctx);
	/**
	 * Exit a parse tree produced by the {@code SpecifiedState}
	 * labeled alternative in {@link RustikParser#cubeState}.
	 * @param ctx the parse tree
	 */
	void exitSpecifiedState(RustikParser.SpecifiedStateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ScrambledState}
	 * labeled alternative in {@link RustikParser#cubeState}.
	 * @param ctx the parse tree
	 */
	void enterScrambledState(RustikParser.ScrambledStateContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ScrambledState}
	 * labeled alternative in {@link RustikParser#cubeState}.
	 * @param ctx the parse tree
	 */
	void exitScrambledState(RustikParser.ScrambledStateContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustikParser#solutionModifier}.
	 * @param ctx the parse tree
	 */
	void enterSolutionModifier(RustikParser.SolutionModifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#solutionModifier}.
	 * @param ctx the parse tree
	 */
	void exitSolutionModifier(RustikParser.SolutionModifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustikParser#moves}.
	 * @param ctx the parse tree
	 */
	void enterMoves(RustikParser.MovesContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#moves}.
	 * @param ctx the parse tree
	 */
	void exitMoves(RustikParser.MovesContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustikParser#restriction}.
	 * @param ctx the parse tree
	 */
	void enterRestriction(RustikParser.RestrictionContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#restriction}.
	 * @param ctx the parse tree
	 */
	void exitRestriction(RustikParser.RestrictionContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustikParser#only}.
	 * @param ctx the parse tree
	 */
	void enterOnly(RustikParser.OnlyContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#only}.
	 * @param ctx the parse tree
	 */
	void exitOnly(RustikParser.OnlyContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustikParser#qualifierList}.
	 * @param ctx the parse tree
	 */
	void enterQualifierList(RustikParser.QualifierListContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#qualifierList}.
	 * @param ctx the parse tree
	 */
	void exitQualifierList(RustikParser.QualifierListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AfterQualifier}
	 * labeled alternative in {@link RustikParser#qualifierListElement}.
	 * @param ctx the parse tree
	 */
	void enterAfterQualifier(RustikParser.AfterQualifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AfterQualifier}
	 * labeled alternative in {@link RustikParser#qualifierListElement}.
	 * @param ctx the parse tree
	 */
	void exitAfterQualifier(RustikParser.AfterQualifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TurnQualifier}
	 * labeled alternative in {@link RustikParser#qualifierListElement}.
	 * @param ctx the parse tree
	 */
	void enterTurnQualifier(RustikParser.TurnQualifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TurnQualifier}
	 * labeled alternative in {@link RustikParser#qualifierListElement}.
	 * @param ctx the parse tree
	 */
	void exitTurnQualifier(RustikParser.TurnQualifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustikParser#stateDiagram}.
	 * @param ctx the parse tree
	 */
	void enterStateDiagram(RustikParser.StateDiagramContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#stateDiagram}.
	 * @param ctx the parse tree
	 */
	void exitStateDiagram(RustikParser.StateDiagramContext ctx);
	/**
	 * Enter a parse tree produced by {@link RustikParser#line}.
	 * @param ctx the parse tree
	 */
	void enterLine(RustikParser.LineContext ctx);
	/**
	 * Exit a parse tree produced by {@link RustikParser#line}.
	 * @param ctx the parse tree
	 */
	void exitLine(RustikParser.LineContext ctx);
}