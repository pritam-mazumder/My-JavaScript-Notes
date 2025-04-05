const name = 'sova'
const repocount = 20

console.log(`${name} is a initiator. His age is ${repocount}`)

const name2 = new String('brim-stone')

console.log(name2)
console.log(typeof name2)

console.log(name2[0])
console.log(name2.__proto__)

console.log(name2.length)
console.log(name2.toUpperCase)
console.log(name2.charAt(3))
console.log(name2.indexOf('t'))

console.log(name2.substring(5,))
console.log(name2.slice(-8, 6))

const name3 = '    brim-stone      '
console.log(name3)
console.log(name3.trim())

const url = 'https://playvalorant.com/en-us/'
console.log(url.replace('en-us', 'en-gb'))

console.log(url.includes('en-us'))
console.log(url.includes('ja-jp'))

console.log(url.split('/'))