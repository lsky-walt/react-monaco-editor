import React from 'react'

// eslint-disable-next-line no-unused-vars
import MonacoEditor, { EditorProps } from './monaco/editor'

import DiffEditor, { DiffProps } from './monaco/diff'

import monaco from './monaco/init'
import themeNames from './config/themes'

export interface MonacoEditorProps extends EditorProps {
  style?: object
}

export interface DiffEditorProps extends DiffProps {
  style?: object
}

export {
  DiffEditor,
  themeNames,
  monaco,
}

export default MonacoEditor
