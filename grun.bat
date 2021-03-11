@ECHO OFF

set ORIGDIR=%cd%
set BINDIR=%~dp0

cd %BINDIR%\gen_java
java -cp ".;..\antlr\antlr-4.8-complete.jar" org.antlr.v4.gui.TestRig %*
cd %ORIGDIR%
