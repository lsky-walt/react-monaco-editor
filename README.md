<!-- logo -->
<p align="center" style="padding-top: 40px">
  <img src="./assets/images/logo.svg?sanitize=true" width="120" alt="logo" />
</p>
<!-- logo -->

<!-- title -->
<h1 align="center" style="text-align: center">react-monaco-editor</h1>
<!-- title -->


[Monaco Editor](https://microsoft.github.io/monaco-editor/) for [React](https://reactjs.org/)


---

## Installing

```javascript

$ yarn add @lsky/react-monaco-editor

```

### Note

```javascript
// You need add alias config in webpack
alias: {
  vscode: require.resolve('monaco-languageclient/lib/vscode-compatibility'),
}
```

## Example

### Editor
```javascript

import React from 'react';
import examples from '@src/examples'
// component
import MonacoEditor from '@lsky/react-monaco-editor'


class Index extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Monaco Editor base example</h2>
        <MonacoEditor
          width={800}
          height={500}
          language="javascript"
          value={examples['javascript']}
          onChange={(value) => {
            console.log('editor value: ', value)
          }}
          editorDidMount={(editor, monaco) => {
            console.log("editor instance: ", editor)
            console.log("monaco: ", monaco)
          }}
        />
      </div>
    )
  }
}


export default Index
```


### Diff
```javascript

import React from 'react'
import { DiffEditor } from '@lsky/react-monaco-editor'
import { diffExamples } from '@src/example'


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
```


### monaco Instance
```javascript
import { monaco } from '@lsky/react-monaco-editor'

monaco.init()
  .then(monacoInstance => {
    // then
  })

```

## Development

> To build the example locally, run:

```javascript

git clone https://github.com/lsky-walt/react-monaco-editor.git

cd react-monaco-editor

yarn install

yarn start

```

---

## Monaco Editor

### Props

| Name | Type | Default | Description |
|:--------------|:-------------|:-------------|:---------------|
| value | string | null | editor value |
| width | number | null | editor width |
| height | number | null | editor height |
| language | string | null | editor language |
| theme | string | vs | vs, vs-dark, active4d, clouds, chrome, monokai, solarized-dark, solarized-light, [MonacoTheme](https://github.com/brijeshb42/monaco-themes) |
| options | object | null | [IEditorOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html) |
| loading | React.ReactNode | null | loading ?? |
| line | number | null | line number |
| modelOptions | Array<any> | null | monaco.editor.createModel(value, language, ...modelOptions) |
| bordered | boolean | true | need bordered ? |
| style | object | null | editor outer container style |
| onChange | func | (value) => void | triggered when the editor value changes |
| monacoWillMount | func | (monaco) => void | triggered when the monaco will mounted |
| editorDidMount | func | (editor, monaco) => void | triggered when the editor did mounted |


## Diff Editor

### Props

| Name | Type | Default | Description |
|:--------------|:-------------|:-------------|:---------------|
| original | string | null | diff editor original value |
| modified | string | null | diff editor modified value |
| width | number | null | diff editor width |
| height | number | null | diff editor height |
| language | string | null | diff editor language |
| originalLanguage | string | null | diff editor original language |
| modifiedLanguage | string | null | diff editor modified language |
| theme | string | vs | vs, vs-dark, active4d, clouds, chrome, monokai, solarized-dark, solarized-light, [MonacoTheme](https://github.com/brijeshb42/monaco-themes) |
| options | object | null | [IDiffEditorOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffeditorconstructionoptions.html) |
| style | object | null | diff editor outer container style |
| monacoWillMount | func | (monaco) => void | triggered when the monaco will mounted |
| editorDidMount | func | (original: MonacoEditor.editor.ITextModel, modified: MonacoEditor.editor.ITextModel, editor: MonacoEditor.editor) => void | triggered when the diff editor did mounted |
| onChange | (value: string) => void | null | modified model content change |