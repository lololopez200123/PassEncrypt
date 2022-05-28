const diccPass = {
  option1: {
    a: '4',
    b: 'B',
    e: '3',
    i: '1',
    o: '0',
    u: 'v',
    3: 'e',
    t: '7',
  },
  option2: {
    a: 'A',
    e: '3',
    l: 'i',
    o: '@',
    u: 'U',
    3: 'E',
    g: '9',
    t: '7',
    b: '6',
  },
}

const variantMatch = Boolean(Math.floor(Math.random() * 2))

export const passEncrypt = (pass) => {
  if (!pass) return
  const diccKeys = Object.keys(diccPass.option1)
  const passArray = pass.split('')

  const newArray = passArray.map((e) => {
    if (diccKeys.includes(e)) {
      if (variantMatch) {
        return diccPass.option1[e]
      }
      return diccPass.option2[e]
    }
    return e
  })
  return newArray.join('')
}