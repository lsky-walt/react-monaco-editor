import React from 'react'
import { render } from 'react-dom'
import Base from './components/base'
import Resizer from './components/for-resize'

class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Base />
        <Resizer />
      </>
    )
  }
}


render(
  <Index />,
  document.getElementById('container'),
)
