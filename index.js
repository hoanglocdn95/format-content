const typeOf = value => Object.prototype.toString.call(value).slice(8, -1)

const formatTextUppercase = (string) => {
  if (typeOf(string) === 'string') return string.toUpperCase();
  return console.error('Value with wrong type pass through formatTextUppercase, expect string type')
}

export {
  formatTextUppercase,
}