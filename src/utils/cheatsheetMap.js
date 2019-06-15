export const cheatsheetMap = data => {
  const charMap = {
    ...data,
    contents: [],
  }
  let arrayCount = 0
  data.contents.forEach(content => {
    content.items.forEach((item, index) => {
      if (index % 7 === 0) {
        charMap.contents = [
          ...charMap.contents,
          { title: content.title, items: [content.items[index]] },
        ]
        arrayCount++
      } else {
        charMap.contents[arrayCount - 1].items.push(content.items[index])
      }
    })
  })
  return charMap
}
