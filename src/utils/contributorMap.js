export const contributorMap = data => {
  const charMap = {}
  data.forEach(oneData => {
    const { login } = oneData.author
    if (!charMap[login]) {
      charMap[login] = {
        count: 1,
        login: oneData.author.login,
        avatar_url: oneData.author.avatar_url,
        html_url: oneData.author.html_url,
      }
    } else {
      charMap[login].count++
    }
  })
  return charMap
}
