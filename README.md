# react-monaco-editor

[Monaco Editor](https://microsoft.github.io/monaco-editor/) for [React](https://reactjs.org/)


---

## Installing

```javascript

$ yarn add @react/monaco-editor

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
| width | number \| 100% | null | editor width |
| height | number \| 100% | null | editor height |
| language | string | null | editor language |
| theme | string | vs | vs, vs-dark, active4d, clouds, chrome, monokai, solarized-dark, solarized-light, [MonacoTheme](https://github.com/brijeshb42/monaco-themes) |
| options | object | null | [IEditorOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html) |
| style | object | null | editor outer container style |
| onChange | func | (value) => void | triggered when the editor value changes |
| editorDidMount | func | (editor, monaco) => void | triggered when the editor did mounted |