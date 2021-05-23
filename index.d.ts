import * as React from 'react'
import * as MonacoEditor from 'monaco-editor'
import init, { Config } from 'src/monaco/init'

export interface EditorOptions {
  readonly?: boolean | undefined,
  [propName: string]: any
}
export interface MonacoEditorProps {
  width?: number;
  height: number;
  style?: React.CSSProperties;
  value: string;
  language: string;
  theme?: string;
  line?: number;
  bordered?: boolean;
  options?: MonacoEditor.editor.IEditorOptions;
  loading?: React.ReactNode;
  modelOptions?: Array<any>;
  monacoWillMount?: (monaco: any) => void;
  editorDidMount?: (editor: MonacoEditor.editor.IStandaloneCodeEditor | undefined, monaco: any) => void;
  onChange?: (value: string | null) => void;
  cdnConfig?: Config;
}

declare class MonacoEditor extends React.Component<MonacoEditorProps> {
  render(): JSX.Element
}

export interface DiffProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  original: string;
  modified: string;
  originalLanguage?: string;
  modifiedLanguage?: string;
  language: string;
  theme?: string;
  options?: MonacoEditor.editor.IDiffEditorOptions;
  monacoWillMount?: (monaco: any) => void;
  editorDidMount?: (original: MonacoEditor.editor.ITextModel, modified: MonacoEditor.editor.ITextModel, editor: MonacoEditor.editor.IStandaloneDiffEditor) => void;
  onChange?: (value: string) => void;
  /**
   * custom cdn
   */
  cdnConfig?: Config;
}

export class DiffEditor extends React.Component<MonacoEditorProps> {
  render(): JSX.Element
}

export declare const themeNames: Array<'active4d'|'clouds'|'chrome'|'monokai'|'solarized-dark'|'solarized-light'>;

export declare namespace monaco  {
  function init (): Promise<any>;
}