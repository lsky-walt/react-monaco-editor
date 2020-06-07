import React from 'react';
import { render } from 'react-dom'
import MonacoEditor, { MonacoEditorProps } from '../index'


class Index extends React.Component {
  render() {
    return (
      <MonacoEditor
        width={400}
        height={500}
        language="javascript"
        value="abc"
      ></MonacoEditor>
    )
  }
}


render(
  <Index></Index>,
  document.getElementById('container')
)