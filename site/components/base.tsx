import React from 'react';

import { examples } from '../example'

// component
import { Select } from 'shineout'
import MonacoEditor from '../../src/index'

export interface BaseProps { }
interface BaseState {
  theme: string,
  language: 'javascript'
}


const languages = ['apex',
  'azcli',
  'bat',
  'c',
  'clojure',
  'coffeescript',
  'cpp',
  'csharp',
  'csp',
  'css',
  'dockerfile',
  'fsharp',
  'go',
  'graphql',
  'handlebars',
  'html',
  'ini',
  'java',
  'javascript',
  'json',
  'kotlin',
  'less',
  'lua',
  'markdown',
  'msdax',
  'mysql',
  'objective-c',
  'pascal',
  'perl',
  'pgsql',
  'php',
  'plaintext',
  'postiats',
  'powerquery',
  'powershell',
  'pug',
  'python',
  'r',
  'razor',
  'redis',
  'redshift',
  'ruby',
  'rust',
  'sb',
  'scheme',
  'scss',
  'shell',
  'sol',
  'sql',
  'st',
  'swift',
  'tcl',
  'typescript',
  'vb',
  'xml',
  'yaml']

class Index extends React.Component<BaseProps, BaseState> {
  constructor(props: BaseProps) {
    super(props)
    this.state = {
      theme: 'vs',
      language: 'javascript'
    }
  }

  render() {
    const { theme, language } = this.state
    return (
      <div style={{ padding: '20px' }}>
        <h2>Monaco Editor base example</h2>
        <div style={{
          display: 'flex',
          padding: '10px'
        }}>
          <Select
            width={200}
            data={[
              "vs",
              "vs-dark",
              "active4d",
              "clouds",
              "chrome",
              "monokai",
              "solarized-dark",
              "solarized-light",

            ]}
            keygen={d => d}
            value={theme}
            onChange={(t) => {
              this.setState({ theme: t })
            }}
          ></Select>
          <Select
            width={200}
            data={languages}
            keygen={d => d}
            value={language}
            onChange={(l) => {
              this.setState({ language: l })
            }}
          ></Select>
        </div>
        <MonacoEditor
          width={800}
          height={500}
          language={language}
          value={examples[language]}
          theme={theme}
          onChange={(value: string | null) => {
            console.log('editor value: ', value)
          }}
        ></MonacoEditor>
      </div>
    )
  }
}


export default Index