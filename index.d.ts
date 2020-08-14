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

export type Size = {
  height: number;
  width: number;
};

export type AutoSizerProps = {
  children: (props: Size) => React.ReactNode;
  className?: string;
  defaultHeight?: number;
  defaultWidth?: number;
  disableHeight?: boolean;
  disableWidth?: boolean;
  nonce?: string;
  onResize?: (info: Size) => any;
  style?: React.CSSProperties;
  [key: string]: any;
};

export class AutoSizer extends PureComponent<AutoSizerProps, Size> {
  static defaultProps: {
      onResize: () => void;
      disableHeight: false;
      disableWidth: false;
      style: {};
  }

  constructor(props: AutoSizerProps)

  componentDidMount(): void

  componentWillUnmount(): void

  render(): JSX.Element
}


export interface DiffProps {
  width?: number | string,
  height?: number | string,
  original: string,
  modified: string,
  originalLanguage?: string,
  modifiedLanguage?: string,
  language: string,
  theme?: string,
  options?: object,
  editorWillMount?: (monaco: any) => void,
  editorDidMount?: (original: (value: string) => void, modified: (value: string) => void, editor: any) => void,
}

export class DiffEditor extends React.Component<MonacoEditorProps> {
  render(): JSX.Element
}