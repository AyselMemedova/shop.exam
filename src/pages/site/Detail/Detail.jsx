import axios from 'axios'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MainContext from '../../../context/context'

const Detail = () => {
  const {data,setData} =useContext(MainContext)
  const id =useParams()
  axios.get(`http://localhost:3000/products/${id}`).then((res)=>
    setData(res.data)
  )
  console.log(data)
  return (
    <div>
      detail
    </div>
  )
}

export default Detail
