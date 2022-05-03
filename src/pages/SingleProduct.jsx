import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import '../styles/SingleProduct.css'


const SingleProduct = () => {
  const {id}=  useParams()
  const [product,setProduct]=useState(null);
  console.log(id)
  useEffect(()=>{

  (
    async ()=>
      {
           const {data:{product}}= await axios.get(`/api/products/${id}`);
           console.log(product);
           setProduct(product)
      }
  )()

  },[])

  
  return (
    <div className='single_prod_main_con'>


    <div class="card shopping_card card_shadow horizontal ">
              <div className="img-container">
                <img
                  src={product?.img}
                  alt={product?.title}
                />
              </div>
              <div class="lower-card">
                <header>
                  <h3>{product?.title}</h3>
                  <p class="header-description">From {product?.brand}</p>
                </header>
                <p class="card-description">
                  <span class="product_price">₹{product?.finalPrice} </span><strike>₹{product?.price}</strike
                  ><span class="card_discount">{product?.discountPercent}% off</span
                  ><span class="product_rating">{product?.rating}⭐</span>
                </p>
                <div>
                  <p><i class="bi bi-tags-fill"></i> Fast Delivery</p>
                  <p><i class="bi bi-tags-fill"></i>Free Home-Delivery</p>
                  <p><i class="bi bi-tags-fill"></i>Applicable for coupon</p>
                </div>
                <div class="btn-container singleprod_btn_con">
                  <p  class="btn btn-primary btn-solid">Add To Cart</p>
                  <p class="btn btn-primary btn-outline"
                    >Add to WishList</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export {SingleProduct}