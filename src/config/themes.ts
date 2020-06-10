
interface Themes {
  [propName: string]: any
}

export const themes: Themes = {
  active4d: {
    base: 'vs',
    inherit: true,
    rules: [
      {
        background: 'e2e9ff5e',
        token: 'text.html source.active4d',
      },
      {
        foreground: '000000',
        token: 'text.xml',
      },
      {
        foreground: 'af82d4',
        token: 'comment.line',
      },
      {
        foreground: 'af82d4',
        token: 'comment.block',
      },
      {
        foreground: '666666',
        token: 'string',
      },
      {
        foreground: '66ccff',
        fontStyle: 'bold',
        token: 'string.interpolated variable',
      },
      {
        foreground: 'a8017e',
        token: 'constant.numeric',
      },
      {
        foreground: '66ccff',
        fontStyle: 'bold',
        token: 'constant.other.date',
      },
      {
        foreground: '66ccff',
        fontStyle: 'bold',
        token: 'constant.other.time',
      },
      {
        foreground: 'a535ae',
        token: 'constant.language',
      },
      {
        foreground: '6392ff',
        fontStyle: 'bold',
        token: 'variable.other.local',
      },
      {
        foreground: '0053ff',
        fontStyle: 'bold',
        token: 'variable',
      },
      {
        foreground: '6988ae',
        token: 'variable.other.table-field',
      },
      {
        foreground: '006699',
        fontStyle: 'bold',
        token: 'keyword',
      },
      {
        foreground: 'ff5600',
        token: 'storage',
      },
      {
        foreground: '21439c',
        token: 'entity.name.type',
      },
      {
        foreground: '21439c',
        token: 'entity.name.function',
      },
      {
        foreground: '7a7a7a',
        token: 'meta.tag',
      },
      {
        foreground: '016cff',
        token: 'entity.name.tag',
      },
      {
        foreground: '963dff',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: '45ae34',
        fontStyle: 'bold',
        token: 'support.function',
      },
      {
        foreground: 'b7734c',
        token: 'support.constant',
      },
      {
        foreground: 'a535ae',
        token: 'support.type',
      },
      {
        foreground: 'a535ae',
        token: 'support.class',
      },
      {
        foreground: 'a535ae',
        token: 'support.variable',
      },
      {
        foreground: 'ffffff',
        background: '990000',
        token: 'invalid',
      },
      {
        foreground: 'ffffff',
        background: '656565',
        token: 'meta.diff',
      },
      {
        foreground: 'ffffff',
        background: '1b63ff',
        token: 'meta.diff.range',
      },
      {
        foreground: '000000',
        background: 'ff7880',
        token: 'markup.deleted.diff',
      },
      {
        foreground: '000000',
        background: '98ff9a',
        token: 'markup.inserted.diff',
      },
      {
        foreground: '5e5e5e',
        token: 'source.diff',
      },
    ],
    colors: {
      'editor.foreground': '#3B3B3B',
      'editor.background': '#FFFFFF',
      'editor.selectionBackground': '#BAD6FD',
      'editor.lineHighlightBackground': '#00000012',
      'editorCursor.foreground': '#000000',
      'editorWhitespace.foreground': '#BFBFBF',
    },
  },
  clouds: {
    base: 'vs',
    inherit: true,
    rules: [
      {
        foreground: 'bcc8ba',
        token: 'comment',
      },
      {
        foreground: '5d90cd',
        token: 'string',
      },
      {
        foreground: '46a609',
        token: 'constant.numeric',
      },
      {
        foreground: '39946a',
        token: 'constant.language',
      },
      {
        foreground: 'af956f',
        token: 'keyword',
      },
      {
        foreground: 'af956f',
        token: 'support.constant.property-value',
      },
      {
        foreground: 'af956f',
        token: 'constant.other.color',
      },
      {
        foreground: '96dc5f',
        token: 'keyword.other.unit',
      },
      {
        foreground: '484848',
        token: 'keyword.operator',
      },
      {
        foreground: 'c52727',
        token: 'storage',
      },
      {
        foreground: '858585',
        token: 'entity.other.inherited-class',
      },
      {
        foreground: '606060',
        token: 'entity.name.tag',
      },
      {
        foreground: 'bf78cc',
        token: 'constant.character.entity',
      },
      {
        foreground: 'bf78cc',
        token: 'support.class.js',
      },
      {
        foreground: '606060',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: 'c52727',
        token: 'meta.selector.css',
      },
      {
        foreground: 'c52727',
        token: 'entity.name.tag.css',
      },
      {
        foreground: 'c52727',
        token: 'entity.other.attribute-name.id.css',
      },
      {
        foreground: 'c52727',
        token: 'entity.other.attribute-name.class.css',
      },
      {
        foreground: '484848',
        token: 'meta.property-name.css',
      },
      {
        foreground: 'c52727',
        token: 'support.function',
      },
      {
        background: 'ff002a',
        token: 'invalid',
      },
      {
        foreground: 'c52727',
        token: 'punctuation.section.embedded',
      },
      {
        foreground: '606060',
        token: 'punctuation.definition.tag',
      },
      {
        foreground: 'bf78cc',
        token: 'constant.other.color.rgb-value.css',
      },
      {
        foreground: 'bf78cc',
        token: 'support.constant.property-value.css',
      },
    ],
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#FFFFFF',
      'editor.selectionBackground': '#BDD5FC',
      'editor.lineHighlightBackground': '#FFFBD1',
      'editorCursor.foreground': '#000000',
      'editorWhitespace.foreground': '#BFBFBF',
    },
  },
  chrome: {
    base: 'vs',
    inherit: true,
    rules: [
      {
        foreground: 'c41a16',
        token: 'string',
      },
      {
        foreground: '1c00cf',
        token: 'constant.numeric',
      },
      {
        foreground: 'aa0d91',
        token: 'keyword',
      },
      {
        foreground: '000000',
        token: 'keyword.operator',
      },
      {
        foreground: 'aa0d91',
        token: 'constant.language',
      },
      {
        foreground: '990000',
        token: 'support.class.exception',
      },
      {
        foreground: '000000',
        token: 'entity.name.function',
      },
      {
        fontStyle: 'bold underline',
        token: 'entity.name.type',
      },
      {
        fontStyle: 'italic',
        token: 'variable.parameter',
      },
      {
        foreground: '007400',
        token: 'comment',
      },
      {
        foreground: 'ff0000',
        token: 'invalid',
      },
      {
        background: 'e71a1100',
        token: 'invalid.deprecated.trailing-whitespace',
      },
      {
        foreground: '000000',
        background: 'fafafafc',
        token: 'text source',
      },
      {
        foreground: 'aa0d91',
        token: 'meta.tag',
      },
      {
        foreground: 'aa0d91',
        token: 'declaration.tag',
      },
      {
        foreground: '000000',
        fontStyle: 'bold',
        token: 'support',
      },
      {
        foreground: 'aa0d91',
        token: 'storage',
      },
      {
        fontStyle: 'bold underline',
        token: 'entity.name.section',
      },
      {
        foreground: '000000',
        fontStyle: 'bold',
        token: 'entity.name.function.frame',
      },
      {
        foreground: '333333',
        token: 'meta.tag.preprocessor.xml',
      },
      {
        foreground: '994500',
        fontStyle: 'italic',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: '881280',
        token: 'entity.name.tag',
      },
    ],
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#FFFFFF',
      'editor.selectionBackground': '#BAD6FD',
      'editor.lineHighlightBackground': '#0000001A',
      'editorCursor.foreground': '#000000',
      'editorWhitespace.foreground': '#B3B3B3F4',
    },
  },
  monokai: {
    base: 'vs-dark',
    inherit: true,
    rules: [
      {
        foreground: '75715e',
        token: 'comment',
      },
      {
        foreground: 'e6db74',
        token: 'string',
      },
      {
        foreground: 'ae81ff',
        token: 'constant.numeric',
      },
      {
        foreground: 'ae81ff',
        token: 'constant.language',
      },
      {
        foreground: 'ae81ff',
        token: 'constant.character',
      },
      {
        foreground: 'ae81ff',
        token: 'constant.other',
      },
      {
        foreground: 'f92672',
        token: 'keyword',
      },
      {
        foreground: 'f92672',
        token: 'storage',
      },
      {
        foreground: '66d9ef',
        fontStyle: 'italic',
        token: 'storage.type',
      },
      {
        foreground: 'a6e22e',
        fontStyle: 'underline',
        token: 'entity.name.class',
      },
      {
        foreground: 'a6e22e',
        fontStyle: 'italic underline',
        token: 'entity.other.inherited-class',
      },
      {
        foreground: 'a6e22e',
        token: 'entity.name.function',
      },
      {
        foreground: 'fd971f',
        fontStyle: 'italic',
        token: 'variable.parameter',
      },
      {
        foreground: 'f92672',
        token: 'entity.name.tag',
      },
      {
        foreground: 'a6e22e',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: '66d9ef',
        token: 'support.function',
      },
      {
        foreground: '66d9ef',
        token: 'support.constant',
      },
      {
        foreground: '66d9ef',
        fontStyle: 'italic',
        token: 'support.type',
      },
      {
        foreground: '66d9ef',
        fontStyle: 'italic',
        token: 'support.class',
      },
      {
        foreground: 'f8f8f0',
        background: 'f92672',
        token: 'invalid',
      },
      {
        foreground: 'f8f8f0',
        background: 'ae81ff',
        token: 'invalid.deprecated',
      },
      {
        foreground: 'cfcfc2',
        token: 'meta.structure.dictionary.json string.quoted.double.json',
      },
      {
        foreground: '75715e',
        token: 'meta.diff',
      },
      {
        foreground: '75715e',
        token: 'meta.diff.header',
      },
      {
        foreground: 'f92672',
        token: 'markup.deleted',
      },
      {
        foreground: 'a6e22e',
        token: 'markup.inserted',
      },
      {
        foreground: 'e6db74',
        token: 'markup.changed',
      },
      {
        foreground: 'ae81ffa0',
        token: 'constant.numeric.line-number.find-in-files - match',
      },
      {
        foreground: 'e6db74',
        token: 'entity.name.filename.find-in-files',
      },
    ],
    colors: {
      'editor.foreground': '#F8F8F2',
      'editor.background': '#272822',
      'editor.selectionBackground': '#49483E',
      'editor.lineHighlightBackground': '#3E3D32',
      'editorCursor.foreground': '#F8F8F0',
      'editorWhitespace.foreground': '#3B3A32',
      'editorIndentGuide.activeBackground': '#9D550FB0',
      'editor.selectionHighlightBorder': '#222218',
    },
  },
  'solarized-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      {
        foreground: '586e75',
        token: 'comment',
      },
      {
        foreground: '2aa198',
        token: 'string',
      },
      {
        foreground: '586e75',
        token: 'string',
      },
      {
        foreground: 'dc322f',
        token: 'string.regexp',
      },
      {
        foreground: 'd33682',
        token: 'constant.numeric',
      },
      {
        foreground: '268bd2',
        token: 'variable.language',
      },
      {
        foreground: '268bd2',
        token: 'variable.other',
      },
      {
        foreground: '859900',
        token: 'keyword',
      },
      {
        foreground: '859900',
        token: 'storage',
      },
      {
        foreground: '268bd2',
        token: 'entity.name.class',
      },
      {
        foreground: '268bd2',
        token: 'entity.name.type.class',
      },
      {
        foreground: '268bd2',
        token: 'entity.name.function',
      },
      {
        foreground: '859900',
        token: 'punctuation.definition.variable',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.section.embedded.begin',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.section.embedded.end',
      },
      {
        foreground: 'b58900',
        token: 'constant.language',
      },
      {
        foreground: 'b58900',
        token: 'meta.preprocessor',
      },
      {
        foreground: 'dc322f',
        token: 'support.function.construct',
      },
      {
        foreground: 'dc322f',
        token: 'keyword.other.new',
      },
      {
        foreground: 'cb4b16',
        token: 'constant.character',
      },
      {
        foreground: 'cb4b16',
        token: 'constant.other',
      },
      {
        foreground: '268bd2',
        fontStyle: 'bold',
        token: 'entity.name.tag',
      },
      {
        foreground: '586e75',
        token: 'punctuation.definition.tag.html',
      },
      {
        foreground: '586e75',
        token: 'punctuation.definition.tag.begin',
      },
      {
        foreground: '586e75',
        token: 'punctuation.definition.tag.end',
      },
      {
        foreground: '93a1a1',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: '268bd2',
        token: 'support.function',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.separator.continuation',
      },
      {
        foreground: '859900',
        token: 'support.type',
      },
      {
        foreground: '859900',
        token: 'support.class',
      },
      {
        foreground: 'cb4b16',
        token: 'support.type.exception',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.other.special-method',
      },
      {
        foreground: '2aa198',
        token: 'string.quoted.double',
      },
      {
        foreground: '2aa198',
        token: 'string.quoted.single',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.begin',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.end',
      },
      {
        foreground: 'b58900',
        token: 'entity.name.tag.css',
      },
      {
        foreground: 'b58900',
        token: 'support.type.property-name.css',
      },
      {
        foreground: 'b58900',
        token: 'meta.property-name.css',
      },
      {
        foreground: 'dc322f',
        token: 'source.css',
      },
      {
        foreground: '586e75',
        token: 'meta.selector.css',
      },
      {
        foreground: '6c71c4',
        token: 'punctuation.section.property-list.css',
      },
      {
        foreground: '2aa198',
        token: 'meta.property-value.css constant.numeric.css',
      },
      {
        foreground: '2aa198',
        token: 'keyword.other.unit.css',
      },
      {
        foreground: '2aa198',
        token: 'constant.other.color.rgb-value.css',
      },
      {
        foreground: '2aa198',
        token: 'meta.property-value.css',
      },
      {
        foreground: 'dc322f',
        token: 'keyword.other.important.css',
      },
      {
        foreground: '2aa198',
        token: 'support.constant.color',
      },
      {
        foreground: '859900',
        token: 'entity.name.tag.css',
      },
      {
        foreground: '586e75',
        token: 'punctuation.separator.key-value.css',
      },
      {
        foreground: '586e75',
        token: 'punctuation.terminator.rule.css',
      },
      {
        foreground: '268bd2',
        token: 'entity.other.attribute-name.class.css',
      },
      {
        foreground: 'cb4b16',
        token: 'entity.other.attribute-name.pseudo-element.css',
      },
      {
        foreground: 'cb4b16',
        token: 'entity.other.attribute-name.pseudo-class.css',
      },
      {
        foreground: '268bd2',
        token: 'entity.other.attribute-name.id.css',
      },
      {
        foreground: 'b58900',
        token: 'meta.function.js',
      },
      {
        foreground: 'b58900',
        token: 'entity.name.function.js',
      },
      {
        foreground: 'b58900',
        token: 'support.function.dom.js',
      },
      {
        foreground: 'b58900',
        token: 'text.html.basic source.js.embedded.html',
      },
      {
        foreground: '268bd2',
        token: 'storage.type.function.js',
      },
      {
        foreground: '2aa198',
        token: 'constant.numeric.js',
      },
      {
        foreground: '268bd2',
        token: 'meta.brace.square.js',
      },
      {
        foreground: '268bd2',
        token: 'storage.type.js',
      },
      {
        foreground: '93a1a1',
        token: 'meta.brace.round',
      },
      {
        foreground: '93a1a1',
        token: 'punctuation.definition.parameters.begin.js',
      },
      {
        foreground: '93a1a1',
        token: 'punctuation.definition.parameters.end.js',
      },
      {
        foreground: '268bd2',
        token: 'meta.brace.curly.js',
      },
      {
        foreground: '93a1a1',
        fontStyle: 'italic',
        token: 'entity.name.tag.doctype.html',
      },
      {
        foreground: '93a1a1',
        fontStyle: 'italic',
        token: 'meta.tag.sgml.html',
      },
      {
        foreground: '93a1a1',
        fontStyle: 'italic',
        token: 'string.quoted.double.doctype.identifiers-and-DTDs.html',
      },
      {
        foreground: '839496',
        fontStyle: 'italic',
        token: 'comment.block.html',
      },
      {
        fontStyle: 'italic',
        token: 'entity.name.tag.script.html',
      },
      {
        foreground: '2aa198',
        token: 'source.css.embedded.html string.quoted.double.html',
      },
      {
        foreground: 'cb4b16',
        fontStyle: 'bold',
        token: 'text.html.ruby',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.other.html',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.any.html',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.block.any',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.inline.any',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.structure.any.html',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic source.js.embedded.html',
      },
      {
        foreground: '657b83',
        token: 'punctuation.separator.key-value.html',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic entity.other.attribute-name.html',
      },
      {
        foreground: '2aa198',
        token: 'text.html.basic meta.tag.structure.any.html punctuation.definition.string.begin.html',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.begin.html',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.end.html',
      },
      {
        foreground: '268bd2',
        fontStyle: 'bold',
        token: 'entity.name.tag.block.any.html',
      },
      {
        fontStyle: 'italic',
        token: 'source.css.embedded.html entity.name.tag.style.html',
      },
      {
        foreground: '839496',
        fontStyle: 'italic',
        token: 'source.css.embedded.html',
      },
      {
        foreground: '839496',
        fontStyle: 'italic',
        token: 'comment.block.html',
      },
      {
        foreground: '268bd2',
        token: 'punctuation.definition.variable.ruby',
      },
      {
        foreground: '657b83',
        token: 'meta.function.method.with-arguments.ruby',
      },
      {
        foreground: '2aa198',
        token: 'variable.language.ruby',
      },
      {
        foreground: '268bd2',
        token: 'entity.name.function.ruby',
      },
      {
        foreground: '859900',
        fontStyle: 'bold',
        token: 'keyword.control.ruby',
      },
      {
        foreground: '859900',
        fontStyle: 'bold',
        token: 'keyword.control.def.ruby',
      },
      {
        foreground: '859900',
        token: 'keyword.control.class.ruby',
      },
      {
        foreground: '859900',
        token: 'meta.class.ruby',
      },
      {
        foreground: 'b58900',
        token: 'entity.name.type.class.ruby',
      },
      {
        foreground: '859900',
        token: 'keyword.control.ruby',
      },
      {
        foreground: 'b58900',
        token: 'support.class.ruby',
      },
      {
        foreground: '859900',
        token: 'keyword.other.special-method.ruby',
      },
      {
        foreground: '2aa198',
        token: 'constant.language.ruby',
      },
      {
        foreground: '2aa198',
        token: 'constant.numeric.ruby',
      },
      {
        foreground: 'b58900',
        token: 'variable.other.constant.ruby',
      },
      {
        foreground: '2aa198',
        token: 'constant.other.symbol.ruby',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.section.embedded.ruby',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.begin.ruby',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.end.ruby',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.other.special-method.ruby',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.include.php',
      },
      {
        foreground: '839496',
        token: 'text.html.ruby meta.tag.inline.any.html',
      },
      {
        foreground: '2aa198',
        token: 'text.html.ruby punctuation.definition.string.begin',
      },
      {
        foreground: '2aa198',
        token: 'text.html.ruby punctuation.definition.string.end',
      },
      {
        foreground: '839496',
        token: 'punctuation.definition.string.begin',
      },
      {
        foreground: '839496',
        token: 'punctuation.definition.string.end',
      },
      {
        foreground: '839496',
        token: 'support.class.php',
      },
      {
        foreground: 'dc322f',
        token: 'keyword.operator.index-start.php',
      },
      {
        foreground: 'dc322f',
        token: 'keyword.operator.index-end.php',
      },
      {
        foreground: '586e75',
        token: 'meta.array.php',
      },
      {
        foreground: 'b58900',
        token: 'meta.array.php support.function.construct.php',
      },
      {
        foreground: 'b58900',
        token: 'meta.array.empty.php support.function.construct.php',
      },
      {
        foreground: 'b58900',
        token: 'support.function.construct.php',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.array.begin',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.array.end',
      },
      {
        foreground: '2aa198',
        token: 'constant.numeric.php',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.other.new.php',
      },
      {
        foreground: '839496',
        token: 'keyword.operator.class',
      },
      {
        foreground: '93a1a1',
        token: 'variable.other.property.php',
      },
      {
        foreground: 'b58900',
        token: 'storage.modifier.extends.php',
      },
      {
        foreground: 'b58900',
        token: 'storage.type.class.php',
      },
      {
        foreground: 'b58900',
        token: 'keyword.operator.class.php',
      },
      {
        foreground: '839496',
        token: 'punctuation.terminator.expression.php',
      },
      {
        foreground: '586e75',
        token: 'meta.other.inherited-class.php',
      },
      {
        foreground: '859900',
        token: 'storage.type.php',
      },
      {
        foreground: '93a1a1',
        token: 'entity.name.function.php',
      },
      {
        foreground: '859900',
        token: 'support.function.construct.php',
      },
      {
        foreground: '839496',
        token: 'entity.name.type.class.php',
      },
      {
        foreground: '839496',
        token: 'meta.function-call.php',
      },
      {
        foreground: '839496',
        token: 'meta.function-call.static.php',
      },
      {
        foreground: '839496',
        token: 'meta.function-call.object.php',
      },
      {
        foreground: '93a1a1',
        token: 'keyword.other.phpdoc',
      },
      {
        foreground: 'cb4b16',
        token: 'source.php.embedded.block.html',
      },
      {
        foreground: 'cb4b16',
        token: 'storage.type.function.php',
      },
      {
        foreground: '2aa198',
        token: 'constant.numeric.c',
      },
      {
        foreground: 'cb4b16',
        token: 'meta.preprocessor.c.include',
      },
      {
        foreground: 'cb4b16',
        token: 'meta.preprocessor.macro.c',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.define.c',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.include.c',
      },
      {
        foreground: 'cb4b16',
        token: 'entity.name.function.preprocessor.c',
      },
      {
        foreground: '2aa198',
        token: 'meta.preprocessor.c.include string.quoted.other.lt-gt.include.c',
      },
      {
        foreground: '2aa198',
        token: 'meta.preprocessor.c.include punctuation.definition.string.begin.c',
      },
      {
        foreground: '2aa198',
        token: 'meta.preprocessor.c.include punctuation.definition.string.end.c',
      },
      {
        foreground: '586e75',
        token: 'support.function.C99.c',
      },
      {
        foreground: '586e75',
        token: 'support.function.any-method.c',
      },
      {
        foreground: '586e75',
        token: 'entity.name.function.c',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.begin.c',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.end.c',
      },
      {
        foreground: 'b58900',
        token: 'storage.type.c',
      },
      {
        foreground: 'e0eddd',
        background: 'b58900',
        fontStyle: 'italic',
        token: 'meta.diff',
      },
      {
        foreground: 'e0eddd',
        background: 'b58900',
        fontStyle: 'italic',
        token: 'meta.diff.header',
      },
      {
        foreground: 'dc322f',
        background: 'eee8d5',
        token: 'markup.deleted',
      },
      {
        foreground: 'cb4b16',
        background: 'eee8d5',
        token: 'markup.changed',
      },
      {
        foreground: '219186',
        background: 'eee8d5',
        token: 'markup.inserted',
      },
      {
        foreground: 'e0eddd',
        background: 'b58900',
        token: 'text.html.markdown meta.dummy.line-break',
      },
      {
        foreground: '2aa198',
        token: 'text.html.markdown markup.raw.inline',
      },
      {
        foreground: '2aa198',
        token: 'text.restructuredtext markup.raw',
      },
      {
        foreground: 'dc322f',
        token: 'other.package.exclude',
      },
      {
        foreground: 'dc322f',
        token: 'other.remove',
      },
      {
        foreground: '2aa198',
        token: 'other.add',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.section.group.tex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.arguments.begin.latex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.arguments.end.latex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.arguments.latex',
      },
      {
        foreground: 'b58900',
        token: 'meta.group.braces.tex',
      },
      {
        foreground: 'b58900',
        token: 'string.other.math.tex',
      },
      {
        foreground: 'cb4b16',
        token: 'variable.parameter.function.latex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.constant.math.tex',
      },
      {
        foreground: '2aa198',
        token: 'text.tex.latex constant.other.math.tex',
      },
      {
        foreground: '2aa198',
        token: 'constant.other.general.math.tex',
      },
      {
        foreground: '2aa198',
        token: 'constant.other.general.math.tex',
      },
      {
        foreground: '2aa198',
        token: 'constant.character.math.tex',
      },
      {
        foreground: 'b58900',
        token: 'string.other.math.tex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.begin.tex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.end.tex',
      },
      {
        foreground: '2aa198',
        token: 'keyword.control.label.latex',
      },
      {
        foreground: '2aa198',
        token: 'text.tex.latex constant.other.general.math.tex',
      },
      {
        foreground: 'dc322f',
        token: 'variable.parameter.definition.label.latex',
      },
      {
        foreground: '859900',
        token: 'support.function.be.latex',
      },
      {
        foreground: 'cb4b16',
        token: 'support.function.section.latex',
      },
      {
        foreground: '2aa198',
        token: 'support.function.general.tex',
      },
      {
        fontStyle: 'italic',
        token: 'punctuation.definition.comment.tex',
      },
      {
        fontStyle: 'italic',
        token: 'comment.line.percentage.tex',
      },
      {
        foreground: '2aa198',
        token: 'keyword.control.ref.latex',
      },
      {
        foreground: '586e75',
        token: 'string.quoted.double.block.python',
      },
      {
        foreground: '859900',
        token: 'storage.type.class.python',
      },
      {
        foreground: '859900',
        token: 'storage.type.function.python',
      },
      {
        foreground: '859900',
        token: 'storage.modifier.global.python',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.python',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.from.python',
      },
      {
        foreground: 'b58900',
        token: 'support.type.exception.python',
      },
      {
        foreground: '859900',
        token: 'support.function.builtin.shell',
      },
      {
        foreground: 'cb4b16',
        token: 'variable.other.normal.shell',
      },
      {
        foreground: '268bd2',
        token: 'source.shell',
      },
      {
        foreground: '586e75',
        token: 'meta.scope.for-in-loop.shell',
      },
      {
        foreground: '586e75',
        token: 'variable.other.loop.shell',
      },
      {
        foreground: '859900',
        token: 'punctuation.definition.string.end.shell',
      },
      {
        foreground: '859900',
        token: 'punctuation.definition.string.begin.shell',
      },
      {
        foreground: '586e75',
        token: 'meta.scope.case-block.shell',
      },
      {
        foreground: '586e75',
        token: 'meta.scope.case-body.shell',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.logical-expression.shell',
      },
      {
        fontStyle: 'italic',
        token: 'comment.line.number-sign.shell',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.other.import.java',
      },
      {
        foreground: '586e75',
        token: 'storage.modifier.import.java',
      },
      {
        foreground: 'b58900',
        token: 'meta.class.java storage.modifier.java',
      },
      {
        foreground: '586e75',
        token: 'source.java comment.block',
      },
      {
        foreground: '586e75',
        token: 'comment.block meta.documentation.tag.param.javadoc keyword.other.documentation.param.javadoc',
      },
      {
        foreground: 'b58900',
        token: 'punctuation.definition.variable.perl',
      },
      {
        foreground: 'b58900',
        token: 'variable.other.readwrite.global.perl',
      },
      {
        foreground: 'b58900',
        token: 'variable.other.predefined.perl',
      },
      {
        foreground: 'b58900',
        token: 'keyword.operator.comparison.perl',
      },
      {
        foreground: '859900',
        token: 'support.function.perl',
      },
      {
        foreground: '586e75',
        fontStyle: 'italic',
        token: 'comment.line.number-sign.perl',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.begin.perl',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.end.perl',
      },
      {
        foreground: 'dc322f',
        token: 'constant.character.escape.perl',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.1.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.2.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.3.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.4.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.5.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.6.markdown',
      },
      {
        foreground: '839496',
        fontStyle: 'bold',
        token: 'markup.bold.markdown',
      },
      {
        foreground: '839496',
        fontStyle: 'italic',
        token: 'markup.italic.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.bold.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.italic.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.raw.markdown',
      },
      {
        foreground: 'b58900',
        token: 'markup.list.unnumbered.markdown',
      },
      {
        foreground: '859900',
        token: 'markup.list.numbered.markdown',
      },
      {
        foreground: '2aa198',
        token: 'markup.raw.block.markdown',
      },
      {
        foreground: '2aa198',
        token: 'markup.raw.inline.markdown',
      },
      {
        foreground: '6c71c4',
        token: 'markup.quote.markdown',
      },
      {
        foreground: '6c71c4',
        token: 'punctuation.definition.blockquote.markdown',
      },
      {
        foreground: 'd33682',
        token: 'meta.separator.markdown',
      },
      {
        foreground: '586e75',
        fontStyle: 'italic',
        token: 'meta.image.inline.markdown',
      },
      {
        foreground: '586e75',
        fontStyle: 'italic',
        token: 'markup.underline.link.markdown',
      },
      {
        foreground: '93a1a1',
        token: 'string.other.link.title.markdown',
      },
      {
        foreground: '93a1a1',
        token: 'string.other.link.description.markdown',
      },
      {
        foreground: '586e75',
        token: 'punctuation.definition.link.markdown',
      },
      {
        foreground: '586e75',
        token: 'punctuation.definition.metadata.markdown',
      },
      {
        foreground: '586e75',
        token: 'punctuation.definition.string.begin.markdown',
      },
      {
        foreground: '586e75',
        token: 'punctuation.definition.string.end.markdown',
      },
      {
        foreground: '586e75',
        token: 'punctuation.definition.constant.markdown',
      },
      {
        foreground: 'eee8d5',
        background: 'eee8d5',
        token: 'sublimelinter.notes',
      },
      {
        foreground: '93a1a1',
        background: '93a1a1',
        token: 'sublimelinter.outline.illegal',
      },
      {
        background: 'dc322f',
        token: 'sublimelinter.underline.illegal',
      },
      {
        foreground: '839496',
        background: '839496',
        token: 'sublimelinter.outline.warning',
      },
      {
        background: 'b58900',
        token: 'sublimelinter.underline.warning',
      },
      {
        foreground: '657b83',
        background: '657b83',
        token: 'sublimelinter.outline.violation',
      },
      {
        background: 'cb4b16',
        token: 'sublimelinter.underline.violation',
      },
    ],
    colors: {
      'editor.foreground': '#839496',
      'editor.background': '#002B36',
      'editor.selectionBackground': '#073642',
      'editor.lineHighlightBackground': '#073642',
      'editorCursor.foreground': '#819090',
      'editorWhitespace.foreground': '#073642',
    },
  },
  'solarized-light': {
    base: 'vs',
    inherit: true,
    rules: [
      {
        foreground: '93a1a1',
        token: 'comment',
      },
      {
        foreground: '2aa198',
        token: 'string',
      },
      {
        foreground: '586e75',
        token: 'string',
      },
      {
        foreground: 'dc322f',
        token: 'string.regexp',
      },
      {
        foreground: 'd33682',
        token: 'constant.numeric',
      },
      {
        foreground: '268bd2',
        token: 'variable.language',
      },
      {
        foreground: '268bd2',
        token: 'variable.other',
      },
      {
        foreground: '859900',
        token: 'keyword',
      },
      {
        foreground: '073642',
        fontStyle: 'bold',
        token: 'storage',
      },
      {
        foreground: '268bd2',
        token: 'entity.name.class',
      },
      {
        foreground: '268bd2',
        token: 'entity.name.type.class',
      },
      {
        foreground: '268bd2',
        token: 'entity.name.function',
      },
      {
        foreground: '859900',
        token: 'punctuation.definition.variable',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.section.embedded.begin',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.section.embedded.end',
      },
      {
        foreground: 'b58900',
        token: 'constant.language',
      },
      {
        foreground: 'b58900',
        token: 'meta.preprocessor',
      },
      {
        foreground: 'dc322f',
        token: 'support.function.construct',
      },
      {
        foreground: 'dc322f',
        token: 'keyword.other.new',
      },
      {
        foreground: 'cb4b16',
        token: 'constant.character',
      },
      {
        foreground: 'cb4b16',
        token: 'constant.other',
      },
      {
        foreground: '268bd2',
        fontStyle: 'bold',
        token: 'entity.name.tag',
      },
      {
        foreground: '93a1a1',
        token: 'punctuation.definition.tag.html',
      },
      {
        foreground: '93a1a1',
        token: 'punctuation.definition.tag.begin',
      },
      {
        foreground: '93a1a1',
        token: 'punctuation.definition.tag.end',
      },
      {
        foreground: '93a1a1',
        token: 'entity.other.attribute-name',
      },
      {
        foreground: '268bd2',
        token: 'support.function',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.separator.continuation',
      },
      {
        foreground: '859900',
        token: 'support.type',
      },
      {
        foreground: '859900',
        token: 'support.class',
      },
      {
        foreground: 'cb4b16',
        token: 'support.type.exception',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.other.special-method',
      },
      {
        foreground: '2aa198',
        token: 'string.quoted.double',
      },
      {
        foreground: '2aa198',
        token: 'string.quoted.single',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.begin',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.end',
      },
      {
        foreground: 'b58900',
        token: 'entity.name.tag.css',
      },
      {
        foreground: 'b58900',
        token: 'support.type.property-name.css',
      },
      {
        foreground: 'b58900',
        token: 'meta.property-name.css',
      },
      {
        foreground: 'dc322f',
        token: 'source.css',
      },
      {
        foreground: '586e75',
        token: 'meta.selector.css',
      },
      {
        foreground: '6c71c4',
        token: 'punctuation.section.property-list.css',
      },
      {
        foreground: '2aa198',
        token: 'meta.property-value.css constant.numeric.css',
      },
      {
        foreground: '2aa198',
        token: 'keyword.other.unit.css',
      },
      {
        foreground: '2aa198',
        token: 'constant.other.color.rgb-value.css',
      },
      {
        foreground: '2aa198',
        token: 'meta.property-value.css',
      },
      {
        foreground: 'dc322f',
        token: 'keyword.other.important.css',
      },
      {
        foreground: '2aa198',
        token: 'support.constant.color',
      },
      {
        foreground: '859900',
        token: 'entity.name.tag.css',
      },
      {
        foreground: '586e75',
        token: 'punctuation.separator.key-value.css',
      },
      {
        foreground: '586e75',
        token: 'punctuation.terminator.rule.css',
      },
      {
        foreground: '268bd2',
        token: 'entity.other.attribute-name.class.css',
      },
      {
        foreground: 'cb4b16',
        token: 'entity.other.attribute-name.pseudo-element.css',
      },
      {
        foreground: 'cb4b16',
        token: 'entity.other.attribute-name.pseudo-class.css',
      },
      {
        foreground: '268bd2',
        token: 'entity.other.attribute-name.id.css',
      },
      {
        foreground: 'b58900',
        token: 'meta.function.js',
      },
      {
        foreground: 'b58900',
        token: 'entity.name.function.js',
      },
      {
        foreground: 'b58900',
        token: 'support.function.dom.js',
      },
      {
        foreground: 'b58900',
        token: 'text.html.basic source.js.embedded.html',
      },
      {
        foreground: '268bd2',
        token: 'storage.type.function.js',
      },
      {
        foreground: '2aa198',
        token: 'constant.numeric.js',
      },
      {
        foreground: '268bd2',
        token: 'meta.brace.square.js',
      },
      {
        foreground: '268bd2',
        token: 'storage.type.js',
      },
      {
        foreground: '93a1a1',
        token: 'meta.brace.round',
      },
      {
        foreground: '93a1a1',
        token: 'punctuation.definition.parameters.begin.js',
      },
      {
        foreground: '93a1a1',
        token: 'punctuation.definition.parameters.end.js',
      },
      {
        foreground: '268bd2',
        token: 'meta.brace.curly.js',
      },
      {
        foreground: '93a1a1',
        fontStyle: 'italic',
        token: 'entity.name.tag.doctype.html',
      },
      {
        foreground: '93a1a1',
        fontStyle: 'italic',
        token: 'meta.tag.sgml.html',
      },
      {
        foreground: '93a1a1',
        fontStyle: 'italic',
        token: 'string.quoted.double.doctype.identifiers-and-DTDs.html',
      },
      {
        foreground: '839496',
        fontStyle: 'italic',
        token: 'comment.block.html',
      },
      {
        fontStyle: 'italic',
        token: 'entity.name.tag.script.html',
      },
      {
        foreground: '2aa198',
        token: 'source.css.embedded.html string.quoted.double.html',
      },
      {
        foreground: 'cb4b16',
        fontStyle: 'bold',
        token: 'text.html.ruby',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.other.html',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.any.html',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.block.any',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.inline.any',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic meta.tag.structure.any.html',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic source.js.embedded.html',
      },
      {
        foreground: '657b83',
        token: 'punctuation.separator.key-value.html',
      },
      {
        foreground: '657b83',
        token: 'text.html.basic entity.other.attribute-name.html',
      },
      {
        foreground: '2aa198',
        token: 'text.html.basic meta.tag.structure.any.html punctuation.definition.string.begin.html',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.begin.html',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.end.html',
      },
      {
        foreground: '268bd2',
        fontStyle: 'bold',
        token: 'entity.name.tag.block.any.html',
      },
      {
        fontStyle: 'italic',
        token: 'source.css.embedded.html entity.name.tag.style.html',
      },
      {
        foreground: '839496',
        fontStyle: 'italic',
        token: 'source.css.embedded.html',
      },
      {
        foreground: '839496',
        fontStyle: 'italic',
        token: 'comment.block.html',
      },
      {
        foreground: '268bd2',
        token: 'punctuation.definition.variable.ruby',
      },
      {
        foreground: '657b83',
        token: 'meta.function.method.with-arguments.ruby',
      },
      {
        foreground: '2aa198',
        token: 'variable.language.ruby',
      },
      {
        foreground: '268bd2',
        token: 'entity.name.function.ruby',
      },
      {
        foreground: '859900',
        fontStyle: 'bold',
        token: 'keyword.control.ruby',
      },
      {
        foreground: '859900',
        fontStyle: 'bold',
        token: 'keyword.control.def.ruby',
      },
      {
        foreground: '859900',
        token: 'keyword.control.class.ruby',
      },
      {
        foreground: '859900',
        token: 'meta.class.ruby',
      },
      {
        foreground: 'b58900',
        token: 'entity.name.type.class.ruby',
      },
      {
        foreground: '859900',
        token: 'keyword.control.ruby',
      },
      {
        foreground: 'b58900',
        token: 'support.class.ruby',
      },
      {
        foreground: '859900',
        token: 'keyword.other.special-method.ruby',
      },
      {
        foreground: '2aa198',
        token: 'constant.language.ruby',
      },
      {
        foreground: '2aa198',
        token: 'constant.numeric.ruby',
      },
      {
        foreground: 'b58900',
        token: 'variable.other.constant.ruby',
      },
      {
        foreground: '2aa198',
        token: 'constant.other.symbol.ruby',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.section.embedded.ruby',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.begin.ruby',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.end.ruby',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.other.special-method.ruby',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.include.php',
      },
      {
        foreground: '839496',
        token: 'text.html.ruby meta.tag.inline.any.html',
      },
      {
        foreground: '2aa198',
        token: 'text.html.ruby punctuation.definition.string.begin',
      },
      {
        foreground: '2aa198',
        token: 'text.html.ruby punctuation.definition.string.end',
      },
      {
        foreground: '839496',
        token: 'punctuation.definition.string.begin',
      },
      {
        foreground: '839496',
        token: 'punctuation.definition.string.end',
      },
      {
        foreground: 'dc322f',
        token: 'keyword.operator.index-start.php',
      },
      {
        foreground: 'dc322f',
        token: 'keyword.operator.index-end.php',
      },
      {
        foreground: '586e75',
        token: 'meta.array.php',
      },
      {
        foreground: 'b58900',
        token: 'meta.array.php support.function.construct.php',
      },
      {
        foreground: 'b58900',
        token: 'meta.array.empty.php support.function.construct.php',
      },
      {
        foreground: 'b58900',
        token: 'support.function.construct.php',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.array.begin',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.array.end',
      },
      {
        foreground: '2aa198',
        token: 'constant.numeric.php',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.other.new.php',
      },
      {
        foreground: '586e75',
        token: 'support.class.php',
      },
      {
        foreground: '586e75',
        token: 'keyword.operator.class',
      },
      {
        foreground: '93a1a1',
        token: 'variable.other.property.php',
      },
      {
        foreground: 'b58900',
        token: 'storage.modifier.extends.php',
      },
      {
        foreground: 'b58900',
        token: 'storage.type.class.php',
      },
      {
        foreground: 'b58900',
        token: 'keyword.operator.class.php',
      },
      {
        foreground: '586e75',
        token: 'meta.other.inherited-class.php',
      },
      {
        foreground: '859900',
        token: 'storage.type.php',
      },
      {
        foreground: '93a1a1',
        token: 'entity.name.function.php',
      },
      {
        foreground: '859900',
        token: 'support.function.construct.php',
      },
      {
        foreground: '839496',
        token: 'entity.name.type.class.php',
      },
      {
        foreground: '839496',
        token: 'meta.function-call.php',
      },
      {
        foreground: '839496',
        token: 'meta.function-call.static.php',
      },
      {
        foreground: '839496',
        token: 'meta.function-call.object.php',
      },
      {
        foreground: '93a1a1',
        token: 'keyword.other.phpdoc',
      },
      {
        foreground: 'cb4b16',
        token: 'source.php.embedded.block.html',
      },
      {
        foreground: 'cb4b16',
        token: 'storage.type.function.php',
      },
      {
        foreground: '2aa198',
        token: 'constant.numeric.c',
      },
      {
        foreground: 'cb4b16',
        token: 'meta.preprocessor.c.include',
      },
      {
        foreground: 'cb4b16',
        token: 'meta.preprocessor.macro.c',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.define.c',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.include.c',
      },
      {
        foreground: 'cb4b16',
        token: 'entity.name.function.preprocessor.c',
      },
      {
        foreground: '2aa198',
        token: 'meta.preprocessor.c.include string.quoted.other.lt-gt.include.c',
      },
      {
        foreground: '2aa198',
        token: 'meta.preprocessor.c.include punctuation.definition.string.begin.c',
      },
      {
        foreground: '2aa198',
        token: 'meta.preprocessor.c.include punctuation.definition.string.end.c',
      },
      {
        foreground: '586e75',
        token: 'support.function.C99.c',
      },
      {
        foreground: '586e75',
        token: 'support.function.any-method.c',
      },
      {
        foreground: '586e75',
        token: 'entity.name.function.c',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.begin.c',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.end.c',
      },
      {
        foreground: 'b58900',
        token: 'storage.type.c',
      },
      {
        foreground: 'e0eddd',
        background: 'b58900',
        fontStyle: 'italic',
        token: 'meta.diff',
      },
      {
        foreground: 'e0eddd',
        background: 'b58900',
        fontStyle: 'italic',
        token: 'meta.diff.header',
      },
      {
        foreground: 'dc322f',
        background: 'eee8d5',
        token: 'markup.deleted',
      },
      {
        foreground: 'cb4b16',
        background: 'eee8d5',
        token: 'markup.changed',
      },
      {
        foreground: '219186',
        background: 'eee8d5',
        token: 'markup.inserted',
      },
      {
        foreground: 'e0eddd',
        background: 'a57706',
        token: 'text.html.markdown meta.dummy.line-break',
      },
      {
        foreground: '2aa198',
        token: 'text.html.markdown markup.raw.inline',
      },
      {
        foreground: '2aa198',
        token: 'text.restructuredtext markup.raw',
      },
      {
        foreground: 'dc322f',
        token: 'other.package.exclude',
      },
      {
        foreground: 'dc322f',
        token: 'other.remove',
      },
      {
        foreground: '2aa198',
        token: 'other.add',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.section.group.tex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.arguments.begin.latex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.arguments.end.latex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.arguments.latex',
      },
      {
        foreground: 'b58900',
        token: 'meta.group.braces.tex',
      },
      {
        foreground: 'b58900',
        token: 'string.other.math.tex',
      },
      {
        foreground: 'cb4b16',
        token: 'variable.parameter.function.latex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.constant.math.tex',
      },
      {
        foreground: '2aa198',
        token: 'text.tex.latex constant.other.math.tex',
      },
      {
        foreground: '2aa198',
        token: 'constant.other.general.math.tex',
      },
      {
        foreground: '2aa198',
        token: 'constant.other.general.math.tex',
      },
      {
        foreground: '2aa198',
        token: 'constant.character.math.tex',
      },
      {
        foreground: 'b58900',
        token: 'string.other.math.tex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.begin.tex',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.end.tex',
      },
      {
        foreground: '2aa198',
        token: 'keyword.control.label.latex',
      },
      {
        foreground: '2aa198',
        token: 'text.tex.latex constant.other.general.math.tex',
      },
      {
        foreground: 'dc322f',
        token: 'variable.parameter.definition.label.latex',
      },
      {
        foreground: '859900',
        token: 'support.function.be.latex',
      },
      {
        foreground: 'cb4b16',
        token: 'support.function.section.latex',
      },
      {
        foreground: '2aa198',
        token: 'support.function.general.tex',
      },
      {
        fontStyle: 'italic',
        token: 'punctuation.definition.comment.tex',
      },
      {
        fontStyle: 'italic',
        token: 'comment.line.percentage.tex',
      },
      {
        foreground: '2aa198',
        token: 'keyword.control.ref.latex',
      },
      {
        foreground: '586e75',
        token: 'string.quoted.double.block.python',
      },
      {
        foreground: '859900',
        token: 'storage.type.class.python',
      },
      {
        foreground: '859900',
        token: 'storage.type.function.python',
      },
      {
        foreground: '859900',
        token: 'storage.modifier.global.python',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.python',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.control.import.from.python',
      },
      {
        foreground: 'b58900',
        token: 'support.type.exception.python',
      },
      {
        foreground: '859900',
        token: 'support.function.builtin.shell',
      },
      {
        foreground: 'cb4b16',
        token: 'variable.other.normal.shell',
      },
      {
        foreground: '268bd2',
        token: 'source.shell',
      },
      {
        foreground: '586e75',
        token: 'meta.scope.for-in-loop.shell',
      },
      {
        foreground: '586e75',
        token: 'variable.other.loop.shell',
      },
      {
        foreground: '859900',
        token: 'punctuation.definition.string.end.shell',
      },
      {
        foreground: '859900',
        token: 'punctuation.definition.string.begin.shell',
      },
      {
        foreground: '586e75',
        token: 'meta.scope.case-block.shell',
      },
      {
        foreground: '586e75',
        token: 'meta.scope.case-body.shell',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.logical-expression.shell',
      },
      {
        fontStyle: 'italic',
        token: 'comment.line.number-sign.shell',
      },
      {
        foreground: 'cb4b16',
        token: 'keyword.other.import.java',
      },
      {
        foreground: '586e75',
        token: 'storage.modifier.import.java',
      },
      {
        foreground: 'b58900',
        token: 'meta.class.java storage.modifier.java',
      },
      {
        foreground: '586e75',
        token: 'source.java comment.block',
      },
      {
        foreground: '586e75',
        token: 'comment.block meta.documentation.tag.param.javadoc keyword.other.documentation.param.javadoc',
      },
      {
        foreground: 'b58900',
        token: 'punctuation.definition.variable.perl',
      },
      {
        foreground: 'b58900',
        token: 'variable.other.readwrite.global.perl',
      },
      {
        foreground: 'b58900',
        token: 'variable.other.predefined.perl',
      },
      {
        foreground: 'b58900',
        token: 'keyword.operator.comparison.perl',
      },
      {
        foreground: '859900',
        token: 'support.function.perl',
      },
      {
        foreground: '586e75',
        fontStyle: 'italic',
        token: 'comment.line.number-sign.perl',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.begin.perl',
      },
      {
        foreground: '2aa198',
        token: 'punctuation.definition.string.end.perl',
      },
      {
        foreground: 'dc322f',
        token: 'constant.character.escape.perl',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.1.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.2.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.3.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.4.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.5.markdown',
      },
      {
        foreground: '268bd2',
        token: 'markup.heading.6.markdown',
      },
      {
        foreground: '586e75',
        fontStyle: 'bold',
        token: 'markup.bold.markdown',
      },
      {
        foreground: '586e75',
        fontStyle: 'italic',
        token: 'markup.italic.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.bold.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.italic.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.raw.markdown',
      },
      {
        foreground: 'b58900',
        token: 'markup.list.unnumbered.markdown',
      },
      {
        foreground: '859900',
        token: 'markup.list.numbered.markdown',
      },
      {
        foreground: '2aa198',
        token: 'markup.raw.block.markdown',
      },
      {
        foreground: '2aa198',
        token: 'markup.raw.inline.markdown',
      },
      {
        foreground: '6c71c4',
        token: 'markup.quote.markdown',
      },
      {
        foreground: '6c71c4',
        token: 'punctuation.definition.blockquote.markdown',
      },
      {
        foreground: 'd33682',
        token: 'meta.separator.markdown',
      },
      {
        foreground: '839496',
        token: 'markup.underline.link.markdown',
      },
      {
        foreground: '839496',
        token: 'markup.underline.link.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'meta.link.inet.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'meta.link.email.lt-gt.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.begin.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.string.end.markdown',
      },
      {
        foreground: 'dc322f',
        token: 'punctuation.definition.link.markdown',
      },
      {
        foreground: '6a8187',
        token: 'text.plain',
      },
      {
        foreground: 'eee8d5',
        background: 'eee8d5',
        token: 'sublimelinter.notes',
      },
      {
        foreground: '93a1a1',
        background: '93a1a1',
        token: 'sublimelinter.outline.illegal',
      },
      {
        background: 'dc322f',
        token: 'sublimelinter.underline.illegal',
      },
      {
        foreground: '839496',
        background: '839496',
        token: 'sublimelinter.outline.warning',
      },
      {
        background: 'b58900',
        token: 'sublimelinter.underline.warning',
      },
      {
        foreground: '657b83',
        background: '657b83',
        token: 'sublimelinter.outline.violation',
      },
      {
        background: 'cb4b16',
        token: 'sublimelinter.underline.violation',
      },
    ],
    colors: {
      'editor.foreground': '#586E75',
      'editor.background': '#FDF6E3',
      'editor.selectionBackground': '#EEE8D5',
      'editor.lineHighlightBackground': '#EEE8D5',
      'editorCursor.foreground': '#000000',
      'editorWhitespace.foreground': '#EAE3C9',
    },
  },
}
