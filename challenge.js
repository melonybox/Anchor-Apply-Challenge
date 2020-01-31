const paraString = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50."

const findMinChar = (stringInput) => {
  const stringArr = stringInput.split("")
  let stringObj = []

  stringArr.forEach(char => {
    stringObj[char] === undefined ? stringObj[char] = 1 : stringObj[char]++
  })

  debugger

  return Object.keys(stringObj).length
}

console.log(findMinChar(paraString))
