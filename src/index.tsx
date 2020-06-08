import React from 'react'
import MonacoEditor, { EditorProps } from './monaco/editor'
import Iframe, { StyleParams } from './components/iframe'

import styles from './style/index.less'


export interface MonacoEditorProps extends EditorProps {
  style?: object,
  onChange?: Function
}

interface MonacoEditorState extends StyleParams {
  init: boolean // init iframe
}

class Index extends React.Component<MonacoEditorProps, MonacoEditorState> {

  static displayName: string = 'MonacoEditor'

  constructor(props: MonacoEditorProps) {
    super(props)
    const { width, height } = this.props
    this.state = {
      width: this.calc(width, false),
      height: this.calc(height, false),
      init: false
    }

    this.updateStyle = this.updateStyle.bind(this)
  }

  componentDidUpdate(prevProps: MonacoEditorProps) {
    const { init, width, height } = this.state
    if (!init) return
    if (prevProps.width !== this.calc(width) || prevProps.height !== this.calc(height)) {
      this.setState({ width, height })
    }
  }

  // calc style
  calc = (num: number, flag: boolean = true) => {
    if (flag) {  // true plus
      return num + 2
    }
    return num - 2
  }

  updateStyle(style: StyleParams) {
    this.setState({
      ...style,
      init: true
    })
  }

  render() {
    const { width, height, init } = this.state
    const { width: w, height: h, ...ret } = this.props
    return (
      <div
        className={styles['container']}
        style={{ width: this.calc(width), height: this.calc(height) }}
      >
        <Iframe updateStyle={this.updateStyle}></Iframe>
        {
          init && (
            <MonacoEditor width={width} height={height} {...ret}></MonacoEditor>
          )
        }
      </div >
    )
  }
}


export default Index
