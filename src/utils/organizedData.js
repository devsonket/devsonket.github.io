import sort from './sort';

export default data => {
  const sortedData = sort(data);
  const organizedData = {};
  sortedData.forEach(oneData => {
    if(organizedData[oneData.title[0]]) {
      organizedData[oneData.title[0]].push(oneData);
    } else {
      organizedData[oneData.title[0]] = [oneData];
    }
  });
  return organizedData;
}
