import { useEffect, useState } from 'react'

import axios from 'axios'


const Title = () => {
  return (
    <h1 style={{ textAlign: 'center' }}>
      Thai options
    </h1>
  )
}

const Foods = ({ foodList }) => {
  console.log('BLAMMO: LIST: ', foodList)
  if (foodList.length > 0) {
    const thai = foodList.filter(food => food.cuisine_type === 'Thai')
    return thai.map(food => {
      return (
        <div>{food.title}</div>
      )
    })
  }
}

const callAPI = async ({ setFoodList }) => {
  const result = await axios.get('https://www.jsonkeeper.com/b/MDXW')
  if (result) {
    setFoodList(result.data)
  }
}


function App() {
  const [foodList, setFoodList] = useState([])
  
  useEffect(() => {
    callAPI({ setFoodList })
  }, [])



  return (
    <div 
      className="bg-primary h-100"
      style={{ color: 'white' }}
    >
      <Title />
      <Foods foodList={foodList} />
    </div>
  )
}


export default App
