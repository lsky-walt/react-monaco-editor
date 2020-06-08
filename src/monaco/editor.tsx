
import React from 'react'

import MonacoContainer from './monaco-container'

import monacoEditor from './init'
import { isFunc } from '../utils'

export interface EditorOptions {
  readonly?: boolean | undefined,
  [propName: string]: any
}

export interface EditorProps {
  width: number,
  height: number,
  value: string,
  language: string,
  theme?: string,
  options?: EditorOptions,
  editorDidMount?: (editor: any, monaco: any) => void
}

interface EditorState {
  ready: boolean,
  monacoDidMount: boolean
}

class Index extends React.Component<EditorProps, EditorState> {

  private container: null | HTMLDivElement
  public monaco: any
  public editor: any


  constructor(props: EditorProps) {
    super(props)

    this.state = {
      ready: false,
      monacoDidMount: false
    }

    this.container = null

    this.bindRef = this.bindRef.bind(this)
  }

  componentDidMount() {
    const that = this
    monacoEditor.init()
      .then(m => {
        that.monaco = m
        that.setState({ monacoDidMount: true })
      })
  }

  componentDidUpdate(prevProps: EditorProps) {
    const { monacoDidMount, ready } = this.state
    if (!monacoDidMount) return

    if (!ready) this.createEditor()

    const { value, language, theme, options = {} } = this.props

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

    if (language !== prevProps.language) {
      this.editor.setValue(value)
      this.monaco.editor.setModelLanguage(this.editor.getModel(), language)
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

  bindRef(node: HTMLDivElement | null) {
    this.container = node
  }

  createEditor() {
    if (!this.monaco || !this.container) return

    const { value, language, options, theme, editorDidMount = () => { } } = this.props

    this.editor = this.monaco.editor.create(this.container, {
      model: this.monaco.editor.createModel(
        value,
        language,
      ),
      automaticLayout: true,
      minimap: { enabled: false },
      ...options,
    })

    if (isFunc(editorDidMount)) editorDidMount(this.editor, this.monaco)

    // theme
    this.monaco.editor.setTheme(theme)

    // ready
    this.setState({ ready: true })
  }

  render() {
    const { width, height } = this.props
    const { ready } = this.state
    return (
      <MonacoContainer
        width={width}
        height={height}
        ready={ready}
        bindRef={this.bindRef}
      />
    )
  }
}


export default Index
