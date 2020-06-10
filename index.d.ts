import * as React from 'react'

export interface EditorOptions {
  readonly?: boolean | undefined,
  [propName: string]: any
}
export interface MonacoEditorProps {
  width?: number | string,
  height?: number | string,
  value: string,
  language: string,
  theme?: string,
  options?: EditorOptions,
  style?: object,
  editorWillMount?: (monaco: any) => void,
  editorDidMount?: (editor: any, monaco: any) => void,
  onChange?: (value: string | null) => void,
}

declare class MonacoEditor extends React.Component<MonacoEditorProps> {
  render(): JSX.Element
}