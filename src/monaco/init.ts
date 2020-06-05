import merge from 'lodash.merge'
import { monacoLoader, monaco } from '../config'

declare global {
  interface Window {
    monaco?: any
  }
}

const noop = () => { }

interface Config {
  monaco: string,
  monacoLoader: string
}

class Monaco {
  private __config: Config
  public wrapperPromise: Promise<any>
  public resolve: Function
  public reject: Function
  private isInitialized: boolean

  constructor(config: Config) {
    this.__config = config
    // this.injectScripts = this.injectScripts.bind(this)
    this.handleMainScriptLoad = this.handleMainScriptLoad.bind(this)

    this.reject = noop
    this.resolve = noop

    this.wrapperPromise = new Promise((res, rej) => {
      this.resolve = res
      this.reject = rej
    })

    this.isInitialized = false
  }

  config(config: Config) {
    if (config) {
      this.__config = merge(this.__config, config)
    }

    return this
  }

  injectScripts(script: HTMLScriptElement) {
    document.body.appendChild(script)
  }

  handleMainScriptLoad() {
    document.removeEventListener('monaco_init', this.handleMainScriptLoad)
    this.resolve(window.monaco)
  }

  createScript(src?: string): any {
    const script: any = document.createElement('script')
    if (src) {
      script.src = src
    }
    return script
  }

  createMonacoLoaderScript(mainScript: HTMLScriptElement) {
    const loaderScript = this.createScript(this.__config.monacoLoader)
    loaderScript.onload = () => this.injectScripts(mainScript)

    loaderScript.onerror = this.reject

    return loaderScript
  }

  createMainScript(): HTMLScriptElement {
    const mainScript: any = this.createScript()

    mainScript.innerHTML = `
      require.config({ paths: { 'vs': '${this.__config.monaco}' } });
      require(['vs/editor/editor.main'], function() {
        document.dispatchEvent(new Event('monaco_init'));
      });
    `

    mainScript.onerror = this.reject

    return mainScript
  }

  init(): Promise<any> {
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

export default new Monaco({ monaco, monacoLoader })
