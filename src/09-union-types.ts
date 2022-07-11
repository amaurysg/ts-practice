(()=>{
  //Union types
  let userId: string | number;
  userId = 8282
  userId = 'amau'

function greeting (str: string | number){
  if (typeof(str) === 'string'){
    console.log(`Hola ${str}`)
  }else{
    console.log(`Número ${str}`)
  }
}

greeting('Amaury')
greeting(6272)

})()
