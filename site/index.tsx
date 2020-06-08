import React from 'react';
import { render } from 'react-dom'
import MonacoEditor from '../src/index'


class Index extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px 20px' }}>
        <MonacoEditor
          width={400}
          height={500}
          language="javascript"
          value="abc"
        ></MonacoEditor>
      </div>
    )
  }
}


render(
  <Index></Index>,
  document.getElementById('container')
)