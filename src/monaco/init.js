/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import merge from 'lodash.merge'
import co from '../config'
// import makeCancelable from './makeCancelable'

class Monaco {
  constructor(config = {}) {
    this.__config = config
    // this.injectScripts = this.injectScripts.bind(this)
    this.handleMainScriptLoad = this.handleMainScriptLoad.bind(this)

    this.wrapperPromise = new Promise((res, rej) => {
      this.resolve = res
      this.reject = rej
    })

    this.isInitialized = false
  }

  config(config) {
    if (config) {
      this.__config = merge(this.__config, config)
    }

    return this
  }

  injectScripts(script) {
    document.body.appendChild(script)
  }

  handleMainScriptLoad() {
    document.removeEventListener('monaco_init', this.handleMainScriptLoad)
    this.resolve(window.monaco)
  }

  createScript(src) {
    const script = document.createElement('script')
    if (src) {
      script.src = src
    }
    return script
  }

  createMonacoLoaderScript(mainScript) {
    const loaderScript = this.createScript(this.__config.urls.monacoLoader)
    loaderScript.onload = () => this.injectScripts(mainScript)

    loaderScript.onerror = this.reject

    return loaderScript
  }

  createMainScript() {
    const mainScript = this.createScript()

    mainScript.innerHTML = `
      require.config({ paths: { 'vs': '${this.__config.urls.monacoBase}' } });
      require(['vs/editor/editor.main'], function() {
        document.dispatchEvent(new Event('monaco_init'));
      });
    `

    mainScript.onerror = this.reject

    return mainScript
  }

  init() {
    if (!this.isInitialized) {
      if (window.monaco && window.monaco.editor) {
        return new Promise((res) => res(window.monaco))
      }

      document.addEventListener('monaco_init', this.handleMainScriptLoad)

      const mainScript = this.createMainScript()

      const loaderScript = this.createMonacoLoaderScript(mainScript)

      this.injectScripts(loaderScript)
    }

    this.isInitialized = true

    return this.wrapperPromise
  }
}

export default new Monaco(co)
