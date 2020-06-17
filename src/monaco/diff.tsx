import React from 'react'
import { isFunc } from '../utils'

import MonacoContainer from './monaco-container'
import monacoEditorInit from './init'

import { themes } from '../config/themes'

export interface DiffProps {
  width?: number | string,
  height?: number | string,
  original: string,
  modified: string,
  originalLanguage: string,
  modifiedLanguage: string,
  language: string,
  theme?: string,
  options?: object,
  editorWillMount?: (monaco: any) => void,
  editorDidMount?: (original: string, modified: string, editor: any) => void,
}

interface EditorState {
  ready: boolean,
  monacoDidMount: boolean
}

class Index extends React.Component<DiffProps, EditorState> {
  public monaco: any;

  public editor: any;

  public container: HTMLDivElement | null

  static displayName: string

  constructor(props: DiffProps) {
    super(props)

    this.state = {
      ready: false,
      monacoDidMount: false,
    }

    this.monaco = null
    this.editor = null

    this.container = null


    this.bindRef = this.bindRef.bind(this)
    this.createEditor = this.createEditor.bind(this)
  }

  componentDidMount() {
    const that = this
    const { editorWillMount = () => { } } = this.props
    monacoEditorInit.init()
      .then((m) => {
        if (isFunc(editorWillMount)) editorWillMount(m)
        that.monaco = m
        that.setState({ monacoDidMount: true })
      })
  }

  componentDidUpdate(prevProps: DiffProps) {
    const { ready, monacoDidMount } = this.state

    if (!monacoDidMount) return

    if (!ready) this.createEditor()

    const {
      original, originalLanguage, modified, modifiedLanguage, language,
      theme, options,
    } = this.props

    // original
    if (prevProps.original !== original) {
      this.editor.getModel().original.setValue(original)
    }

    // modified
    if (prevProps.modified !== modified) {
      this.editor.getModel().modified.setValue(modified)
    }

    // originalLanguage、modifiedLanguage、language
    if (prevProps.originalLanguage !== originalLanguage
      || prevProps.modifiedLanguage !== modifiedLanguage
      || prevProps.language !== language) {
      const { original: or, modified: mo } = this.editor.getModel()

      this.monaco.editor.setModelLanguage(or, originalLanguage || language)
      this.monaco.editor.setModelLanguage(mo, modifiedLanguage || language)
    }

    // theme
    if (prevProps.theme !== theme) {
      this.monaco.editor.setTheme(theme)
    }

    // options
    if (prevProps.options !== options) {
      this.editor.updateOptions(options)
    }
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.dispose()
    }
  }


  setModels() {
    const {
      original, modified, originalLanguage, modifiedLanguage, language,
    } = this.props

    const originalModel = this.monaco.editor
      .createModel(original, originalLanguage || language)

    const modifiedModel = this.monaco.editor
      .createModel(modified, modifiedLanguage || language)

    this.editor.setModel({ original: originalModel, modified: modifiedModel })
  }

  bindRef(node: HTMLDivElement | null) {
    this.container = node
  }

  createEditor() {
    const { editorDidMount = () => { }, theme, options } = this.props
    if (!this.monaco || !this.container) return

    this.editor = this.monaco.editor.createDiffEditor(this.container, {
      ...options,
    })

    this.setModels()

    const { original, modified } = this.editor.getModel()

    if (!isFunc(editorDidMount)) {
      editorDidMount(
        original.getValue.bind(original),
        modified.getValue.bind(modified),
        this.editor,
      )
    }

    Object.keys(themes).forEach((v) => {
      this.monaco.editor.defineTheme(v, themes[v])
    })

    this.monaco.editor.setTheme(theme)

    this.setState({ ready: true })
  }

  render() {
    const { ready } = this.state
    const { width = '100%', height = '100%' } = this.props
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
