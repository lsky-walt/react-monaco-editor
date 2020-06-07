import React from 'react'
import PropTypes from 'prop-types'
import MonacoEditor, { EditorProps } from './monaco/editor'


export interface MonacoEditorProps extends EditorProps {
  style?: object,
  onChange?: Function
}

class Index extends React.Component<MonacoEditorProps, {}> {
  constructor(props: MonacoEditorProps) {
    super(props)
  }

  render() {
    return (
      <div />
    )
  }
}


export default Index
