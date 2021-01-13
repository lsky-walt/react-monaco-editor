import React from 'react'

import styles from '../style/monaco-container.less'

interface MonacoContainerProps {
  width?: number,
  height?: number,
  ready: boolean,
  bordered?: boolean,
  loading?: React.ReactNode,
  bindRef: (node: HTMLDivElement | null) => void
}

class Index extends React.PureComponent<MonacoContainerProps> {
  render() {
    const {
      ready, height, width, bindRef, loading = null, bordered = true,
    } = this.props
    let className = `monaco-editor-container ${styles['monaco-editor-container']}`
    if (!bordered) {
      className += ` ${styles['no-border']}`
    }
    return (
      <div style={{ width, height }} className={className}>
        {!ready && loading}
        <div ref={bindRef} style={{ width, flex: 1, display: ready ? 'block' : 'none' }} />
      </div>
    )
  }
}

export default Index
