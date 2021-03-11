const fs = require("fs");
const jsdiff = require("diff");
const Interpreter = require("./src/interpreter").RustikInterpreter;


function standardizeNewlines(s) {
    return s.trim().replace(/\r?\n/g, "\n") + "\n";
}

function setupInterpreter(ctxName) {
    const ctx = require("./" + ctxName);
    const interpreter = new Interpreter();
    //if (ctx.helpers) {
    //    for (const [name, f] of ctx.helpers) {
    //        interpreter.registerExprHelper(name, f);
    //    }
    //}
    //if (ctx.blockHelpers) {
    //    for (const [name, f] of ctx.blockHelpers) {
    //        interpreter.registerBlockHelper(name, f);
    //    }
    //}
    let interpretCtx = {};
    if (ctx.ctx) {
        interpretCtx = ctx.ctx;
    }
    return [interpreter, interpreterCtx, ctx.description];
}

function setupTest(testName, outputName, ctxName) {
    let inputFile = "";
    let outputFile = "";
    let ctxFile = "";

    if (outputName && ctxName) {
        // 3 arguments specified - use them exactly
        inputFile = testName;
        outputFile = outputName;
        ctxFile = ctxName;
    } else {
        // less than 3 arguments - try to infer the other files for this test
        // based on the name of the input.
        const suffixIdx = testName.lastIndexOf(".");
        let baseName = "";
        let suffix = ".input";
        if (suffixIdx < 0) {
            baseName = testName;
        } else {
            baseName = testName.substring(0, suffixIdx);
            suffix = testName.substring(suffixIdx);
        }
        inputFile = baseName + suffix;
        outputFile = baseName + ".output";
        ctxFile = baseName + ".js";
    }

    if (fs.existsSync(inputFile) && fs.existsSync(outputFile) && fs.existsSync(ctxFile)) {
        const inputData = fs.readFileSync(inputFile, {flag: "r", encoding: "utf-8"});
        const outputData = fs.readFileSync(outputFile, {flag: "r", encoding: "utf-8"});
        const [interpreter, ctx, description] = setupInterpreter(ctxFile);
        return [
            inputData, outputData, ctx, interpreter,
            {inputFile: inputFile, outputFile: outputFile, ctxFile: ctxFile, description: description},
        ];
    } else {
        throw new Error("Missing test file(s): expected to find "
                        + inputFile + ", " + outputFile + ", " + ctxFile);
    }
}

function runInterpreter(inputData, ctx, interpreter) {
    const f = interpreter.interpret(inputData);
    return f(ctx);
}

const spacer = "===================================================================";

function runTest(inputData, outputData, ctx, interpretr, descr={}, verbose=true) {
    const f = interpretr.interpret(inputData);

    if (verbose) {
        console.log("Running test: " + descr.description);
        console.log("");

        console.log("interpreted " + descr.inputFile + " to function with source:\n" + spacer);
        console.log(f.toString());
        console.log("");

        console.log("applying to context object read from " + descr.ctxFile + ":\n" + spacer);
        console.log(ctx);
        console.log("");
    }

    const output = standardizeNewlines(f(ctx));
    const expected = standardizeNewlines(outputData);

    if (output === expected) {
        if (verbose) {
            console.log("rendered output text:\n" + spacer);
            console.log(output);
            console.log("");
            console.log("TEST PASS");
        }
        return [output];
    } else {
        if (verbose) {
            const outputLines = (output.match(/\r?\n/g) || "").length + 1;
            const expectedLines = (expected.match(/\r?\n/g) || "").length + 1;
            console.log("rendered output does not match expected text from " + descr.outputFile + ":");
            console.log(jsdiff.createTwoFilesPatch("interpreted output", "expected output", output, expected,
                                                   "(interpreted from " + descr.inputFile + ")",
                                                   "(from " + descr.outputFile + ")",
                                                   options={context: Math.max(outputLines, expectedLines)}));
            console.log("");
            console.log("TEST FAIL");
        }
        return [output, expected];
    }
}

exports.standardizeNewlines = standardizeNewlines;
exports.setupInterpreter = setupInterpreter;
exports.setupTest = setupTest;
exports.runInterpreter = runInterpreter;
exports.runTest = runTest;

if (!module.parent) {
    const ArgumentParser = require("argparse").ArgumentParser;
    const parser = new ArgumentParser({
        version: "2018.1.0",
        addHelp: true,
        description: "Rustik Interpreter driver",
    });

    parser.addArgument(
        ["-t", "--test"],
        {
            help: "run a test with the driver",
            action: "storeTrue",
        });
    parser.addArgument(
        ["input"],
        {
            help: "input file to interpret",
        });
    parser.addArgument(
        ["-e", "--expected"],
        {
            help: "file with expected output (test only)",
        });
    parser.addArgument(
        ["-c", "--ctx"],
        {
            help: "context file",
        });

    const args = parser.parseArgs();

    if (args.test) {
        if (args.expected && !args.ctx) {
            console.log("WARNING: ignoring expected output file " + args.expected);
            console.log("  specify together with -c CTX\n");
        }
        if (args.ctx && !args.expected) {
            console.log("WARNING: ignoring context file " + args.ctx);
            console.log("  specify together with -e EXPECTED\n");
        }

        const testOutput = runTest(...setupTest(args.input, args.expected, args.ctx), verbose=true);
        if (testOutput.length === 1) {
            process.exit(0);
        } else {
            process.exit(1);
        }
    } else {
        if (args.expected) {
            console.log("WARNING: ignoring expected output file " + args.expected);
            console.log("  specify with -t\n");
        }

        const inputData = fs.readFileSync(args.input, {flag: "r", encoding: "utf-8"});
        let interpretr = null;
        let ctx = null;

        if (args.ctx) {
            [interpretr, ctx] = setupInterpreter(args.ctx);
        } else {
            interpretr = new Interpreter();
            ctx = {};
        }

        console.log(runInterpreter(inputData, ctx, interpretr));
        process.exit(0);
    }
}
