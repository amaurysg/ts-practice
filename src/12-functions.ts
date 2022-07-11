(() => {

  type Size= 'XL' | 'L' | 'M' | undefined

  function createProductJson(title: string, price: number, isStock?: boolean, size?: Size ) {
    return {
      title,
      price,
      isStock,
      size
    };
  }


  const prod1 = createProductJson('Mac', 20000, true)
  const prod2 = createProductJson('Mac', 20000)
  const prod3 = createProductJson('Watch', 100, true, 'L' )
  console.log(prod1)
  console.log(prod2)
  console.log(prod3)

})();
