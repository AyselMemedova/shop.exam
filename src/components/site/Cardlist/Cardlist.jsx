import React from 'react'
import Card from '../Card/Card'

const Cardlist = ({data}) => {
  return (
    <div>
        {

        
      data.map((item,index)=>{
        return(<Card item={item} key={index}/>)
      })
    }
    </div>
  )
}

export default Cardlist
