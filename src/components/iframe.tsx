import React from 'react';
import { addEvent, removeEvent } from '../utils'

import styles from '../style/iframe.less'

export interface StyleParams {
  width: number | string,
  height: number | string
}

interface IframeProps {
  updateStyle: (params: StyleParams) => void
}

class Index extends React.Component<IframeProps> {
  private iframe: HTMLIFrameElement | null
  constructor(props: IframeProps) {
    super(props)

    this.iframe = null
  }

  componentDidMount() {
    const { updateStyle } = this.props
    if (this.iframe) {
      updateStyle({
        width: this.iframe.offsetWidth,
        height: this.iframe.offsetHeight
      })

      addEvent(this.iframe.contentWindow, updateStyle)
    }
  }

  componentWillUnmount() {
    const { updateStyle } = this.props
    if (this.iframe) {
      removeEvent(this.iframe.contentWindow, updateStyle)
    }
  }

  bindRef = (node: HTMLIFrameElement) => {
    this.iframe = node
  }

  render() {
    return (
      <iframe className={styles['iframe']} ref={this.bindRef}></iframe>
    )
  }
}


export default Index