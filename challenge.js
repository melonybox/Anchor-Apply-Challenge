const paraString = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50."

const findMinChar = (stringInput) => {
  const stringArr = stringInput.split("")
  let stringObj = {}
  let uniqArr = []

  stringArr.forEach(char => {
    stringObj[char] === undefined ? stringObj[char] = 1 : stringObj[char]++
  })

  for (let i = 0; Object.keys(stringObj).length > i; i++) {
    let x = []
    uniqArr.push(x)
    for (let j = i; Object.keys(stringObj).length > j; j++) {
      x.push(Object.values(stringObj)[j])
    }
  }

  return console.log(uniqArr)
}

findMinChar(paraString)
