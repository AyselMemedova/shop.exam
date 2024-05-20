import React from 'react'
import Card from '../Card/Card'

const Cardlist = ({ data }) => {
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
                    <div className="owl-stage owl__stage cards_flex" >
                        {
                          data.map((item, index) => {
                            return (<Card item={item} key={index} />)
                          })
                        }
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
      </div>
    </div>

  )
}

export default Cardlist
