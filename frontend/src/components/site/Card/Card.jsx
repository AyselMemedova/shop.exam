import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ item }) => {

  return (
    <div className="item">
      <div className="block-4 text-center">
        <figure className="block-4-image">
          <img
            src={item.image}
            width={"250px"}
            height={"250px"}
            alt="Image placeholder"
            className="img-fluid"
          />
        </figure>
        <div className="block-4-text p-4">
          <h3>
            <a href="#!" >{item.title}</a>
          </h3>
          <p className="textss">{item.desc}</p>
          <p className=" font-weight-bold price">Price:{item.price} $</p>
          <Link to={`details/${item._id}`}>Go to Detail</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
