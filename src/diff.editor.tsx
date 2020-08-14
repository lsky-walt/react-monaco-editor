import React from 'react'
import { AutoSizer, Size } from 'react-virtualized/dist/commonjs/AutoSizer'
import { isEmpty, isFunc } from './utils'

import Diff, { DiffProps } from './monaco/diff'

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

  updateContainer(obj: Size) {
    const { width: w, height: h } = this.state
    if (isEmpty(obj)) {
      return
    }
    const { width, height } = obj
    if (width === w && height === h) return
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
    return (
      <div
        className={styles['diff-container']}
        style={{ width: w, height: h }}
      >
        <AutoSizer>
          {({ width, height }) => {
            if (width === 0 || height === 0) return null
            this.updateContainer({ width, height })
            return (
              <Diff
                {...others}
                width={width}
                height={height}
                editorDidMount={this.editorDidMount}
              />
            )
          }}
        </AutoSizer>
      </div>
    )
  }
}


export default Index
