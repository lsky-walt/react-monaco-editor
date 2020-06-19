import React from 'react'
import { DiffEditor } from '../../src'
import { diffExamples } from '../example'


class Index extends React.PureComponent {
  render() {
    return (
      <DiffEditor
        width={600}
        height={400}
        original={diffExamples.original}
        modified={diffExamples.modified}
        language="markdown"
      />
    )
  }
}


export default Index
