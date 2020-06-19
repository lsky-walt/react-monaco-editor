import React from 'react'
import { isEmpty, isFunc, isNumber } from './utils'

import Diff, { DiffProps } from './monaco/diff'
import Iframe, { StyleParams } from './components/iframe'

import styles from './style/diff.editor.less'

interface DiffState {
  width?: number | string,
  height?: number | string
}

class Index extends React.Component<DiffProps, DiffState> {
  static displayName: string

  constructor(props: DiffProps) {
    super(props)
    const { width, height } = this.props
    this.state = {
      width,
      height,
    }

    this.updateContainer = this.updateContainer.bind(this)
    this.editorDidMount = this.editorDidMount.bind(this)
  }

  updateContainer(obj: StyleParams) {
    if (isEmpty(obj)) {
      return
    }
    const { width, height } = obj
    this.setState({ width, height })
  }


  editorDidMount(
    original: (value: string) => void,
    modified: (value: string) => void,
    editor: any,
  ) {
    const { editorDidMount = () => { } } = this.props
    const { width, height } = this.state
    if (editor) editor.layout({ width, height })

    if (isFunc(editorDidMount)) editorDidMount(original, modified, editor)
  }


  render() {
    const {
      width: w, height: h, editorDidMount, ...others
    } = this.props
    const { width, height } = this.state
    return (
      <div
        className={styles['diff-container']}
        style={{ width, height }}
      >
        <Iframe updateStyle={this.updateContainer} />
        <Diff
          {...others}
          width={width}
          height={height}
          editorDidMount={this.editorDidMount}
        />
      </div>
    )
  }
}


export default Index
