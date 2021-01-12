import * as React from 'react'
import init from 'src/monaco/init'

export interface EditorOptions {
  readonly?: boolean | undefined,
  [propName: string]: any
}
export interface MonacoEditorProps {
  width?: number,
  height: number,
  value: string,
  language: string,
  theme?: string,
  options?: EditorOptions,
  style?: object,
  line?: number,
  bordered?: boolean,
  modelOptions?: Array<any>,
  monacoWillMount?: (monaco: any) => void,
  editorDidMount?: (editor: any, monaco: any) => void,
  onChange?: (value: string | null) => void,
}

declare class MonacoEditor extends React.Component<MonacoEditorProps> {
  render(): JSX.Element
}

export interface DiffProps {
  width?: number,
  height: number,
  original: string,
  modified: string,
  originalLanguage?: string,
  modifiedLanguage?: string,
  language: string,
  theme?: string,
  options?: object,
  monacoWillMount?: (monaco: any) => void,
  editorDidMount?: (original: (value: string) => void, modified: (value: string) => void, editor: any) => void,
}

export class DiffEditor extends React.Component<MonacoEditorProps> {
  render(): JSX.Element
}

export declare const themeNames: Array<'active4d'|'clouds'|'chrome'|'monokai'|'solarized-dark'|'solarized-light'>;

export declare namespace monaco  {
  function init (): Promise<any>
}