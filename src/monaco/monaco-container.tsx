import React from 'react';
import { Spin } from 'shineout'

import styles from '../style/monaco-container.less'

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
      <div style={{ width, height, border: '1px solid #bdbdbd' }} className={styles['monaco-editor-container']}>
        {!ready && <Spin size={16}></Spin>}
        <div ref={bindRef} style={{ width, flex: 1, display: ready ? 'block' : 'none' }} />
      </div>
    )
  }
}


export default Index