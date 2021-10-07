'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// import * as child_process from 'child_process';
const path = require("path");
// const {exec} = require('child_process');
const player = require('play-sound')();
const _basePath = path.join(__dirname, '..');
const _dogAudio = path.join(_basePath, 'audio', 'dog.mp3');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    let activeEditor = vscode.window.activeTextEditor;
    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            for (const change of event.contentChanges) {
                let pressedKey = change.text;
                player.play(_dogAudio);
            }
        }
    }, null, context.subscriptions);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map