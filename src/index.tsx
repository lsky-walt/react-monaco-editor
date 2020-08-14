import React from 'react'
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer'

// eslint-disable-next-line no-unused-vars
import MonacoEditor, { EditorProps } from './monaco/editor'

import { DiffProps } from './monaco/diff'
import DiffEditor from './diff.editor'


export interface MonacoEditorProps extends EditorProps {
  style?: object
}

export interface DiffEditorProps extends DiffProps {
  style?: object
}

class Index extends React.PureComponent<MonacoEditorProps> {
  static displayName: string

  render() {
    return (
      <MonacoEditor {...this.props} />
    )
  }
}

Index.displayName = 'MonacoEditor'

DiffEditor.displayName = 'DiffEditor'

export {
  DiffEditor,
  AutoSizer,
}

export default Index
