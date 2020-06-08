import React from 'react';

import { examples } from '../example'

import { BaseProps } from './base'

import MonacoEditor from '../../src/index'
import { Resizable } from 're-resizable'


class Index extends React.Component<BaseProps> {
  constructor(props: BaseProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Monaco Editor Resize Container example</h2>
        <Resizable
          defaultSize={{
            width: 800,
            height: 500,
          }}
        >
          <MonacoEditor
            width={800}
            height={500}
            language={"go"}
            value={examples["go"]}
          ></MonacoEditor>
        </Resizable>
      </div>
    )
  }
}


export default Index