(()=>{
//explicita with number to final
//implicita without number to final
const calcTotal = (prices: number[]) : number =>{
  let total = 0
  prices.forEach((price)=> total += price)
  return total
}

const result = calcTotal([2,4,5,6])
console.log('Result',result)

//funcion without return

const printTotal = (prices: number[]) =>{
  const rta = calcTotal(prices)
  console.log(`The total is ${rta}`)
}


printTotal([3,6,7,4,3])



})()
