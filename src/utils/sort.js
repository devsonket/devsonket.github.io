export default data => {
  const sorted = [];
  Object.keys(data).sort().forEach(oneData => {
    sorted.push({[oneData]: data[oneData]});
  })
  return sorted;
}
