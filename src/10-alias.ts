(()=>{
    //Types
    type isPosible = string | number | boolean


    //Literal types
    type Sizes = 'XL' | 'L' | 'M'

    function whatSize(size: Sizes){
        console.log(`Your size is: ${size}`)
    }


   whatSize('L')

})()
