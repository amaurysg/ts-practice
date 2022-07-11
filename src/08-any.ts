(() => {
  let anyVar: any;
  anyVar = 10;
  console.log(anyVar);

  anyVar = () => {};
  console.log(anyVar);

  anyVar = [];

  console.log(anyVar);

  anyVar = 'Amaury';
  const rta = (anyVar as string).charAt(0)
  console.log(rta)

  anyVar = 5363;
  const rta2 = (<number>anyVar).toFixed(1)
  console.log(rta2)

})();
