import { sort } from './sort';

export const organizedData = data => {
  const rawData = data.map(edge => {
    const raw = require(`../../data/${edge.node.name}.json`);
    return raw;
  })
  const sortedData = sort(rawData);
  const oData = {};
  sortedData.forEach(oneData => {
    if(oData[oneData.title[0]]) {
      oData[oneData.title[0]].push(oneData);
    } else {
      oData[oneData.title[0]] = [oneData];
    }
  });
  return oData;
}
