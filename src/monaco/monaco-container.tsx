import React from 'react';
import { Spin } from 'shineout'

interface MonacoContainerProps {
  width: string | number,
  height: string | number,
  ready: boolean,
  bindRef: (node: HTMLDivElement | null) => void
}

class Index extends React.PureComponent<MonacoContainerProps> {
  render() {
    const { ready, height, width, bindRef } = this.props
    return (
      <div style={{ width, height }}>
        {!ready && <Spin size={16}></Spin>}
        <div ref={bindRef} style={{ width, display: ready ? 'block' : 'none' }} />
      </div>
    )
  }
}


export default Index