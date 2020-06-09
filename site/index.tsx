import React from 'react';
import { render } from 'react-dom'
import Base from './components/base'
import Resizer from './components/for-resize'

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Base></Base>
        <Resizer></Resizer>
      </React.Fragment>
    )
  }
}


render(
  <Index></Index>,
  document.getElementById('container')
)