import React from 'react'
import { Button } from 'shineout'
import MonacoEditor, { EditorProps } from './monaco/editor'

import styles from './style/index.less'


export interface MonacoEditorProps extends EditorProps {
  style?: object,
  onChange?: Function
}

class Index extends React.Component<MonacoEditorProps, {}> {
  constructor(props: MonacoEditorProps) {
    super(props)
  }

  render() {
    return (
      <div className={styles['container']}>
        <Button type="primary">test</Button>
      </div>
    )
  }
}


export default Index
