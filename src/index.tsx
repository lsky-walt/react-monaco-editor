import React from 'react'
import MonacoEditor, { EditorProps } from './monaco/editor'


export interface MonacoEditorProps extends EditorProps {
  style?: object
}

class Index extends React.Component<MonacoEditorProps> {

  static displayName: string = 'MonacoEditor'

  constructor(props: MonacoEditorProps) {
    super(props)
  }

  render() {
    return (
      <MonacoEditor {...this.props}></MonacoEditor>
    )
  }
}


export default Index
