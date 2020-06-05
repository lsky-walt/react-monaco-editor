import debounce from "lodash.debounce"

// 判断模板数据类型
export function isType(type: string) {
  return (obj: any) => Object.prototype.toString.call(obj) === `[object ${type}]`
}


export const isArray = isType('Array')

export const isObject = isType('Object')

export const isNumber = isType('Number')

export const isString = isType('String')

export const isFunc = isType('Function')


export function isEmpty(data: any) {
  if (
    data === null || data === '' || data === undefined || Number.isNaN(data)
  ) {
    return true
  }
  if (isArray(data)) {
    if (data.length <= 0) {
      return true
    }
  } else if (isObject(data)) {
    if (Object.keys(data).length <= 0) {
      return true
    }
  }

  return false
}

interface StyleParams {
  width: number,
  height: number
}

export const noop = (params?: StyleParams): void => { }

const cb = (handle = (params: StyleParams): void => { }) => debounce(e => handle({
  height: e.target.innerHeight,
  width: e.target.innerWidth
}), 32)

export const addEvent = (target: Window | null, handle = (params: StyleParams): void => { }): void => {
  if (target == null) {
    return
  }

  target.addEventListener('resize', cb(handle))
}

export const removeEvent = (target: Window | null, handle = (params: StyleParams): void => { }): void => {
  if (target == null) {
    return
  }
  target.removeEventListener('resize', cb(handle))
}