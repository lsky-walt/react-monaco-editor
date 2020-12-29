import React from 'react'

import debounce from 'lodash.debounce'
import MonacoContainer from './monaco-container'

import monacoEditor from './init'
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
  width?: number,
  height: number,
  value: string,
  language: string,
  theme?: string,
  line?: number,
  options?: EditorOptions,
  loading?: React.ReactNode,
  modelOptions?: Array<any>,
  monacoWillMount?: (monaco: any) => void,
  editorDidMount?: (editor: any, monaco: any) => void,
  onChange?: (value: string | null) => void,
}

interface EditorState {
  ready: boolean,
  monacoDidMount: boolean
}

class Index extends React.Component<EditorProps, EditorState> {
  private container: null | HTMLDivElement

  public monaco: any

  public editor: any

  static displayName = 'MonacoEditor'

  constructor(props: EditorProps) {
    super(props)

    this.state = {
      ready: false,
      monacoDidMount: false,
    }

    this.container = null

    this.bindRef = this.bindRef.bind(this)
  }

  componentDidMount() {
    // editor will mount
    const { monacoWillMount = () => { } } = this.props
    const that = this
    monacoEditor.init()
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

    if (value !== prevProps.value) {
      if (options.readOnly) {
        this.editor.setValue(value)
      } else {
        this.editor.executeEdits('', [
          {
            range: this.editor.getModel().getFullModelRange(),
            text: value,
          },
        ])
      }
      this.editor.pushUndoStop()
    }

    if (line !== prevProps.line) {
      this.editor.setScrollPosition({ scrollTop: line })
    }

    if (language !== prevProps.language) {
      this.editor.setValue(value)
      this.monaco.editor.setModelLanguage(this.editor.getModel(), language)
    }

    if ((prevProps.width !== width || prevProps.height !== height) && isNumber(width) && isNumber(height)) {
      this.editor.layout({ width: this.calc(width), height: this.calc(height) })
    }

    // theme
    if (theme !== prevProps.theme) {
      this.monaco.editor.setTheme(theme)
    }

    if (options !== prevProps.options) {
      this.editor.updateOptions(options)
    }
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.dispose()
    }
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

    if (isFunc(onChange)) {
      that.editor.onDidChangeModelContent(debounce(() => {
        onChange(that.editor.getValue())
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
    const { width, height, loading } = this.props
    const { ready } = this.state
    return (
      <MonacoContainer
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
