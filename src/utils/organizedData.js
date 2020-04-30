import { getData } from "./getData"

export const organizedData = data => {
  const sortedData = getData(data)
  const oData = {}
  sortedData.forEach(oneData => {
    if (oData[oneData.title[0]]) {
      oData[oneData.title[0]].push(oneData)
    } else {
      oData[oneData.title[0]] = [oneData]
    }
  })
  return oData
}
