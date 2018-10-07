const charMap = {};

export default data => {
  data.forEach(oneData => {
    charMap[oneData.title] ? charMap[oneData.title]++ : charMap[oneData.title] = 1;
  })

  return charMap;
}
