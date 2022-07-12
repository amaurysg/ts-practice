import {subDays, format} from 'date-fns'


const date = new Date(1998,1,28)
const rta = subDays(date, 5)
const str = format(rta, 'yyyy/MM/dd')
console.log(rta)
console.log(str)
