import React from 'react';

import { examples } from '../example'

import { BaseProps } from './base'

import MonacoEditor from '../../src/index'
import { Button } from 'shineout';

interface ResizeState {
  width: number,
  height: number
}


class Index extends React.Component<BaseProps, ResizeState> {
  constructor(props: BaseProps) {
    super(props)
    this.state = {
      width: 800,
      height: 600,
    }
  }

  render() {
    const { width, height } = this.state
    return (
      <div style={{ padding: '20px' }}>
        <h2>Monaco Editor Resize Container example</h2>
        <Button onClick={() => {
          const { width, height } = this.state
          this.setState({
            width: width === 600 ? 800 : 600,
            height: height === 400 ? 600 : 400
          })
        }}>change style</Button>
        <MonacoEditor
          width={width}
          height={height}
          language={"go"}
          value={examples["go"]}
        ></MonacoEditor>
      </div>
    )
  }
}


export default Index