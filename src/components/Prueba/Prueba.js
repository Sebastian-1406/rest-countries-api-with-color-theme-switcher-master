
const ForIn = ({contries}) => {
  const array = []
  contries.map(({currencies}) => {
    for(const prop in currencies){
      array.push(currencies[prop])
    }
    console.log(array)
    return array
  })
}
export default ForIn