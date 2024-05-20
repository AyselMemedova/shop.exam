import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MainContext from '../../../context/context'

const Detail = () => {
  const { data, setData } = useContext(MainContext)
  const _id = useParams()
  const target = data.find((x)=> x._id === _id._id)
  console.log(data)
  console.log(target)
  console.log(_id._id)
  return (
   
   
   <div className="container mb-5">
    <div className="row">
      <div className="col-6">
        <img src={target.image} width={"450px"} height={"400px"} alt="" />
      </div>
      <div className="col-6">
        <h1>Title:{target.title }</h1>
        <h2>Description:{target.desc }</h2>
        <h4>Price:{target.price } AZN</h4>
      </div>
    </div>
   </div>
  )
}

export default Detail
