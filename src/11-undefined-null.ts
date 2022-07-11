(()=>{
  let myNumber : number
  let myString : string

  let myNull: null = null
  let myUndefinded : undefined = undefined

  console.log(myNull)
  console.log(myUndefinded)

  let myObject : object | number | null
  myObject = null
  myObject = [{},{},{}].length
  console.log('final',myObject)



  function hi(name: string | null){
    let hello = 'Hola'
    if(name){
      console.log(`${hello} ${name}`)
    } else{
      console.log(`no hay nada`)

    }

  }
  function hi2(name: string | null){
    let hello = 'Hola'
    hello += name?.toLocaleLowerCase() || ' nobody'
    console.log(hello)
  }


  hi('Amayry')
  hi(null)
  hi2(null)
  hi2('amaury julio')

})()
