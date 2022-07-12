import _ from 'lodash'

const data = [
  {
    username:'ama',
    role:'dev'
  },
  {
    username:'lore',
    role:'coun'
  },
  {
    username:'leo',
    role:'master'
  },
  {
    username:'leo',
    role:'dev'
  }
]


const rta = _.groupBy(data, (item)=> item.role)
console.log(rta)
