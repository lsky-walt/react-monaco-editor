import React from 'react'
// eslint-disable-next-line import/no-unresolved
import * as MonacoEditor from 'monaco-editor'
import debounce from 'lodash.debounce'
import MonacoContainer from './monaco-container'

import monacoEditor, { Config } from './init'
import { isFunc, isNumber } from '../utils'

// themes
import { themes } from '../config/themes'

export interface ObjectOptions {
  [propName: string]: any
}

export interface EditorOptions extends ObjectOptions {
  readonly?: boolean | undefined,
}

export interface EditorProps {
  width?: number;
  height: number;
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

interface EditorState {
  ready: boolean;
  monacoDidMount: boolean;
}

const initRange: MonacoEditor.IRange = {
  startLineNumber: 0,
  endLineNumber: 0,
  startColumn: 0,
  endColumn: 0,
}

class Index extends React.Component<EditorProps, EditorState> {
  private container: null | HTMLDivElement

  public monaco: any

  public editor?: MonacoEditor.editor.IStandaloneCodeEditor;

  public editorValue: string;

  static displayName = 'MonacoEditor'

  constructor(props: EditorProps) {
    super(props)

    this.state = {
      ready: false,
      monacoDidMount: false,
    }

    this.container = null

    this.bindRef = this.bindRef.bind(this)
    this.onChange = this.onChange.bind(this)

    // init value
    this.editorValue = props.value || ''

    this.editor = undefined
  }

  componentDidMount() {
    // editor will mount
    const { monacoWillMount = () => { }, cdnConfig } = this.props
    const that = this
    // if cdnConfig
    monacoEditor.init(cdnConfig)
      .then((m) => {
        if (isFunc(monacoWillMount)) monacoWillMount(m)
        that.monaco = m
        that.setState({ monacoDidMount: true })
      })
  }

  componentDidUpdate(prevProps: EditorProps) {
    const { monacoDidMount, ready } = this.state
    if (!monacoDidMount) return

    if (!ready) this.createEditor()

    const {
      width, height, value, language, theme, options = {}, line,
    } = this.props

    if (this.editor && value !== prevProps.value) {
      if (options.readOnly) {
        this.editor.setValue(value)
      } else {
        this.editor.executeEdits('', [
          {
            range: this.editor.getModel()?.getFullModelRange() || initRange,
            text: value,
          },
        ])
      }
      this.editor.pushUndoStop()
    }

    if (this.editor && line !== prevProps.line) {
      this.editor.setScrollPosition({ scrollTop: line })
    }

    if (this.editor && language !== prevProps.language) {
      this.editor.setValue(value)
      this.monaco.editor.setModelLanguage(this.editor.getModel(), language)
    }

    if (this.editor && (prevProps.width !== width || prevProps.height !== height) && isNumber(width) && isNumber(height)) {
      this.editor.layout({ width: this.calc(width), height: this.calc(height) })
    }

    // theme
    if (theme !== prevProps.theme) {
      this.monaco.editor.setTheme(theme)
    }

    if (this.editor && options !== prevProps.options) {
      this.editor.updateOptions(options)
    }
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.dispose()
    }
  }

  onChange() {
    const { onChange = () => { } } = this.props
    if (!this.editor) return
    const value = this.editor.getValue()
    // if equal, return
    if (this.editorValue === value) return
    this.editorValue = value
    onChange(value)
  }

  calc = (n: number | undefined) => {
    if (!n) return 0
    if (typeof n === 'string') return n
    return n - 2
  }

  bindRef(node: HTMLDivElement | null) {
    this.container = node
  }

  createEditor() {
    if (!this.monaco || !this.container) return

    const {
      value, language, options, theme = 'vs', editorDidMount = () => { }, onChange = () => { },
      modelOptions = [],
    } = this.props

    const that = this

    this.editor = this.monaco.editor.create(this.container, {
      model: this.monaco.editor.createModel(
        value,
        language,
        ...modelOptions,
      ),
      automaticLayout: true,
      ...options,
    })

    if (isFunc(editorDidMount)) editorDidMount(this.editor, this.monaco)

    if (that.editor && isFunc(onChange)) {
      that.editor.onDidChangeModelContent(debounce(() => {
        this.onChange()
      }, 32))
    }

    // theme
    Object.keys(themes).forEach((t) => {
      that.monaco.editor.defineTheme(t, themes[t])
    })
    this.monaco.editor.setTheme(theme)

    // ready
    this.setState({ ready: true })
  }

  render() {
    const {
      width, height, loading, bordered = true,
    } = this.props
    const { ready } = this.state
    return (
      <MonacoContainer
        bordered={bordered}
        loading={loading}
        width={width}
        height={height}
        ready={ready}
        bindRef={this.bindRef}
      />
    )
  }
}

export default Index
