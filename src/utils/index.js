// 判断模板数据类型
export function isType(type) {
  return (obj) => Object.prototype.toString.call(obj) === `[object ${type}]`
}


export const isArray = isType('Array')

export const isObject = isType('Object')

export const isNumber = isType('Number')

export const isString = isType('String')

export const isFunc = isType('Function')


export function isEmpty(data) {
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
