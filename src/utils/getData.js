import { sort } from "./sort"

export const getData = data => {
  const rawData = data.map(edge => {
    const raw = require(`../../data/${edge.node.name}.json`)
    return raw
  })
  return sort(rawData)
}
