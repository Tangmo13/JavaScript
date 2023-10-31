const sellProducts = [
  {
    id: 1,
    price: 2,
    sell: 5,
  }
]

const result = sellProducts.reduce(
  (total, product) => total + product.price * product.sell,
  0
)

console.log(result)