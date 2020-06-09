import React, { ReactNode } from 'react';

import styles from '../style/monaco-container.less'

interface MonacoContainerProps {
  width: string | number,
  height: string | number,
  ready: boolean,
  loading?: ReactNode,
  bindRef: (node: HTMLDivElement | null) => void
}

class Index extends React.PureComponent<MonacoContainerProps> {
  render() {
    const { ready, height, width, bindRef, loading = null } = this.props
    return (
      <div style={{ width, height, border: '1px solid #bdbdbd' }} className={styles['monaco-editor-container']}>
        {!ready && loading}
        <div ref={bindRef} style={{ width, flex: 1, display: ready ? 'block' : 'none' }} />
      </div>
    )
  }
}


export default Index