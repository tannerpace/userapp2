import dayjs from "dayjs"
import { camelize, singularize } from "inflection"
import { forOwn, isEmpty, isPlainObject } from "lodash"

export let records = {}
export let models = {}

const relationship = (key, type, modelName, data) => {
  const relationship = type
  if (!modelName) {
    modelName = singularize(key)
  }
  const Record = records[camelize(modelName, false)]

  switch (relationship) {
    case "hasMany":
      return data.map((d) => new Record(models[modelName], d))
    case "hasOne":
      return new Record(models[modelName], data)
    default:
      return data
  }
}

export const attr = (key, type, data, record) => {
  if (typeof type === "function") {
    let val = type(data, record)
    return val
  } else if (isPlainObject(type)) {
    let newData = data
    forOwn(data, (v, k) => {
      // type is the new nested model in this case
      if (type.hasOwnProperty(k)) {
        data[k] = attr(k, type[k], v, data)
      } else {
        data[k] = v
      }
    })
    return newData
  } else if (Array.isArray(type)) {
    return relationship(key, type[0], type[1], data)
  } else {
    switch (type) {
      case "hasMany":
      case "hasOne":
      case "manyToMany":
        return relationship(key, type, undefined, data)
      case "number":
        return data === null ? 0 : parseFloat(data)
      case "string":
        return data === null ? "" : data.toString()
      case "object":
        if (typeof data === "string" && data.indexOf("{") > -1) {
          try {
            return JSON.parse(data)
          } catch (e) {
            return {}
          }
        } else if (data === null) {
          return {}
        } else {
          return data
        }
      case "array":
        if (typeof data === "string" && data.indexOf("[") > -1) {
          try {
            return JSON.parse(data)
          } catch (e) {
            return []
          }
        } else if (data === null || data === "") {
          return []
        } else {
          return data
        }
      case "boolean":
        if (typeof data === "number") {
          return Boolean(data)
        } else if (data === "true" || data === "1") {
          return true
        } else if (data === "false" || data === "0") {
          return false
        } else if (data === undefined || data === null) {
          return Boolean(data)
        } else if (typeof data === "object") {
          return isEmpty(data)
        } else {
          return data
        }
      case "date":
        if (new Date(data) !== "Invalid Date") {
          return dayjs(data)
        } else {
          console.error(`${key} is an invalid date string`)
          return data
        }
      default:
        return data
    }
  }
}
