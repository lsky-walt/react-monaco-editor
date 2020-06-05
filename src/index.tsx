import React from 'react'
import PropTypes from 'prop-types'
import MonacoEditor, { EditorProps } from './monaco/editor'


interface IndexProps extends EditorProps {
  style?: object,
  onChange?: Function
}

class Index extends React.Component<IndexProps, {}> {
  constructor(props: IndexProps) {
    super(props)
  }

  render() {
    return (
      <div />
    )
  }
}


export default Index
