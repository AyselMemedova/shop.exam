import React, { useContext } from 'react'

import { Helmet } from 'react-helmet-async';
import "./Home.css"
import Loading from '../../../components/Loading/Loading';
import Cardlist from '../../../components/site/Cardlist/Cardlist';
import MainContext from '../../../context/context';
const Home = () => {
  const {data} = useContext(MainContext)
  console.log(data)
  return (
    <div>

<Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className='section1_find'>
        <div className='find'>
          {/* <div className='find_img'>
            <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp " alt="" />
          </div> */}

          <div className='find_text'>
            <h1>Finding Your <br />Perfect Shoes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            <button>Shop Now</button>

          </div>
        </div>

      </section>

      <section className='section2_free'>

        <div className='free_row'>

          <div className='free_row_card'>
            <i class="fa-solid fa-truck"></i>
            <div className='free_row_card_text'>
              <h2>FREE SHIPPING</h2>
              <p>
                FREE SHIPPING
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>

          </div>

          <div className='free_row_card'>
            <i class="fa-solid fa-rotate-left"></i>
            <div className='free_row_card_text'>
              <h2>FREE RETURNS</h2>
              <p>
                FREE SHIPPING
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>

          </div>

          <div className='free_row_card'>
            <i class="fa-solid fa-circle-question"></i>
            <div className='free_row_card_text'>
              <h2>CUSTOMER SUPPORT</h2>
              <p>
                FREE SHIPPING
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>

          </div>

        </div>

      </section>

      <section className='section3_image'>
        <div className='image_row'>

          <div className='image_card'>
            <div className='image_card_img'>
              <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg.webp" alt="" />
            </div>
            <div className='image_card_text'>
              <p>Collections</p>
              <h3>Women</h3>

            </div>
          </div>

          <div className='image_card'>
            <div className='image_card_img'>
              <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg.webp" alt="" />
            </div>

            <div className='image_card_text'>
              <p>Collections</p>
              <h3>Children</h3>

            </div>

          </div>
          <div className='image_card'>
            <div className='image_card_img'>
              <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg.webp" alt="" />
            </div>
            <div className='image_card_text'>
              <p>Collections</p>
              <h3>Men</h3>

            </div>
          </div>

        </div>

      </section>


      <section>
        {/* <div className="Products">
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
                                  src="https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg"
                                  alt="Image placeholder"
                                  className="img-fluid"
                                />
                              </figure>
                              <div className="block-4-text p-4">
                                <h3>
                                  <a href="#!" >Tank Top</a>
                                </h3>
                                <p className="textss">Finding perfect t-shirt</p>
                                <p className=" font-weight-bold price">$50</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item owl__item "
                        >
                          <div className="item">
                            <div className="block-4 text-center">
                              <figure className="block-4-image">
                                <img
                                  src="https://preview.colorlib.com/theme/shoppers/images/shoe_1.jpg"
                                  alt="Image placeholder"
                                  className="img-fluid"
                                />
                              </figure>
                              <div className="block-4-text p-4">
                                <h3>
                                  <a href="#!" >Corater</a>
                                </h3>
                                <p className="textss">Finding perfect products</p>
                                <p className="font-weight-bold">$50</p>
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
        </div> */}

        {<Cardlist data={data}/>}
      </section>
    </div>
  )
}

export default Home
