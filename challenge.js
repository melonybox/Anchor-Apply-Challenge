const paraString = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50."

const findMinChar = (stringInput) => {
  const stringArr = stringInput.split("")
  let stringObj = []

  stringArr.forEach(char => {
    stringObj[char] === undefined ? stringObj[char] = 1 : stringObj[char]++
  })

  let stringSort = Object.entries(stringObj)
  let stringSorted = []

  stringSort.sort((a,b) => a[1] - b[1])

  stringSort.forEach(item => {
    stringSorted[item[0]] = item[1]
  })

  for (let i = 0; Object.keys(stringSorted).length > i; i++) {
    let x = []
    let uniqArr = []
    for (let j = i; Object.keys(stringSorted).length > j; j++) {
      x.push(Object.values(stringSorted)[j])
      uniqArr.push(Object.keys(stringSorted)[j])
      if (x.length > 1) {
        const amountTotal = x.reduce((total, num) => total + num)
        if (amountTotal >= 50) {
          return console.log(uniqArr)
        }
      }
    }
  }
}

findMinChar(paraString)
