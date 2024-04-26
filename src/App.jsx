import { useEffect, useState } from 'react'

import axios from 'axios'
import foodData from './foodList.json'

const Title = () => {
  return (
    <h1 style={{ textAlign: 'center' }}>
      Thai options
    </h1>
  )
}

const Foods = ({ foodList=[] }) => {
  // console.log('BLAMMO: LIST: ', foodList)
  if (foodList.length > 0) {
    const thai = foodList.filter(food => food.cuisine_type === 'Thai')
    return thai.map(food => {
      return (
        <div key={food.id}>{food.title}</div>
      )
    })
  }
}

const callAPI = async (setFoodList) => {
  // const result = await axios.get('https://jsonkeeper.com/b/BXUU',)
  const result = await axios.get('https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json')
    // { 
    //   headers: 'Access-Control-Allow-Origin: *'
    // })
  // const result = await axios.get('./foodList.json')
  // const result = await axios.get('https://mp127a2c073add0e702e.free.beeceptor.com')
  // const result = JSON.parse(data)
  // console.log('DATA: ', data)
  // console.log('RESULT: ', result)
  // console.log('RESULT: ', JSON.parse(result.data))
  if (result) {
    console.log('BLAMMO: RESULT DATA: ', result.data)
    setFoodList(result.data)
  }
  setFoodList(foodData)
}


function App() {
  const [foodList, setFoodList] = useState([])
  
  useEffect(() => {
    callAPI(setFoodList)
  }, [])
  
  return (
    <div 
      className="bg-primary h-100"
      style={{ color: 'white' }}
    >
      <Foods foodList={foodList} />
    </div>
  )
}


export default App
