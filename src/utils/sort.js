export default data => {

  const sorted = data.sort((a, b) => {
    if(a.title > b.title) {
      return 1;
    } else if(a.title < b.title) {
      return -1;
    }
    return true;
  })

  return sorted;
}
