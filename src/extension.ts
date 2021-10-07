'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import * as child_process from 'child_process';
import * as path from 'path';
// const {exec} = require('child_process');
const player = require('play-sound')();
const _basePath: string = path.join(__dirname, '..');
const _dogAudio: string = path.join(_basePath, 'audio', 'dog.mp3');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

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

// this method is called when your extension is deactivated
export function deactivate() {}
