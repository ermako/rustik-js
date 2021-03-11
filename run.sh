#!/bin/zsh

rm -rf gen gen_java
npm run antlr4-java
npm run antlr4
#npm test
npm run build
google-chrome-stable --auto-open-devtools-for-tabs index.html
