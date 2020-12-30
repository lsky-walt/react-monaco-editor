import React from 'react'

import styles from '../style/monaco-container.less'

interface MonacoContainerProps {
  width?: number,
  height?: number,
  ready: boolean,
  needBorder?: boolean,
  loading?: React.ReactNode,
  bindRef: (node: HTMLDivElement | null) => void
}

class Index extends React.PureComponent<MonacoContainerProps> {
  render() {
    const {
      ready, height, width, bindRef, loading = null, needBorder = true,
    } = this.props
    return (
      <div style={{ width, height, border: needBorder ? '1px solid #bdbdbd' : 'none' }} className={styles['monaco-editor-container']}>
        {!ready && loading}
        <div ref={bindRef} style={{ width, flex: 1, display: ready ? 'block' : 'none' }} />
      </div>
    )
  }
}

export default Index
