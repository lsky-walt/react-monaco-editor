# react-monaco-editor
 React Monaco Editor

---

[Monaco Editor](https://microsoft.github.io/monaco-editor/) for [React](https://reactjs.org/)


---

## Example

> To build the example locally, run:

```javascript

git clone git@github.com:Lsky1026/react-monaco-editor.git

cd react-monaco-editor

yarn install

yarn start

```

---

## Props

| Name | Type | Default | Description |
|:--------------|:-------------|:-------------|:---------------|
| value | string | null | editor value |
| width | number | null | editor width |
| height | number | null | editor height |
| language | string | null | editor language |
| theme | string | vs | vs, vs-dark, active4d, clouds, chrome, monokai, solarized-dark, solarized-light, [MonacoTheme](https://github.com/brijeshb42/monaco-themes) |
| options | object | null | [IEditorOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html) |
| style | object | null | editor outer container style |
| onChange | func | (value) => void | triggered when the editor value changes |
| editorDidMount | func | (editor, monaco) => void | triggered when the editor did mounted |