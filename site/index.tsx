import React from 'react'
import { render } from 'react-dom'
import Base from './components/base'
import Resizer from './components/for-resize'
import Diff from './components/diff'

class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Base />
        <Resizer />
        <Diff />
      </>
    )
  }
}


render(
  <Index />,
  document.getElementById('container'),
)
