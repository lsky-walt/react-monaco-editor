import React from 'react'
import PropTypes from 'prop-types'


interface IndexProps {
  value: string,
  language: string,
  style?: object,
  options: object,
  width: string | number,
  height: string | number,
  editorDidMount?: Function,
  onChange?: Function
}

class Index extends React.Component<IndexProps, {}> {
  constructor(props: IndexProps) {
    super(props)
  }

  render() {
    return (
      <div />
    )
  }
}


export default Index
