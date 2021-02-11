const currency = [
  { name: 'USD', value: '$' },
  { name: 'EUR', value: '€' },
]

function getCurrency(name) {
  const currencyInArray = currency.filter(o => o.name === name)[0]
  if (currencyInArray) {
    return currencyInArray.value
  }
}

export function getPrice(name, price) {
  const currency = getCurrency(name)

  if (currency) {
    return `${currency}${price}`
  } else {
    return `${price} ${name}`
  }
}

export function getClassName(value) {
  if (value < 10) {
    return 'item-quantity level-low'
  }

  if (value < 20) {
    return 'item-quantity level-medium'
  }

  return 'item-quantity level-high'
}

export function getDescription(str) {
  if (str.length > 50) {
    return `${str.substring(0, 50)}_`
  }
  return str
}

// export const Listing = {
//   getPrice,
//   getClassName,
//   getDescription,
// }

export default getPrice
