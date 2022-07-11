(()=>{
  let numbers = [1,2,3,4, 'hola']
  numbers.push(23)
  console.log(numbers)


  let mixed: (number | string | boolean)[] = [722, 'w8ww']
  mixed.push(true)

  console.log(mixed)


  let numbersToTest = [1,4,25,7,4]
  let convert = numbersToTest.map(n => n * 2)
  console.log(convert)

})()
