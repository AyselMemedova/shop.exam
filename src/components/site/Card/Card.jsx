import React from 'react'
import {Link} from 'react-router-dom'
const Card = ( {item}) => {
  return (
    <div>
        <div className="Products">
          <div className="site-section block-3 site-blocks-2 bg-light Products__box">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 site-section-heading text-center pt-4">
                  <h2>Featured Products</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="nonloop-block-3 owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage owl__stage cards_flex"
                      >
                        <div
                          className="owl-item owl__item "
                        >
                          <div className="item">
                            <div className="block-4 text-center">
                              <figure className="block-4-image">
                                <img
                                  src={item.img}
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
                                <Link to={`details/${item.id}`}>Go to Detail</Link>
                              </div>
                            </div>
                          </div>
                        </div>

                    

                      </div>
                    </div>
                    <div className="owl-nav">
                      <div className="owl-prev disabled">
                        <span className="icon-arrow_back"></span>
                      </div>
                      <div className="owl-next">
                        <span className="icon-arrow_forward"></span>
                      </div>
                    </div>
                    <div className="owl-dots">
                      <div className="owl-dot active">
                        <span></span>
                      </div>
                      <div className="owl-dot">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> *
    </div>
  )
}

export default Card
