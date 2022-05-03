import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'


const SingleProduct = () => {
  const {id}=  useParams()
  const [product,setProduct]=useState(null);
  console.log(id)
  useEffect(()=>{

  (
    async ()=>
      {
           const {data}= await axios.get(`/api/products/${id}`);
           console.log(data);
      }
  )()

  },[])

  
  return (
    <div>


    <div class="card shopping_card card_shadow horizontal">
              <div class="img-container">
                <img
                  src="https://stayglam.com/wp-content/uploads/2014/07/Top-14-Girly-Alcoholic-Drinks-2.jpg"
                  alt=""
                />
              </div>
              <div class="lower-card">
                <header>
                  <h3>Sahi Vodka</h3>
                  <p class="header-description">By Bartendar Shashi</p>
                </header>
                <p class="card-description">
                  <span class="product_price">₹600 </span><strike>₹1000</strike
                  ><span class="card_discount">40% off</span
                  ><span class="product_rating">4⭐</span>
                </p>
                <div class="btn-container">
                  <a href="#" class="btn btn-primary btn-solid">Add To Cart</a>
                  <a href="#" class="btn btn-primary btn-outline"
                    >Add to WishList</a
                  >
                </div>
              </div>
            </div>
    </div>
  )
}

export {SingleProduct}